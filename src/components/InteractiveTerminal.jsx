import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const InteractiveTerminal = () => {
  const [history, setHistory] = useState([
    { type: "output", text: "Portfolio dev server is running!\nType 'help' to see available commands.", color: "var(--accent-primary)" },
  ]);
  const [input, setInput] = useState("");
  const [currentDir, setCurrentDir] = useState("~");
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

  const pushOutput = (text, color) => {
    setHistory((prev) => [...prev, { type: "output", text, color }]);
  };

  const processCommand = async (cmd, baseCmd, args) => {
    switch (baseCmd) {
      case "help":
        pushOutput(
          "Available commands:\n" +
          "  help    - Show this message\n" +
          "  whoami  - Display profile info\n" +
          "  skills  - List core technical skills\n" +
          "  ls      - List directory files\n" +
          "  cd      - Change directory (e.g., 'cd projects')\n" +
          "  cat     - Print file contents (e.g., 'cat README.md')\n" +
          "  github  - Fetch GitHub info (options: 'github repos', 'github profile')\n" +
          "  open    - Open pages (e.g., 'open github', 'open linkedin')\n" +
          "  curl    - Fetch endpoint content (e.g., 'curl vimlesh.dev')\n" +
          "  date    - Show current date\n" +
          "  clear   - Clear terminal output"
        );
        break;
      case "whoami":
        pushOutput(
          "Vimlesh Kumar\n" +
          "Full-Stack Engineer specialized in Vue 3, Node.js, Express, and Microservices.\n" +
          "Currently building crisp UIs and scalable backend systems."
        );
        break;
      case "skills":
        pushOutput(
          "Frontend:  Vue 3, Nuxt.js, Tailwind CSS, TypeScript\n" +
          "Backend:   Node.js, Express, Microservices\n" +
          "Data:      PostgreSQL, SQL Server, MongoDB"
        );
        break;
      case "contact":
        pushOutput(
          "Email:    vimlesh11072000@gmail.com\n" +
          "LinkedIn: linkedin.com/in/vimlesh11\n" +
          "GitHub:   github.com/Vimlesh-Kumar"
        );
        break;
      case "date":
        pushOutput(new Date().toString());
        break;
      case "ls":
        if (currentDir === "~") {
          pushOutput("projects/    README.md    resume.pdf    skills.txt", "var(--accent-primary)");
        } else if (currentDir === "~/projects") {
          pushOutput(
            "squel/             online-pathshala/  vimpgp/\n" +
            "skycast-weather/   zync/              tatkal-reminder/\n" +
            "cashsync/          natural++/         monster-slayer/\n" +
            "bike-repair/       restaurant/",
            "var(--accent-primary)"
          );
        }
        break;
      case "cd": {
        const target = args[1] ? args[1].trim() : "";
        if (!target || target === "~") {
          setCurrentDir("~");
        } else if (target === "projects" || target === "./projects" || target === "projects/") {
          if (currentDir === "~") {
            setCurrentDir("~/projects");
          } else {
            pushOutput(`cd: no such file or directory: ${target}`, "var(--terminal-dot-red)");
          }
        } else if (target === "..") {
          if (currentDir === "~/projects") {
            setCurrentDir("~");
          }
        } else if (target.startsWith("projects/")) {
          pushOutput(`cd: projects are directories but we don't cd into project details. Use 'cat projects/squel' or 'open projects/squel'.`);
        } else {
          pushOutput(`cd: no such file or directory: ${target}`, "var(--terminal-dot-red)");
        }
        break;
      }
      case "cat": {
        const file = args[1] ? args[1].trim() : "";
        if (!file) {
          pushOutput("cat: missing file name. Usage: cat <filename>");
          break;
        }

        if (currentDir === "~") {
          if (file === "README.md") {
            pushOutput(
              "==================================================\n" +
              "   Vimlesh Kumar - Full-Stack & Microservices Expert\n" +
              "==================================================\n" +
              "I build scalable backend microservices and high-fidelity frontends.\n" +
              "Open source maintainer and clean coder.\n" +
              "Type 'open github' or 'github repos' to explore my work!"
            );
          } else if (file === "resume.pdf") {
            pushOutput("Opening resume in new tab...", "var(--accent-emerald)");
            window.open("https://drive.google.com/uc?export=download&id=1M6sDmm16j4LEKSjINYaiScjDA2ytz7_v", "_blank");
          } else if (file === "skills.txt") {
            pushOutput(
              "Language/Frameworks:\n" +
              "  - JavaScript (ES6+), TypeScript, Vue 3, Nuxt.js, HTML5, CSS3, Tailwind CSS\n" +
              "  - Node.js, Express, Microservices, REST APIs, WebSockets\n" +
              "Databases & Cloud:\n" +
              "  - PostgreSQL, SQL Server, MongoDB, Prisma\n" +
              "  - Azure, CI/CD pipelines, Docker, Git"
            );
          } else if (file === "projects" || file === "projects/") {
            pushOutput("cat: projects: Is a directory");
          } else {
            pushOutput(`cat: ${file}: No such file or directory`, "var(--terminal-dot-red)");
          }
        } else if (currentDir === "~/projects") {
          const cleanFile = file.replace("/", "");
          const projectDetails = {
            "squel": "Squel.js: Active maintainer of SQL query builder library for JavaScript. Modernized and updated features for cleaner object-oriented query generation in Node.js.",
            "online-pathshala": "Online Pathshala: Full-stack online learning platform with course catalog, video streaming, and pagination. Built with Vue 3, Vuetify, Node.js, MySQL.",
            "vimpgp": "VimPGP: Browser PGP key manager for generating, importing, and managing encryption keys in a clean Vue 3 dashboard.",
            "skycast-weather": "SkyCast Weather: Weather forecasting dashboard built with Vue 3, TypeScript, and REST APIs.",
            "zync": "Zync Audio Sync: Synchronized playback experiment utilizing WebSockets and Node.js for real-time latent coordination.",
            "tatkal-reminder": "Tatkal Booking Reminder: Full-stack reminder automation utilizing Node.js, Express, and MongoDB.",
            "cashsync": "CashSync Ledger: Financial transaction parser utilizing Node.js and Regex APIs to deduct records.",
            "natural++": "Natural++: Natural language to code translator IDE built with JavaScript and Node parsing.",
            "monster-slayer": "Monster Slayer: Game built with Vue.js, CSS3, and standard reactive logic.",
            "bike-repair": "Bike Repair: Landing page built with HTML5, CSS3, and vanilla JS.",
            "restaurant": "Restaurant: Responsive restaurant front-end landing page built with HTML5, CSS3, and vanilla JS."
          };
          
          if (projectDetails[cleanFile]) {
            pushOutput(projectDetails[cleanFile]);
          } else {
            pushOutput(`cat: ${file}: No such file or directory`, "var(--terminal-dot-red)");
          }
        }
        break;
      }
      case "open": {
        const target = args[1] ? args[1].trim() : "";
        if (!target) {
          pushOutput("open: missing target. Options: github, linkedin, resume, projects/squel etc.");
          break;
        }

        if (target === "github") {
          pushOutput("Opening GitHub Profile...", "var(--accent-emerald)");
          window.open("https://github.com/Vimlesh-Kumar", "_blank");
        } else if (target === "linkedin") {
          pushOutput("Opening LinkedIn Profile...", "var(--accent-emerald)");
          window.open("https://linkedin.com/in/vimlesh11", "_blank");
        } else if (target === "resume") {
          pushOutput("Opening Resume...", "var(--accent-emerald)");
          window.open("https://drive.google.com/uc?export=download&id=1M6sDmm16j4LEKSjINYaiScjDA2ytz7_v", "_blank");
        } else if (target.startsWith("projects/")) {
          const proj = target.replace("projects/", "").trim();
          const urls = {
            "squel": "https://github.com/hiddentao/squel",
            "online-pathshala": "https://github.com/Vimlesh-Kumar/online-pathshala",
            "vimpgp": "https://github.com/Vimlesh-Kumar/vimpgp",
            "skycast-weather": "https://github.com/Vimlesh-Kumar/weather-website",
            "zync": "https://github.com/Vimlesh-Kumar/zync",
            "tatkal-reminder": "https://github.com/Vimlesh-Kumar/Tatkal-Booking-Reminder",
            "cashsync": "https://github.com/Vimlesh-Kumar/CashSync",
            "natural++": "https://github.com/Vimlesh-Kumar/natural-pluse-pluse",
            "monster-slayer": "https://github.com/Vimlesh-Kumar/Monster-Slayer-Game",
            "bike-repair": "https://github.com/Vimlesh-Kumar/bike-repair-website",
            "restaurant": "https://github.com/Vimlesh-Kumar/restaurant-website"
          };
          if (urls[proj]) {
            pushOutput(`Opening GitHub Repository for ${proj}...`, "var(--accent-emerald)");
            window.open(urls[proj], "_blank");
          } else {
            pushOutput(`open: project repo '${proj}' not found.`, "var(--terminal-dot-red)");
          }
        } else {
          pushOutput(`open: unknown target '${target}'.`, "var(--terminal-dot-red)");
        }
        break;
      }
      case "curl": {
        const url = args[1] ? args[1].trim() : "";
        if (!url) {
          pushOutput("curl: missing URL. Try: curl vimlesh.dev");
          break;
        }

        if (url.includes("vimlesh.dev") || url.includes("localhost")) {
          pushOutput(
            "__      ___           _           _       _            \n" +
            "\\ \\    / (_)_ __ ___ | | ___  ___| |__   | | __ _   _  \n" +
            " \\ \\  / /| | '_ ` _ \\| |/ _ \\/ __| '_ \\  | |/ /| | | | \n" +
            "  \\ \\/ / | | | | | | | |  __/\\__ \\ | | | |   < | |_| | \n" +
            "   \\__/  |_|_| |_| |_|_|\\___||___/_| |_| |_|\\_\\ \\__,_| \n" +
            "                                                       \n" +
            "Expert Vue 3 & Node Microservices Developer.\n" +
            "Find me online at https://linkedin.com/in/vimlesh11",
            "var(--accent-primary)"
          );
        } else {
          pushOutput(`curl: fetching external URL '${url}' is blocked due to CORS simulation. Try 'curl vimlesh.dev' or 'github repos'.`);
        }
        break;
      }
      case "github": {
        const action = args[1] ? args[1].trim() : "";
        if (!action || action === "help") {
          pushOutput(
            "GitHub CLI Simulator:\n" +
            "  github repos      - Fetch and list top GitHub repositories\n" +
            "  github profile    - Fetch active GitHub profile stats"
          );
          break;
        }

        if (action === "repos") {
          pushOutput("Connecting to api.github.com...", "var(--terminal-comment)");
          pushOutput("Fetching repositories for Vimlesh-Kumar...", "var(--terminal-comment)");
          
          try {
            const response = await fetch("https://api.github.com/users/Vimlesh-Kumar/repos?sort=updated&per_page=5");
            if (!response.ok) throw new Error();
            const repos = await response.json();
            
            let output = "\n=== ACTIVE GITHUB REPOSITORIES ===\n\n";
            repos.forEach((repo) => {
              output += `★ ${repo.name.padEnd(25)} [${repo.language || "Misc"}] - ${repo.stargazers_count} stars\n`;
              output += `  Description: ${repo.description || "No description provided."}\n`;
              output += `  Repo URL:    ${repo.html_url}\n\n`;
            });
            pushOutput(output, "var(--accent-emerald)");
          } catch (e) {
            pushOutput(
              "\n=== ACTIVE GITHUB REPOSITORIES (FALLBACK) ===\n\n" +
              "★ squel                     [JavaScript]  - 12 stars\n" +
              "  Description: Active maintainer of the squel query builder library\n" +
              "  Repo URL:    https://github.com/hiddentao/squel\n\n" +
              "★ online-pathshala          [Vue 3]       - 8 stars\n" +
              "  Description: A full-stack online learning platform\n" +
              "  Repo URL:    https://github.com/Vimlesh-Kumar/online-pathshala\n\n" +
              "★ vimpgp                    [Vue 3]       - 5 stars\n" +
              "  Description: PGP/GPG key manager in the browser\n" +
              "  Repo URL:    https://github.com/Vimlesh-Kumar/vimpgp\n",
              "var(--accent-emerald)"
            );
          }
        } else if (action === "profile") {
          pushOutput("Connecting to api.github.com...", "var(--terminal-comment)");
          try {
            const response = await fetch("https://api.github.com/users/Vimlesh-Kumar");
            if (!response.ok) throw new Error();
            const profile = await response.json();
            
            pushOutput(
              `\nGitHub Username:  ${profile.login}\n` +
              `Name:             ${profile.name || "Vimlesh Kumar"}\n` +
              `Bio:              ${profile.bio || "Full-Stack Engineer specialized in Vue 3 & Node"}\n` +
              `Public Repos:     ${profile.public_repos}\n` +
              `Followers:        ${profile.followers}\n` +
              `Following:        ${profile.following}\n` +
              `Profile Link:     ${profile.html_url}\n`,
              "var(--accent-emerald)"
            );
          } catch (e) {
            pushOutput(
              "\nGitHub Profile (Fallback):\n" +
              "Username:     Vimlesh-Kumar\n" +
              "Name:         Vimlesh Kumar\n" +
              "Bio:          Vue 3, Node.js Express, and Microservices Expert\n" +
              "Public Repos: 27\n" +
              "Followers:    5+\n" +
              "Profile URL:  https://github.com/Vimlesh-Kumar\n",
              "var(--accent-emerald)"
            );
          }
        } else {
          pushOutput(`github: unknown option '${action}'. Try 'github repos' or 'github profile'.`, "var(--terminal-dot-red)");
        }
        break;
      }
      case "sudo":
        pushOutput("vrooom... nice try, but you don't have root privileges here.");
        break;
      default:
        pushOutput(`zsh: command not found: ${baseCmd}`, "var(--terminal-dot-red)");
        break;
    }
  };

  const handleCommand = async (e) => {
    if (e.key === "Enter") {
      const cmd = input.trim();
      setInput("");

      if (!cmd) {
        setHistory((prev) => [...prev, { type: "input", text: "", dir: currentDir }]);
        return;
      }

      // Record input to history with dir
      setHistory((prev) => [...prev, { type: "input", text: cmd, dir: currentDir }]);

      const args = cmd.split(" ");
      const baseCmd = args[0].toLowerCase();

      if (baseCmd === "clear") {
        setHistory([]);
        return;
      }

      if (baseCmd === "echo") {
        pushOutput(args.slice(1).join(" "));
        return;
      }

      await processCommand(cmd, baseCmd, args);
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
                <span className="terminal-prompt font-bold">vimlesh@dev</span> <span style={{ opacity: 0.6 }}>{line.dir || "~"}</span>
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
            <span className="terminal-prompt font-bold">vimlesh@dev</span> <span style={{ opacity: 0.6 }}>{currentDir}</span>
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
