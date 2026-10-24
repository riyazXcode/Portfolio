import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Copy, Check, Sparkles, CornerDownLeft, Play, RefreshCw, Maximize2, Minimize2 } from 'lucide-react';

const PRESET_COMMANDS = [
    { id: 'status', label: 'curl status', cmd: 'curl -s https://riyazkhan.dev/status' },
    { id: 'docker', label: 'docker ps', cmd: 'docker ps --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"' },
    { id: 'iac', label: 'terraform plan', cmd: 'terraform plan -target=module.hybrid_cloud_migration' },
    { id: 'ping', label: 'ping node', cmd: 'ping -c 3 riyazkhan.dev' },
    { id: 'skills', label: 'cat skills', cmd: 'cat skills.txt' },
    { id: 'help', label: 'help', cmd: 'help' }
];

const INITIAL_COMMANDS = [
    {
        id: 'init-1',
        cmd: 'curl -s https://riyazkhan.dev/status',
        outputType: 'json',
        data: {
            engineer: "Mohammed Riyaz Khan",
            role: "Cloud Migration Specialist @ IBM",
            focus: "Enterprise Hybrid Cloud Application Migration",
            infrastructure: "Bare-Metal Proxmox VE 9 + Docker Alpine",
            edge_security: "Cloudflare Tunnel (Zero Inbound Open Ports)"
        }
    }
];

const InteractiveTerminal = () => {
    const [entries, setEntries] = useState(INITIAL_COMMANDS);
    const [inputVal, setInputVal] = useState('');
    const [activeTab, setActiveTab] = useState('status');
    const [cmdHistory, setCmdHistory] = useState(['curl -s https://riyazkhan.dev/status']);
    const [historyIdx, setHistoryIdx] = useState(-1);
    const [copied, setCopied] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isTyping, setIsTyping] = useState(false);

    const inputRef = useRef(null);
    const terminalBodyRef = useRef(null);

    // Auto-scroll to bottom of terminal when entries change
    useEffect(() => {
        if (terminalBodyRef.current) {
            terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
        }
    }, [entries, isTyping]);

    const handleCopy = () => {
        const textContent = entries.map(e => {
            if (e.outputType === 'json') {
                return `$ ${e.cmd}\n${JSON.stringify(e.data, null, 2)}`;
            } else if (e.outputType === 'text') {
                return `$ ${e.cmd}\n${e.text}`;
            }
            return `$ ${e.cmd}`;
        }).join('\n\n');

        navigator.clipboard.writeText(textContent);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const executeCommand = (rawCommand) => {
        const cmd = rawCommand.trim();
        if (!cmd) return;

        // Add to history
        setCmdHistory(prev => [cmd, ...prev]);
        setHistoryIdx(-1);

        const lower = cmd.toLowerCase();

        // 1. CLEAR
        if (lower === 'clear' || lower === 'cls') {
            setEntries([]);
            setInputVal('');
            return;
        }

        // 2. STATUS / CURL
        if (lower.includes('status') || lower.includes('curl')) {
            setActiveTab('status');
            setEntries(prev => [
                ...prev,
                {
                    id: String(Date.now()),
                    cmd: 'curl -s https://riyazkhan.dev/status',
                    outputType: 'json',
                    data: {
                        engineer: "Mohammed Riyaz Khan",
                        role: "Cloud Migration Specialist @ IBM",
                        focus: "Enterprise Hybrid Cloud Application Migration",
                        infrastructure: "Bare-Metal Proxmox VE 9 + Docker Alpine",
                        edge_security: "Cloudflare Tunnel (Zero Inbound Open Ports)",
                        uptime: "99.98% SLA",
                        node: "pve-cluster-01.local"
                    }
                }
            ]);
        }
        // 3. DOCKER PS
        else if (lower.includes('docker')) {
            setActiveTab('docker');
            setEntries(prev => [
                ...prev,
                {
                    id: String(Date.now()),
                    cmd: 'docker ps --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"',
                    outputType: 'docker'
                }
            ]);
        }
        // 4. TERRAFORM / IAC
        else if (lower.includes('terraform') || lower.includes('iac') || lower.includes('plan')) {
            setActiveTab('iac');
            setEntries(prev => [
                ...prev,
                {
                    id: String(Date.now()),
                    cmd: 'terraform plan -target=module.hybrid_cloud_migration',
                    outputType: 'terraform'
                }
            ]);
        }
        // 5. PING
        else if (lower.startsWith('ping')) {
            setActiveTab('ping');
            setEntries(prev => [
                ...prev,
                {
                    id: String(Date.now()),
                    cmd: 'ping -c 3 riyazkhan.dev',
                    outputType: 'ping'
                }
            ]);
        }
        // 6. SKILLS
        else if (lower.includes('skills')) {
            setActiveTab('skills');
            setEntries(prev => [
                ...prev,
                {
                    id: String(Date.now()),
                    cmd: 'cat skills.txt',
                    outputType: 'skills'
                }
            ]);
        }
        // 7. WHOAMI
        else if (lower === 'whoami') {
            setEntries(prev => [
                ...prev,
                {
                    id: String(Date.now()),
                    cmd: 'whoami',
                    outputType: 'text',
                    text: 'guest@riyazkhan.dev [Authenticated Recruiter / Engineer Session]\nAccess Level: Verified Guest • Zero-Trust Tunnel Active'
                }
            ]);
        }
        // 8. UPTIME / UNAME
        else if (lower.includes('uptime') || lower.includes('uname')) {
            setEntries(prev => [
                ...prev,
                {
                    id: String(Date.now()),
                    cmd: 'uptime && uname -a',
                    outputType: 'text',
                    text: '15:42:00 up 14 days, 3:20, 1 user, load average: 0.14, 0.19, 0.18\nLinux pve-01 6.8.4-2-pve #1 SMP PREEMPT_DYNAMIC Proxmox x86_64 GNU/Linux'
                }
            ]);
        }
        // 9. CONTACT
        else if (lower.includes('contact') || lower.includes('email')) {
            setEntries(prev => [
                ...prev,
                {
                    id: String(Date.now()),
                    cmd: 'cat contact.json',
                    outputType: 'contact'
                }
            ]);
        }
        // 10. HELP
        else if (lower === 'help' || lower === '?') {
            setActiveTab('help');
            setEntries(prev => [
                ...prev,
                {
                    id: String(Date.now()),
                    cmd: 'help',
                    outputType: 'help'
                }
            ]);
        }
        // 11. SUDO / RM (EASTER EGG)
        else if (lower.includes('sudo') || lower.includes('rm ') || lower.includes('shutdown')) {
            setEntries(prev => [
                ...prev,
                {
                    id: String(Date.now()),
                    cmd: cmd,
                    outputType: 'error',
                    text: 'Permission denied: Zero-Trust Access Policy enforced.\nProxmox VE 9 LXC sandbox is protected against unauthorized kernel commands.'
                }
            ]);
        }
        // UNKNOWN COMMAND
        else {
            setEntries(prev => [
                ...prev,
                {
                    id: String(Date.now()),
                    cmd: cmd,
                    outputType: 'error',
                    text: `bash: command not found: "${cmd}". Type 'help' to view available commands.`
                }
            ]);
        }

        setInputVal('');
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            executeCommand(inputVal);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (cmdHistory.length > 0) {
                const nextIdx = Math.min(historyIdx + 1, cmdHistory.length - 1);
                setHistoryIdx(nextIdx);
                setInputVal(cmdHistory[nextIdx]);
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIdx > 0) {
                const nextIdx = historyIdx - 1;
                setHistoryIdx(nextIdx);
                setInputVal(cmdHistory[nextIdx]);
            } else if (historyIdx === 0) {
                setHistoryIdx(-1);
                setInputVal('');
            }
        } else if (e.key === 'Tab') {
            e.preventDefault();
            // Simple tab completion for commands
            const commands = ['status', 'docker ps', 'terraform plan', 'ping', 'skills', 'whoami', 'contact', 'clear', 'help'];
            const match = commands.find(c => c.startsWith(inputVal.toLowerCase().trim()));
            if (match) setInputVal(match);
        }
    };

    return (
        <div 
            onClick={() => inputRef.current?.focus()}
            className={`mt-8 w-full max-w-5xl glass-panel rounded-3xl p-4 sm:p-5 shadow-2xl laser-highlight transition-all duration-300 ease-out cursor-text border border-slate-800/90 hover:border-slate-700/80 ${
                isExpanded ? 'min-h-[500px]' : ''
            }`}
        >
            {/* Terminal Window Header */}
            <div className="flex flex-wrap items-center justify-between gap-2.5 pb-3 border-b border-slate-800/80 select-none">
                {/* Window Action Dots */}
                <div className="flex items-center gap-2">
                    <button 
                        onClick={(e) => {
                            e.stopPropagation();
                            setEntries(INITIAL_COMMANDS);
                            setActiveTab('status');
                        }}
                        title="Reset Terminal to Default"
                        className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-rose-500/80 hover:bg-rose-400 hover:scale-110 transition-transform cursor-pointer inline-block"
                    />
                    <button 
                        onClick={(e) => {
                            e.stopPropagation();
                            setEntries([]);
                        }}
                        title="Clear Terminal Screen"
                        className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-amber-500/80 hover:bg-amber-400 hover:scale-110 transition-transform cursor-pointer inline-block"
                    />
                    <button 
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsExpanded(!isExpanded);
                        }}
                        title={isExpanded ? "Collapse Terminal" : "Expand Terminal Height"}
                        className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-emerald-500/80 hover:bg-emerald-400 hover:scale-110 transition-transform cursor-pointer inline-block"
                    />
                    <div className="hidden xs:flex items-center gap-1.5 ml-2 pl-2 border-l border-slate-800 text-[11px] sm:text-xs font-mono text-slate-400">
                        <Terminal className="w-3.5 h-3.5 text-blue-400" />
                        <span>riyaz@pve-01:~</span>
                    </div>
                </div>

                {/* Quick Interactive Command Pills */}
                <div className="flex items-center gap-1 bg-slate-950/90 p-1 rounded-xl border border-slate-800 text-xs font-mono overflow-x-auto no-scrollbar">
                    {PRESET_COMMANDS.map((preset) => {
                        const isActive = activeTab === preset.id;
                        return (
                            <button
                                key={preset.id}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    executeCommand(preset.cmd);
                                }}
                                className={`px-2.5 py-1 rounded-lg transition cursor-pointer shrink-0 text-[11px] sm:text-xs ${
                                    isActive 
                                        ? 'bg-blue-600/30 text-blue-300 border border-blue-500/40 font-semibold shadow-sm' 
                                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
                                }`}
                            >
                                {preset.label}
                            </button>
                        );
                    })}
                </div>

                {/* Window Actions Right (Expand + Copy) */}
                <div className="flex items-center gap-1.5">
                    <button 
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsExpanded(!isExpanded);
                        }}
                        className="hidden sm:flex items-center gap-1 px-2 py-1 rounded-lg bg-slate-800/70 hover:bg-slate-700 text-slate-300 transition text-[11px] font-mono cursor-pointer border border-slate-700/60"
                        title={isExpanded ? "Collapse height" : "Expand height"}
                    >
                        {isExpanded ? <Minimize2 className="w-3 h-3 text-slate-400" /> : <Maximize2 className="w-3 h-3 text-slate-400" />}
                    </button>

                    <button 
                        onClick={(e) => {
                            e.stopPropagation();
                            handleCopy();
                        }}
                        className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800/70 hover:bg-slate-700 text-slate-300 transition text-[11px] sm:text-xs font-mono cursor-pointer border border-slate-700/60 shrink-0"
                        aria-label="Copy terminal command output"
                    >
                        {copied ? (
                            <>
                                <Check className="w-3 h-3 text-emerald-400" />
                                <span className="text-emerald-400 font-semibold">Copied!</span>
                            </>
                        ) : (
                            <>
                                <Copy className="w-3 h-3 text-slate-400" />
                                <span>copy</span>
                            </>
                        )}
                    </button>
                </div>
            </div>

            {/* Scrollable Terminal Output Body */}
            <div 
                ref={terminalBodyRef}
                className={`pt-3 font-mono text-xs sm:text-sm text-left overflow-x-auto overflow-y-auto space-y-4 no-scrollbar transition-all duration-300 ${
                    isExpanded ? 'max-h-[500px]' : 'max-h-[300px] min-h-[120px]'
                }`}
            >
                {entries.map((entry) => (
                    <div key={entry.id} className="space-y-1.5">
                        {/* Executed Command Line */}
                        <div className="text-emerald-400 flex items-center gap-2 select-text">
                            <span className="text-blue-400 font-bold">$</span>
                            <span className="text-slate-200">{entry.cmd}</span>
                        </div>

                        {/* Render Based on Output Type */}
                        {entry.outputType === 'json' && (
                            <div className="text-slate-400 pl-3 border-l-2 border-emerald-500/30 space-y-0.5 select-text">
                                <div>&#123;</div>
                                <div className="pl-3 sm:pl-4">
                                    <span className="text-blue-400">"engineer"</span>: <span className="text-white">"{entry.data.engineer}"</span>,
                                </div>
                                <div className="pl-3 sm:pl-4">
                                    <span className="text-blue-400">"role"</span>: <span className="text-amber-300">"{entry.data.role}"</span>,
                                </div>
                                <div className="pl-3 sm:pl-4">
                                    <span className="text-blue-400">"focus"</span>: <span className="text-slate-300">"{entry.data.focus}"</span>,
                                </div>
                                <div className="pl-3 sm:pl-4">
                                    <span className="text-blue-400">"infrastructure"</span>: <span className="text-emerald-300">"{entry.data.infrastructure}"</span>,
                                </div>
                                <div className="pl-3 sm:pl-4">
                                    <span className="text-blue-400">"edge_security"</span>: <span className="text-cyan-300">"{entry.data.edge_security}"</span>
                                    {entry.data.uptime && ','}
                                </div>
                                {entry.data.uptime && (
                                    <>
                                        <div className="pl-3 sm:pl-4">
                                            <span className="text-blue-400">"uptime"</span>: <span className="text-emerald-400">"{entry.data.uptime}"</span>,
                                        </div>
                                        <div className="pl-3 sm:pl-4">
                                            <span className="text-blue-400">"verified_node"</span>: <span className="text-purple-300">"{entry.data.node}"</span>
                                        </div>
                                    </>
                                )}
                                <div>&#125;</div>
                            </div>
                        )}

                        {entry.outputType === 'docker' && (
                            <div className="text-slate-400 pl-3 border-l-2 border-blue-500/30 space-y-1 text-[11px] sm:text-xs select-text">
                                <div className="text-slate-500 font-semibold tracking-wider">
                                    NAMES                          STATUS                     PORTS
                                </div>
                                <div className="text-emerald-400 flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                                    <span>riyazkhan-portfolio            Up 14 days (healthy)       0.0.0.0:8080-&gt;80/tcp</span>
                                </div>
                                <div className="text-purple-400 flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                                    <span>portfolio-watchtower           Up 14 days                 (daemon poll 60s)</span>
                                </div>
                                <div className="text-cyan-400 flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                                    <span>cloudflared-tunnel             Up 14 days                 zero-trust edge tunnel</span>
                                </div>
                                <div className="text-slate-400 flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                                    <span>pve-node-exporter              Up 14 days                 telemetry metrics</span>
                                </div>
                            </div>
                        )}

                        {entry.outputType === 'terraform' && (
                            <div className="text-slate-400 pl-3 border-l-2 border-amber-500/30 space-y-0.5 text-[11px] sm:text-xs select-text">
                                <div className="text-blue-400"># module.hybrid_cloud_migration.aws_instance.app_workload will be modernized</div>
                                <div>+ resource "aws_ecs_cluster" "enterprise_modernized" &#123;</div>
                                <div className="pl-3 sm:pl-4 text-emerald-400">+ container_insights = "enabled"</div>
                                <div className="pl-3 sm:pl-4 text-emerald-400">+ workload_type      = "hybrid_cloud_migrated"</div>
                                <div className="pl-3 sm:pl-4 text-emerald-400">+ orchestration      = "Red Hat OpenShift / Kubernetes"</div>
                                <div>&#125;</div>
                                <div className="text-emerald-300 font-semibold mt-1">Plan: 4 to add, 0 to change, 0 to destroy. (Zero drift detected)</div>
                            </div>
                        )}

                        {entry.outputType === 'ping' && (
                            <div className="text-slate-400 pl-3 border-l-2 border-cyan-500/30 space-y-0.5 text-[11px] sm:text-xs select-text">
                                <div className="text-slate-400">PING riyazkhan.dev (104.21.80.1 via Cloudflare Edge): 56 data bytes</div>
                                <div className="text-emerald-400">64 bytes from 104.21.80.1: icmp_seq=1 ttl=58 time=38.4 ms</div>
                                <div className="text-emerald-400">64 bytes from 104.21.80.1: icmp_seq=2 ttl=58 time=37.9 ms</div>
                                <div className="text-emerald-400">64 bytes from 104.21.80.1: icmp_seq=3 ttl=58 time=38.2 ms</div>
                                <div className="text-cyan-300 mt-1">--- riyazkhan.dev statistics: 3 packets transmitted, 0% packet loss, avg rtt = 38.16ms</div>
                            </div>
                        )}

                        {entry.outputType === 'skills' && (
                            <div className="text-slate-400 pl-3 border-l-2 border-purple-500/30 space-y-1 text-[11px] sm:text-xs select-text">
                                <div><span className="text-blue-400 font-bold">[HYBRID CLOUD]:</span> AWS Transform, Red Hat OpenShift, Kubernetes, Microservices</div>
                                <div><span className="text-emerald-400 font-bold">[IAC &amp; DEVOPS]:</span> Terraform, Ansible, Docker Alpine, Proxmox VE 9, GitHub Actions</div>
                                <div><span className="text-cyan-400 font-bold">[FULL STACK]:</span>    FastAPI, WebSockets, Python, Node.js, Express, React, Tailwind</div>
                                <div><span className="text-purple-400 font-bold">[AI &amp; CERTS]:</span>     Anthropic Claude Certified Developer, TensorFlow.js Hand Tracking</div>
                            </div>
                        )}

                        {entry.outputType === 'contact' && (
                            <div className="text-slate-400 pl-3 border-l-2 border-blue-500/30 space-y-1 text-[11px] sm:text-xs select-text">
                                <div>Email:    <a href="mailto:riyazkhan0302005@gmail.com" className="text-blue-400 underline hover:text-blue-300">riyazkhan0302005@gmail.com</a></div>
                                <div>LinkedIn: <a href="https://linkedin.com/in/riyaz-khan-dev" target="_blank" rel="noreferrer" className="text-blue-400 underline hover:text-blue-300">/in/riyaz-khan-dev</a></div>
                                <div>GitHub:   <a href="https://github.com/riyazXcode" target="_blank" rel="noreferrer" className="text-blue-400 underline hover:text-blue-300">@riyazXcode</a></div>
                            </div>
                        )}

                        {entry.outputType === 'help' && (
                            <div className="text-slate-300 pl-3 border-l-2 border-amber-500/40 space-y-1 text-[11px] sm:text-xs select-text">
                                <div className="text-amber-300 font-semibold mb-1">Available Interactive Commands:</div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-slate-300 font-mono">
                                    <div><span className="text-emerald-400 font-bold">status</span> - Query JSON status endpoint</div>
                                    <div><span className="text-emerald-400 font-bold">docker</span> - List active containers (docker ps)</div>
                                    <div><span className="text-emerald-400 font-bold">terraform</span> - Run IaC migration plan</div>
                                    <div><span className="text-emerald-400 font-bold">ping</span> - Test live edge ping latency</div>
                                    <div><span className="text-emerald-400 font-bold">skills</span> - Display engineering competencies</div>
                                    <div><span className="text-emerald-400 font-bold">contact</span> - Show direct verified contacts</div>
                                    <div><span className="text-emerald-400 font-bold">whoami</span> - Show session identity</div>
                                    <div><span className="text-emerald-400 font-bold">uptime</span> - Node uptime &amp; Proxmox kernel</div>
                                    <div><span className="text-emerald-400 font-bold">clear</span> - Clear terminal history</div>
                                </div>
                            </div>
                        )}

                        {entry.outputType === 'text' && (
                            <div className="text-slate-300 pl-3 border-l-2 border-slate-600 whitespace-pre-wrap text-[11px] sm:text-xs select-text">
                                {entry.text}
                            </div>
                        )}

                        {entry.outputType === 'error' && (
                            <div className="text-rose-400/90 pl-3 border-l-2 border-rose-500/40 whitespace-pre-wrap text-[11px] sm:text-xs select-text">
                                {entry.text}
                            </div>
                        )}
                    </div>
                ))}

                {/* Live Interactive Command Prompt Line */}
                <div className="flex items-center gap-2 pt-2 text-xs sm:text-sm">
                    <span className="text-emerald-400 font-bold shrink-0">$</span>
                    <input
                        ref={inputRef}
                        type="text"
                        value={inputVal}
                        onChange={(e) => setInputVal(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Type a command (try 'help', 'ping', 'skills') or click preset buttons above..."
                        className="w-full bg-transparent text-white font-mono placeholder:text-slate-600 focus:outline-none caret-emerald-400"
                        autoCapitalize="off"
                        autoComplete="off"
                        spellCheck="false"
                    />
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            executeCommand(inputVal);
                        }}
                        className="text-slate-500 hover:text-emerald-400 transition-colors p-1 shrink-0"
                        title="Execute command"
                    >
                        <CornerDownLeft className="w-3.5 h-3.5" />
                    </button>
                </div>
            </div>

            {/* Terminal Footer Helper Bar */}
            <div className="mt-3 pt-2.5 border-t border-slate-800/60 flex flex-wrap items-center justify-between text-[10px] sm:text-[11px] text-slate-500 font-mono select-none">
                <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>Proxmox VE 9 LXC Container</span>
                    <span className="hidden sm:inline">•</span>
                    <span className="hidden sm:inline text-slate-400">Type <kbd className="px-1 rounded bg-slate-800 text-slate-300 border border-slate-700">help</kbd> for commands</span>
                </div>
                <div className="hidden xs:flex items-center gap-2 text-slate-400">
                    <span>Use <kbd className="px-1 rounded bg-slate-800 text-slate-300 border border-slate-700">↑</kbd> <kbd className="px-1 rounded bg-slate-800 text-slate-300 border border-slate-700">↓</kbd> for history</span>
                </div>
            </div>
        </div>
    );
};

export default InteractiveTerminal;
