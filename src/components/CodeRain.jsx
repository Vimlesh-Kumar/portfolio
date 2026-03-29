import React, { useMemo } from "react";

const codeSnippets = [
  "const app = express()",
  "import React from 'react'",
  "npm run build",
  "git push origin main",
  "docker compose up",
  "export default App",
  "useState(false)",
  "async/await",
  "res.json(data)",
  "useEffect(() => {})",
  "router.get('/')",
  "prisma.user.findMany",
  "Vue.createApp({})",
  "<template>",
  "npm install",
  "SELECT * FROM",
  "mkdir src",
  "ref(null)",
  "computed(()=>{})",
  "onMounted(()=>{})",
];

const CodeRain = () => {
  const columns = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: `${(i / 12) * 100 + Math.random() * 4}%`,
      delay: `${Math.random() * 20}s`,
      duration: `${18 + Math.random() * 15}s`,
      text: codeSnippets[i % codeSnippets.length],
      opacity: 0.03 + Math.random() * 0.06,
    }));
  }, []);

  return (
    <div className="code-rain" aria-hidden="true">
      {columns.map((col) => (
        <span
          key={col.id}
          className="code-rain-column"
          style={{
            left: col.left,
            animationDelay: col.delay,
            animationDuration: col.duration,
            opacity: col.opacity,
            fontSize: `${11 + Math.random() * 3}px`,
          }}
        >
          {col.text}
        </span>
      ))}
    </div>
  );
};

export default CodeRain;
