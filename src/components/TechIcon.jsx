import React from "react";

// Dictionary of brand-colored technology SVG icons
const icons = {
  vue: (size) => (
    <svg width={size} height={size} viewBox="0 0 256 221" className="inline-block shrink-0">
      <path fill="#41B883" d="M204.8 0H256L128 220.8L0 0h51.2L128 132.4L204.8 0z"/>
      <path fill="#35495E" d="M204.8 0h-49.6L128 47.6L100.8 0H51.2L128 132.4L204.8 0z"/>
    </svg>
  ),
  "vue 3": (size) => (
    <svg width={size} height={size} viewBox="0 0 256 221" className="inline-block shrink-0">
      <path fill="#41B883" d="M204.8 0H256L128 220.8L0 0h51.2L128 132.4L204.8 0z"/>
      <path fill="#35495E" d="M204.8 0h-49.6L128 47.6L100.8 0H51.2L128 132.4L204.8 0z"/>
    </svg>
  ),
  "vue.js": (size) => (
    <svg width={size} height={size} viewBox="0 0 256 221" className="inline-block shrink-0">
      <path fill="#41B883" d="M204.8 0H256L128 220.8L0 0h51.2L128 132.4L204.8 0z"/>
      <path fill="#35495E" d="M204.8 0h-49.6L128 47.6L100.8 0H51.2L128 132.4L204.8 0z"/>
    </svg>
  ),
  nuxt: (size) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className="inline-block shrink-0">
      <path fill="#00C58E" d="M21.9 19L14.7 6.5C14.3 5.8 13.3 5.8 12.9 6.5L11.5 8.9L9.6 5.6C9.2 4.9 8.2 4.9 7.8 5.6L1.1 17.3C0.7 18 1.2 19 2 19H10.1H12.9H21C21.8 19 22.3 18 21.9 19ZM8.7 17H4.4L8.7 9.5L13 17H8.7ZM17.4 17H14.8L12.9 13.7L14.8 10.4L18.7 17H17.4Z"/>
    </svg>
  ),
  "nuxt.js": (size) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className="inline-block shrink-0">
      <path fill="#00C58E" d="M21.9 19L14.7 6.5C14.3 5.8 13.3 5.8 12.9 6.5L11.5 8.9L9.6 5.6C9.2 4.9 8.2 4.9 7.8 5.6L1.1 17.3C0.7 18 1.2 19 2 19H10.1H12.9H21C21.8 19 22.3 18 21.9 19ZM8.7 17H4.4L8.7 9.5L13 17H8.7ZM17.4 17H14.8L12.9 13.7L14.8 10.4L18.7 17H17.4Z"/>
    </svg>
  ),
  react: (size) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className="inline-block shrink-0">
      <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
      <path stroke="#61DAFB" strokeWidth="1.2" fill="none" d="M12 12c-4.2-1.5-7.6-1.5-9.2 0-2.1 2.1-.8 6.5 2.8 9.2 3.6 2.7 8 3.5 10.1 1.4 1.6-1.6 1.6-5 0-9.2zm0 0c4.2 1.5 7.6 1.5 9.2 0 2.1-2.1.8-6.5-2.8-9.2-3.6-2.7-8-3.5-10.1-1.4-1.6 1.6-1.6 5 0 9.2zm0 0c1.5-4.2 1.5-7.6 0-9.2-2.1-2.1-6.5-.8-9.2 2.8-2.7 3.6-3.5 8-1.4 10.1 1.6 1.6 5 1.6 9.2 0z"/>
    </svg>
  ),
  tailwind: (size) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className="inline-block shrink-0">
      <path fill="#38BDF8" d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
    </svg>
  ),
  "tailwind css": (size) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className="inline-block shrink-0">
      <path fill="#38BDF8" d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
    </svg>
  ),
  typescript: (size) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className="inline-block shrink-0">
      <rect width="24" height="24" fill="#3178C6" rx="4"/>
      <text x="13" y="19" fill="#FFF" fontFamily="sans-serif" fontWeight="bold" fontSize="10">TS</text>
    </svg>
  ),
  javascript: (size) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className="inline-block shrink-0">
      <rect width="24" height="24" fill="#F7DF1E" rx="4"/>
      <text x="13" y="19" fill="#000" fontFamily="sans-serif" fontWeight="bold" fontSize="10">JS</text>
    </svg>
  ),
  "vanilla js": (size) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className="inline-block shrink-0">
      <rect width="24" height="24" fill="#F7DF1E" rx="4"/>
      <text x="13" y="19" fill="#000" fontFamily="sans-serif" fontWeight="bold" fontSize="10">JS</text>
    </svg>
  ),
  framer: (size) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className="inline-block shrink-0">
      <path fill="#F43F5E" d="M12 0L24 12H12L0 24V12H12L24 0z"/>
    </svg>
  ),
  "framer motion": (size) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className="inline-block shrink-0">
      <path fill="#F43F5E" d="M12 0L24 12H12L0 24V12H12L24 0z"/>
    </svg>
  ),
  node: (size) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className="inline-block shrink-0">
      <path fill="#339933" d="M9.13 1.95a2 2 0 00-1.07.28L2.55 5.51a2 2 0 00-1 1.73v9.52a2 2 0 001 1.73l5.51 3.28a2 2 0 002.08 0l5.51-3.28a2 2 0 001-1.73V7.24a2 2 0 00-1-1.73L10.2 2.23a2 2 0 00-1.07-.28zM12 4.14l4.5 2.68v5.36L12 14.86 7.5 12.18V6.82L12 4.14zM12 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"/>
    </svg>
  ),
  "node.js": (size) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className="inline-block shrink-0">
      <path fill="#339933" d="M9.13 1.95a2 2 0 00-1.07.28L2.55 5.51a2 2 0 00-1 1.73v9.52a2 2 0 001 1.73l5.51 3.28a2 2 0 002.08 0l5.51-3.28a2 2 0 001-1.73V7.24a2 2 0 00-1-1.73L10.2 2.23a2 2 0 00-1.07-.28zM12 4.14l4.5 2.68v5.36L12 14.86 7.5 12.18V6.82L12 4.14zM12 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"/>
    </svg>
  ),
  express: (size) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className="inline-block shrink-0">
      <rect width="24" height="24" fill="#000" rx="4"/>
      <text x="12" y="17" fill="#FFF" fontFamily="sans-serif" fontWeight="bold" fontSize="11" textAnchor="middle">ex</text>
    </svg>
  ),
  ".net": (size) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className="inline-block shrink-0">
      <circle cx="12" cy="12" r="11" fill="#512BD4"/>
      <text x="12" y="16" fill="#FFF" fontFamily="sans-serif" fontWeight="bold" fontSize="10" textAnchor="middle">.NET</text>
    </svg>
  ),
  postgresql: (size) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className="inline-block shrink-0">
      <path fill="#336791" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2zm1 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm4.5 9c-.3.6-.8 1.1-1.5 1.4-.7.3-1.4.4-2.1.4-.9 0-1.8-.2-2.6-.6l-.7 1.4c1 .6 2.2.9 3.4.9 1 0 2-.2 2.9-.6.9-.4 1.6-1.1 2-1.9L17.5 14.5z"/>
    </svg>
  ),
  mongodb: (size) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className="inline-block shrink-0">
      <path fill="#47A248" d="M12 1.5c-.3 0-.6.1-.9.4L6.9 7.7c-2.3 3.8-2 8.7.9 12.1.8 1 2 1.8 3.2 2.2.6.2 1 .5 1 .5s.4-.3 1-.5c1.2-.4 2.4-1.2 3.2-2.2 2.9-3.4 3.2-8.3.9-12.1l-4.2-5.8c-.3-.3-.6-.4-.9-.4zm0 2.2l3.4 4.7c1.7 2.9 1.4 6.7-.8 9.3-.6.7-1.4 1.3-2.3 1.6V3.7z"/>
    </svg>
  ),
  prisma: (size) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className="inline-block shrink-0">
      <path fill="#2D3748" d="M12 1.5l10.5 18H1.5L12 1.5zm0 4L4.8 16.5h14.4L12 5.5z"/>
    </svg>
  ),
  azure: (size) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className="inline-block shrink-0">
      <path fill="#0089D6" d="M12 3L2 19.5h7.5L12 14l3.5 5.5H22L12 3zm0 4.5l5.5 9h-3L12 12.5l-2.5 4h-3l5.5-9z"/>
    </svg>
  ),
  microservices: (size) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block shrink-0">
      <circle cx="12" cy="5" r="3"/>
      <circle cx="5" cy="19" r="3"/>
      <circle cx="19" cy="19" r="3"/>
      <path d="M5 16l5-8M19 16l-5-8M9 19h6"/>
    </svg>
  ),
  "rest api": (size) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block shrink-0">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
      <line x1="9" y1="9" x2="15" y2="9"/>
      <line x1="9" y1="13" x2="15" y2="13"/>
      <line x1="9" y1="17" x2="13" y2="17"/>
    </svg>
  ),
  "rest apis": (size) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block shrink-0">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
      <line x1="9" y1="9" x2="15" y2="9"/>
      <line x1="9" y1="13" x2="15" y2="13"/>
      <line x1="9" y1="17" x2="13" y2="17"/>
    </svg>
  ),
  websockets: (size) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#FB7185" strokeWidth="2" className="inline-block shrink-0">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
    </svg>
  ),
  git: (size) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className="inline-block shrink-0">
      <path fill="#F05032" d="M22.6 11.3L12.7 1.4c-.4-.4-1-.4-1.3 0L9 3.5l3.2 3.2c.4-.1.8 0 1.1.3.4.4.4 1 0 1.3-.3.3-.9.4-1.3.1l-3-3V12c.1.4 0 .8-.3 1.1-.4.4-1 .4-1.3 0-.4-.4-.4-1 0-1.3.3-.3.9-.4 1.3-.1V7.2L6.1 9.8c-.4.4-.4 1 0 1.3l9.9 9.9c.4.4 1 .4 1.3 0l5.3-5.3c.4-.4.4-1 0-1.3z"/>
    </svg>
  ),
  github: (size) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="inline-block shrink-0">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  ),
  vuetify: (size) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className="inline-block shrink-0">
      <path fill="#1867C0" d="M12 2L1 21h22L12 2zm0 5l7.5 12.5H4.5L12 7z"/>
      <path fill="#AEDDFF" d="M12 7l4.5 7.5H7.5L12 7z"/>
    </svg>
  ),
  sql: (size) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2" className="inline-block shrink-0">
      <ellipse cx="12" cy="5" rx="9" ry="3"/>
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/>
    </svg>
  ),
  "sql server": (size) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2" className="inline-block shrink-0">
      <ellipse cx="12" cy="5" rx="9" ry="3"/>
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/>
    </svg>
  ),
  mysql: (size) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#00758F" strokeWidth="2" className="inline-block shrink-0">
      <ellipse cx="12" cy="5" rx="9" ry="3"/>
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/>
    </svg>
  ),
  cryptography: (size) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" className="inline-block shrink-0">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>
  ),
  "pgp/gpg": (size) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" className="inline-block shrink-0">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>
  ),
  "open source": (size) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" className="inline-block shrink-0">
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      <path d="M2 12h20"/>
    </svg>
  ),
  "npm library": (size) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className="inline-block shrink-0">
      <rect width="24" height="24" fill="#CB3837" rx="4"/>
      <text x="12" y="17" fill="#FFF" fontFamily="sans-serif" fontWeight="bold" fontSize="12" textAnchor="middle">npm</text>
    </svg>
  ),
  html5: (size) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className="inline-block shrink-0">
      <path fill="#E34F26" d="M1.5 20.25L3.375 3.75H20.625L22.5 20.25L12 24L1.5 20.25Z"/>
      <path fill="#F06529" d="M12 22.125V5.25H18.75L17.25 18.75L12 22.125Z"/>
      <path fill="#EBEBEB" d="M12 11.25H7.875L8.25 15H12V17.625L8.625 16.5L8.4375 14.25H5.8125L6.1875 19.125L12 20.625V11.25ZM12 6.75H7.5L7.125 10.125H12V6.75Z"/>
      <path fill="#FFF" d="M12 11.25V13.875H16.125L15.75 17.625L12 18.75V20.625L17.8125 19.125L18.75 8.25H12V11.25ZM12 6.75V10.125H16.5L16.875 6.75H12Z"/>
    </svg>
  ),
  css3: (size) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className="inline-block shrink-0">
      <path fill="#1572B6" d="M1.5 20.25L3.375 3.75H20.625L22.5 20.25L12 24L1.5 20.25Z"/>
      <path fill="#33A9DC" d="M12 22.125V5.25H18.75L17.25 18.75L12 22.125Z"/>
      <path fill="#EBEBEB" d="M12 11.25H6.75L7.125 15H12V17.625L8.625 16.5L8.4375 14.25H5.8125L6.1875 19.125L12 20.625V11.25ZM12 6.75H7.5L7.125 10.125H12V6.75Z"/>
      <path fill="#FFF" d="M12 11.25V13.875H16.125L15.75 17.625L12 18.75V20.625L17.8125 19.125L18.75 8.25H12V11.25ZM12 6.75V10.125H16.5L16.875 6.75H12Z"/>
    </svg>
  ),
  logic: (size) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="2" className="inline-block shrink-0">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1 0-3.12 3 3 0 0 1 0-3.88 2.5 2.5 0 0 1 0-3.12A2.5 2.5 0 0 1 9.5 2Z"/>
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 0-3.12 3 3 0 0 0 0-3.88 2.5 2.5 0 0 0 0-3.12A2.5 2.5 0 0 0 14.5 2Z"/>
    </svg>
  ),
  parsing: (size) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#F43F5E" strokeWidth="2" className="inline-block shrink-0">
      <polyline points="16 18 22 12 16 6"/>
      <polyline points="8 6 2 12 8 18"/>
      <line x1="14" y1="4" x2="10" y2="20"/>
    </svg>
  ),
  "ci/cd": (size) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" className="inline-block shrink-0">
      <circle cx="18" cy="18" r="3"/>
      <circle cx="6" cy="6" r="3"/>
      <path d="M13 6h3a2 2 0 0 1 2 2v7"/>
      <line x1="6" y1="9" x2="6" y2="21"/>
    </svg>
  ),
  deployments: (size) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" className="inline-block shrink-0">
      <path d="M4.5 16.5c-1.5 1.25-2.5 3.5-2.5 3.5s2.25-1 3.5-2.5M15 9l-9 9M9 15l-3 3M15 9l6-6M15 9l-3-3M21 3l-6 6v3l3-3M21 3h-3l3 3"/>
    </svg>
  ),
  "scalable services": (size) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#06B6D4" strokeWidth="2" className="inline-block shrink-0">
      <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v1"/>
      <rect x="18" y="8" width="5" height="8" rx="1"/>
    </svg>
  ),
  vite: (size) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className="inline-block shrink-0">
      <path fill="#BD34FE" d="M19.5 2.5L12 17l-3-6-4.5 2.5 7.5 8 7.5-19z"/>
      <path fill="#FFD600" d="M13.5 2.5h-3l-4 7.5 4.5-.5-1.5 5 7.5-8.5-4.5.5 1-4z"/>
    </svg>
  ),
  "regex apis": (size) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="2" className="inline-block shrink-0">
      <circle cx="12" cy="12" r="10"/>
      <line x1="8" y1="12" x2="16" y2="12"/>
      <line x1="12" y1="8" x2="12" y2="16"/>
    </svg>
  )
};

// Colors associated with each brand (used for custom glow effects)
const brandColors = {
  vue: "#41B883",
  "vue 3": "#41B883",
  "vue.js": "#41B883",
  nuxt: "#00C58E",
  "nuxt.js": "#00C58E",
  react: "#61DAFB",
  tailwind: "#38BDF8",
  "tailwind css": "#38BDF8",
  typescript: "#3178C6",
  javascript: "#F7DF1E",
  "vanilla js": "#F7DF1E",
  framer: "#F43F5E",
  "framer motion": "#F43F5E",
  node: "#339933",
  "node.js": "#339933",
  express: "#A3A3A3",
  ".net": "#512BD4",
  postgresql: "#336791",
  mongodb: "#47A248",
  prisma: "#5A67D8",
  azure: "#0089D6",
  microservices: "#A78BFA",
  "rest api": "#34D399",
  "rest apis": "#34D399",
  websockets: "#FB7185",
  git: "#F05032",
  github: "#E2E8F0",
  vuetify: "#1867C0",
  sql: "#38BDF8",
  "sql server": "#38BDF8",
  mysql: "#00758F",
  cryptography: "#F59E0B",
  "pgp/gpg": "#F59E0B",
  "open source": "#10B981",
  "npm library": "#CB3837",
  html5: "#E34F26",
  css3: "#1572B6",
  logic: "#EC4899",
  parsing: "#F43F5E",
  "ci/cd": "#10B981",
  deployments: "#F59E0B",
  "scalable services": "#06B6D4",
  vite: "#FFD600",
  "regex apis": "#EC4899"
};

const TechIcon = ({ name, size = 16, className = "" }) => {
  const normalizedKey = name ? name.toLowerCase().trim() : "";
  const iconFn = icons[normalizedKey];

  if (!iconFn) {
    // Fallback: simple colored square dot if icon isn't found
    return (
      <span 
        className={`inline-block h-3.5 w-3.5 rounded-sm bg-cyan-400 ${className}`} 
        style={{ verticalAlign: "middle" }}
        title={name}
      />
    );
  }

  return (
    <span 
      className={`inline-flex items-center justify-center ${className}`}
      style={{ 
        verticalAlign: "middle", 
        color: brandColors[normalizedKey] || "inherit"
      }}
    >
      {iconFn(size)}
    </span>
  );
};

export const getBrandColor = (name) => {
  if (!name) return "rgba(34, 211, 238, 0.4)"; // default cyan
  const normalizedKey = name.toLowerCase().trim();
  return brandColors[normalizedKey] || "#22d3ee";
};

export default TechIcon;
