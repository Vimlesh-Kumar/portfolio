import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const InteractiveTerminal = () => {
  const [history, setHistory] = useState([
    { type: "output", text: "Portfolio dev server is running!\nType 'help' to see available commands.", color: "var(--accent-primary)" },
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (bottomRef.current && typeof bottomRef.current.scrollIntoView === "function") {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [history]);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  const getCommandOutput = (baseCmd) => {
    switch(baseCmd) {
      case "help":
        return "Available commands:\n  help    - Show this message\n  whoami  - Display profile info\n  skills  - List core technical skills\n  contact - Get contact information\n  ls      - List directory contents\n  date    - Show current date\n  clear   - Clear terminal output\n  echo    - Print a message";
      case "whoami":
        return "Vimlesh Kumar\nFull-Stack Engineer specialized in React, Vue 3, and Node.js.\nCurrently building crisp UIs and scalable backend systems.";
      case "skills":
        return "Frontend:  React, Vue 3, Tailwind CSS, TypeScript\nBackend:   Node.js, Express, .NET\nData:      PostgreSQL, SQL Server, MongoDB";
      case "contact":
        return "Email:    vimlesh11072000@gmail.com\nLinkedIn: linkedin.com/in/vimlesh11\nGitHub:   github.com/Vimlesh-Kumar";
      case "ls":
        return "projects/\nresume.pdf\nsrc/\nnode_modules/";
      case "sudo":
        return "vrooom... nice try, but you don't have root privileges here.";
      case "date":
        return new Date().toString();
      default:
        return null;
    }
  };

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      const cmd = input.trim();
      setInput("");

      if (!cmd) {
        setHistory([...history, { type: "input", text: "" }]);
        return;
      }

      const newHistory = [...history, { type: "input", text: cmd }];

      const args = cmd.split(" ");
      const baseCmd = args[0].toLowerCase();

      if (baseCmd === "clear") {
        setHistory([]);
        return;
      }

      if (baseCmd === "echo") {
        newHistory.push({ type: "output", text: args.slice(1).join(" ") });
      } else {
        const output = getCommandOutput(baseCmd);
        if (output) {
          newHistory.push({ type: "output", text: output });
        } else {
          newHistory.push({ type: "output", text: `zsh: command not found: ${baseCmd}`, color: "var(--terminal-dot-red)" });
        }
      }

      setHistory(newHistory);
    }
  };

  return (
    <div 
      className="dev-terminal relative z-10 w-full hover-glow cursor-text group transition duration-500"
      onClick={handleFocus}
      style={{ height: '360px', display: 'flex', flexDirection: 'column' }}
    >
      <div className="dev-terminal-header shrink-0">
        <div className="dev-terminal-dot" style={{ background: 'var(--terminal-dot-red)' }} />
        <div className="dev-terminal-dot" style={{ background: 'var(--terminal-dot-yellow)' }} />
        <div className="dev-terminal-dot" style={{ background: 'var(--terminal-dot-green)' }} />
        <div className="mx-auto text-xs font-medium opacity-50">vimlesh@dev ~ zsh</div>
      </div>
      
      <div className="dev-terminal-body font-mono flex-1 overflow-y-auto overflow-x-hidden p-5 text-[13px] leading-relaxed relative" style={{ scrollbarWidth: 'thin' }}>
        {history.map((line, i) => (
          <div key={i} className="mb-3 whitespace-pre-wrap wrap-break-word">
            {line.type === "input" ? (
              <div>
                <span className="terminal-prompt font-bold">vimlesh@dev</span> <span style={{ opacity: 0.6 }}>~/projects</span>
                <br />
                <span style={{ color: 'var(--terminal-dot-yellow)' }}>$</span> <span style={{ color: 'var(--text-primary)' }}>{line.text}</span>
              </div>
            ) : (
              <div style={{ color: line.color || 'var(--terminal-text)' }}>
                {line.text}
              </div>
            )}
          </div>
        ))}

        <div className="mt-2 flex flex-col">
          <div>
            <span className="terminal-prompt font-bold">vimlesh@dev</span> <span style={{ opacity: 0.6 }}>~/projects</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2" style={{ color: 'var(--terminal-dot-yellow)' }}>$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleCommand}
              className="flex-1 bg-transparent outline-none border-none font-mono"
              style={{ color: 'var(--accent-emerald)' }}
              autoComplete="off"
              spellCheck="false"
              autoFocus
            />
          </div>
        </div>
        <div ref={bottomRef} className="h-1 text-transparent select-none">.</div>
      </div>
    </div>
  );
};

export default InteractiveTerminal;
