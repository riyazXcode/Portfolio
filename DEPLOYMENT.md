# On-Prem Proxmox Deployment & CI/CD Guide for riyazkhan.dev

This guide documents the architecture and steps to run your portfolio container on your on-prem **Proxmox VE** server with automated **GitHub Actions CI/CD** and **Cloudflare** routing.

---

## 🏛️ Architecture Overview

```
   Developer (You)
         │  git push origin main
         ▼
   GitHub Repository (riyazXcode/portfolio)
         │  triggers
         ▼
   GitHub Actions Workflow (.github/workflows/deploy.yml)
         │  builds & pushes
         ▼
   GitHub Container Registry (GHCR: ghcr.io/riyazxcode/portfolio:latest)
         │  polled every 60s
         ▼
   On-Prem Proxmox VE Server (LXC or VM)
   ┌─────────────────────────────────────────────────────────┐
   │ Docker Compose:                                         │
   │   ├── riyazkhan-portfolio (Nginx Alpine container)       │
   │   ├── watchtower (auto-pulls & restarts on new commit)   │
   │   └── [Optional] cloudflared (Zero-trust tunnel)         │
   └─────────────────────────────────────────────────────────┘
         ▲
         │ encrypted traffic
         ▼
   Cloudflare Edge (DNS, SSL Termination & DDoS Mitigation)
         ▲
         │
   https://riyazkhan.dev (Visitors)
```

---

## 🚀 Step 1: Push Code to GitHub

Commit and push your updated portfolio to your GitHub repository:

```bash
git add .
git commit -m "feat: transform portfolio to IBM CloudOps, add on-prem showcase, Dockerfile and CI/CD"
git push origin main
```

Once pushed, go to the **Actions** tab on GitHub:
* The workflow `.github/workflows/deploy.yml` will automatically build your Docker container.
* It will push the production image to `ghcr.io/riyazxcode/portfolio:latest`.

> **Note on GHCR Package Visibility:**  
> By default, GitHub Container packages might be set to private.  
> On GitHub: Go to your profile → **Packages** → `portfolio` → **Package settings** → Scroll to **Danger Zone** → Change visibility to **Public** (so your Proxmox server can pull it without generating personal access tokens).

---

## 🖥️ Step 2: Deploy on Proxmox VE

You can host this inside an **Ubuntu/Debian LXC Container** or a **VM** on your Proxmox node.

### 1. Install Docker & Compose (if not already installed)
```bash
curl -fsSL https://get.docker.com | sh
sudo systemctl enable --now docker
```

### 2. Create the Project Directory
```bash
mkdir -p ~/portfolio && cd ~/portfolio
```

### 3. Copy `docker-compose.yml` to your Server
You can copy the `docker-compose.yml` from this repository:
```bash
curl -O https://raw.githubusercontent.com/riyazXcode/portfolio/main/docker-compose.yml
```
*(Or transfer the `docker-compose.yml` created in this repo)*

### 4. Start the Stack
```bash
docker compose up -d
```

Verify that both containers are running healthy:
```bash
docker compose ps
docker logs riyazkhan-portfolio
```
The portfolio is now serving on `http://<your-proxmox-local-ip>:8080`!

---

## 🌐 Step 3: Connect Cloudflare Domain (`riyazkhan.dev`)

There are two recommended ways to connect `riyazkhan.dev` to your on-prem Proxmox server:

### Option A: Cloudflare Tunnel (`cloudflared`) — **(Recommended: Zero Port Forwarding)**
Cloudflare Tunnel exposes your local container to `riyazkhan.dev` securely without opening any ports on your home router firewall:
1. Go to **Cloudflare Zero Trust Dashboard** → **Networks** → **Tunnels**.
2. Click **Create a Tunnel** (name it `proxmox-homelab`).
3. Under **Install and run a connector**, copy the tunnel token.
4. In your Cloudflare tunnel public hostnames:
   * Domain: `riyazkhan.dev`
   * Type: `HTTP`
   * URL: `portfolio:80` (or `localhost:8080`)
5. In `docker-compose.yml`, uncomment the `cloudflared` service and supply your token:
   ```yaml
   cloudflared:
     image: cloudflare/cloudflared:latest
     container_name: cloudflared-tunnel
     restart: unless-stopped
     environment:
       - TUNNEL_TOKEN=your_token_here
     command: tunnel --no-autoupdate run
     networks:
       - portfolio-net
   ```
6. Run `docker compose up -d`.

### Option B: Cloudflare DNS + Reverse Proxy / Port Forwarding
1. On your home router: Forward ports `80` and `443` to your Proxmox node's local IP.
2. On Cloudflare DNS:
   * Add an **A Record**: `riyazkhan.dev` → `Your Home Public IP` (Set Proxy Status to **Proxied / Orange Cloud**).
   * In Cloudflare SSL/TLS Settings: Select **Full** or **Full (Strict)**.

---

## 🔄 Step 4: How Automatic Reloading Works

Whenever you make any changes to your portfolio on your laptop/desktop:
1. You run `git push origin main`.
2. **GitHub Actions** automatically runs the multi-stage build and updates `ghcr.io/riyazxcode/portfolio:latest`.
3. **Watchtower** running on your Proxmox server checks for new images every 60 seconds.
4. When Watchtower sees the new image digest:
   * It downloads the new image layer.
   * It gracefully stops the old container.
   * It spins up the new container with your live changes.
   * Total reload time: **~30 to 60 seconds** with zero manual server intervention!

---

## 🧪 Testing Locally

To test the container locally on your workstation before pushing:
```bash
docker build -t portfolio-local .
docker run -d -p 8080:80 --name test-portfolio portfolio-local
```
Then visit `http://localhost:8080` in your browser.
