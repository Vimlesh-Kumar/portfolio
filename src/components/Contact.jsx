import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send,
  Rocket,
  CheckCircle,
  AlertCircle,
  Loader2,
  MessageSquare,
  User,
  AtSign,
  Sparkles,
} from "lucide-react";

const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY_HERE"; // Replace with your Web3Forms key

const channels = [
  {
    label: "Email",
    value: "vimlesh11072000@gmail.com",
    href: "mailto:vimlesh11072000@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/Vimlesh-Kumar",
    href: "https://github.com/Vimlesh-Kumar",   
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/vimlesh11",
    href: "https://linkedin.com/in/vimlesh11",
    icon: Linkedin,
  },
];

const MAX_MESSAGE_LENGTH = 500;

/* ── Floating Label Input ─────────────────────────────────── */
const FloatingInput = ({ id, label, icon: Icon, type = "text", value, onChange, required = true }) => {
  const [focused, setFocused] = useState(false);
  const isActive = focused || value.length > 0;

  return (
    <div className="floating-input-group" style={{ position: "relative" }}>
      <div
        className="floating-input-icon"
        style={{
          position: "absolute",
          left: "16px",
          top: "50%",
          transform: "translateY(-50%)",
          color: focused ? "var(--accent-primary)" : "var(--text-dim)",
          transition: "color 0.3s ease",
          zIndex: 2,
        }}
      >
        <Icon className="h-4 w-4" />
      </div>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        autoComplete={type === "email" ? "email" : "name"}
        style={{
          width: "100%",
          padding: "20px 16px 8px 44px",
          borderRadius: "16px",
          border: `1px solid ${focused ? "var(--border-hover)" : "var(--border-subtle)"}`,
          background: focused ? "var(--surface-hover)" : "var(--surface-subtle)",
          color: "var(--text-primary)",
          fontSize: "15px",
          fontFamily: "var(--font-sans)",
          outline: "none",
          transition: "all 0.3s ease",
          boxShadow: focused ? "0 0 0 3px var(--accent-primary-faded)" : "none",
        }}
      />
      <label
        htmlFor={id}
        style={{
          position: "absolute",
          left: "44px",
          top: isActive ? "8px" : "50%",
          transform: isActive ? "translateY(0)" : "translateY(-50%)",
          fontSize: isActive ? "11px" : "14px",
          color: focused ? "var(--accent-primary)" : "var(--text-dim)",
          fontWeight: isActive ? "600" : "400",
          letterSpacing: isActive ? "0.08em" : "0",
          textTransform: isActive ? "uppercase" : "none",
          transition: "all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          pointerEvents: "none",
          zIndex: 2,
        }}
      >
        {label}
      </label>
    </div>
  );
};

/* ── Floating Label Textarea ──────────────────────────────── */
const FloatingTextarea = ({ id, label, icon: Icon, value, onChange, maxLength }) => {
  const [focused, setFocused] = useState(false);
  const isActive = focused || value.length > 0;
  const charCount = value.length;
  const charPercent = (charCount / maxLength) * 100;

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          left: "16px",
          top: "20px",
          color: focused ? "var(--accent-primary)" : "var(--text-dim)",
          transition: "color 0.3s ease",
          zIndex: 2,
        }}
      >
        <Icon className="h-4 w-4" />
      </div>
      <textarea
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        required
        maxLength={maxLength}
        rows={5}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: "100%",
          padding: "26px 16px 12px 44px",
          borderRadius: "16px",
          border: `1px solid ${focused ? "var(--border-hover)" : "var(--border-subtle)"}`,
          background: focused ? "var(--surface-hover)" : "var(--surface-subtle)",
          color: "var(--text-primary)",
          fontSize: "15px",
          fontFamily: "var(--font-sans)",
          outline: "none",
          resize: "vertical",
          minHeight: "140px",
          transition: "all 0.3s ease",
          boxShadow: focused ? "0 0 0 3px var(--accent-primary-faded)" : "none",
          lineHeight: "1.6",
        }}
      />
      <label
        htmlFor={id}
        style={{
          position: "absolute",
          left: "44px",
          top: isActive ? "8px" : "20px",
          fontSize: isActive ? "11px" : "14px",
          color: focused ? "var(--accent-primary)" : "var(--text-dim)",
          fontWeight: isActive ? "600" : "400",
          letterSpacing: isActive ? "0.08em" : "0",
          textTransform: isActive ? "uppercase" : "none",
          transition: "all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          pointerEvents: "none",
          zIndex: 2,
        }}
      >
        {label}
      </label>

      {/* Character counter */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "8px",
          padding: "0 4px",
        }}
      >
        <div
          style={{
            flex: 1,
            height: "3px",
            borderRadius: "3px",
            background: "var(--border-subtle)",
            overflow: "hidden",
            marginRight: "12px",
          }}
        >
          <motion.div
            style={{
              height: "100%",
              borderRadius: "3px",
              background:
                charPercent > 90
                  ? "#ef4444"
                  : charPercent > 70
                    ? "#f59e0b"
                    : "var(--accent-primary)",
            }}
            animate={{ width: `${charPercent}%` }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </div>
        <span
          style={{
            fontSize: "12px",
            fontFamily: "var(--font-mono)",
            color:
              charPercent > 90
                ? "#ef4444"
                : charPercent > 70
                  ? "#f59e0b"
                  : "var(--text-dim)",
            fontWeight: charPercent > 90 ? "600" : "400",
            minWidth: "60px",
            textAlign: "right",
          }}
        >
          {charCount}/{maxLength}
        </span>
      </div>
    </div>
  );
};

/**
 * Contact
 * -------
 * Contact section pairing quick-contact cards with a validated message form.
 * The form submits to Web3Forms and reflects `idle → sending → success | error`
 * states inline.
 *
 * @returns {JSX.Element}
 */
const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "message" && value.length > MAX_MESSAGE_LENGTH) return;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          from_name: "Portfolio Contact Form",
          subject: `💬 New message from ${formData.name}`,
          // Bot protection
          botcheck: "",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        // Reset after 5 seconds
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMsg(result.message || "Something went wrong. Please try again.");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Check your connection and try again.");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const isFormValid =
    formData.name.trim().length >= 2 &&
    formData.email.trim().length >= 5 &&
    formData.message.trim().length >= 10;

  return (
    <section id="contact" className="scroll-mt-28 pb-8">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="glass-panel overflow-hidden rounded-[2rem] p-8 md:p-10"
      >
        {/* ── Section Header ──────────────────────────── */}
        <div className="mb-8 space-y-4">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] hover-glow"
            style={{
              border: "1px solid var(--border-subtle)",
              background: "var(--surface-subtle)",
              color: "var(--accent-primary-text)",
            }}
          >
            <Send className="h-3.5 w-3.5" />
            Get In Touch
          </div>

          <h2
            className="max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl"
            style={{ color: "var(--text-primary)" }}
          >
            Have an idea? Let&apos;s make it{" "}
            <span className="shimmer-text">happen.</span>
          </h2>
          <p
            className="max-w-2xl text-base leading-7 md:text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            Drop me a quick message and I&apos;ll get back to you within 24
            hours. Whether it&apos;s a project inquiry, collaboration, or just
            a friendly hello — I&apos;d love to hear from you.
          </p>
        </div>

        {/* ── Two-column Grid ─────────────────────────── */}
        <div className="grid gap-8 md:grid-cols-[1fr_1.2fr]">
          {/* ── Left: Contact Channels + Status ─────── */}
          <div className="flex flex-col gap-4">
            {/* Availability badge */}
            <div className="flex flex-wrap gap-3 text-sm mb-2">
              <div
                className="inline-flex items-center gap-2 rounded-full px-4 py-2"
                style={{
                  border: "1px solid var(--border-subtle)",
                  background: "var(--surface-subtle)",
                  color: "var(--text-muted)",
                }}
              >
                <MapPin className="h-4 w-4" style={{ color: "var(--accent-primary)" }} />
                Gandhinagar, India
              </div>
            </div>

            {/* Contact channel cards */}
            {channels.map((channel, index) => {
              const Icon = channel.icon;
              return (
                <motion.a
                  key={channel.label}
                  href={channel.href}
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                  rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="contact-card group rounded-[1.25rem] p-4 block w-full"
                  style={{
                    border: "1px solid var(--border-subtle)",
                    background: "var(--surface-subtle)",
                  }}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="flex h-11 w-11 items-center justify-center rounded-xl"
                        style={{
                          border: "1px solid var(--border-subtle)",
                          background: "var(--icon-bg)",
                          color: "var(--accent-primary)",
                        }}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p
                          className="text-xs uppercase tracking-[0.2em]"
                          style={{ color: "var(--text-dim)" }}
                        >
                          {channel.label}
                        </p>
                        <p
                          className="text-sm font-medium"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {channel.value}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight
                      className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      style={{ color: "var(--text-dim)" }}
                    />
                  </div>
                </motion.a>
              );
            })}

            {/* Response time note */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-auto rounded-xl p-4"
              style={{
                border: "1px solid var(--cyan-card-border)",
                background: "var(--cyan-card-bg)",
              }}
            >
              <div className="flex items-start gap-3">
                <Sparkles
                  className="h-5 w-5 mt-0.5 shrink-0"
                  style={{ color: "var(--accent-primary)" }}
                />
                <div>
                  <p
                    className="text-sm font-semibold mb-1"
                    style={{ color: "var(--cyan-card-text)" }}
                  >
                    Quick Response
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    I typically respond within 12-24 hours. For urgent inquiries, connect via
                    LinkedIn for a faster reply.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── Right: Message Form ────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative rounded-[1.5rem] p-6 md:p-8"
            style={{
              border: "1px solid var(--border-subtle)",
              background: "var(--surface-subtle)",
            }}
          >
            {/* Form header */}
            <div className="mb-6 flex items-center gap-3">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl"
                style={{
                  background: "var(--accent-primary-faded)",
                  border: "1px solid var(--border-hover)",
                }}
              >
                <MessageSquare className="h-5 w-5" style={{ color: "var(--accent-primary)" }} />
              </div>
              <div>
                <h3
                  className="text-base font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  Send a Message
                </h3>
                <p className="text-xs" style={{ color: "var(--text-dim)" }}>
                  All fields are required
                </p>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {status === "success" ? (
                /* ── Success Feedback ──────────────── */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                      delay: 0.15,
                    }}
                    className="mb-4 flex h-16 w-16 items-center justify-center rounded-full"
                    style={{
                      background: "rgba(52, 211, 153, 0.15)",
                      border: "2px solid rgba(52, 211, 153, 0.40)",
                    }}
                  >
                    <CheckCircle className="h-8 w-8" style={{ color: "var(--accent-emerald)" }} />
                  </motion.div>
                  <h4
                    className="text-xl font-semibold mb-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Message Sent! 🎉
                  </h4>
                  <p className="text-sm max-w-xs" style={{ color: "var(--text-muted)" }}>
                    Thanks for reaching out! I&apos;ll review your message and get back to you
                    shortly.
                  </p>
                </motion.div>
              ) : status === "error" ? (
                /* ── Error Feedback ────────────────── */
                <motion.div
                  key="error"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.15 }}
                    className="mb-4 flex h-16 w-16 items-center justify-center rounded-full"
                    style={{
                      background: "rgba(239, 68, 68, 0.15)",
                      border: "2px solid rgba(239, 68, 68, 0.40)",
                    }}
                  >
                    <AlertCircle className="h-8 w-8" style={{ color: "#ef4444" }} />
                  </motion.div>
                  <h4
                    className="text-xl font-semibold mb-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Oops, something went wrong
                  </h4>
                  <p className="text-sm max-w-xs" style={{ color: "var(--text-muted)" }}>
                    {errorMsg}
                  </p>
                </motion.div>
              ) : (
                /* ── Form ──────────────────────────── */
                <motion.form
                  key="form"
                  ref={formRef}
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-5"
                >
                  {/* Bot honeypot */}
                  <input
                    type="hidden"
                    name="botcheck"
                    style={{ display: "none" }}
                  />

                  <FloatingInput
                    id="name"
                    label="Your Name"
                    icon={User}
                    value={formData.name}
                    onChange={handleChange}
                  />

                  <FloatingInput
                    id="email"
                    label="Email Address"
                    icon={AtSign}
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />

                  <FloatingTextarea
                    id="message"
                    label="Your Message"
                    icon={MessageSquare}
                    value={formData.message}
                    onChange={handleChange}
                    maxLength={MAX_MESSAGE_LENGTH}
                  />

                  {/* Submit button */}
                  <motion.button
                    type="submit"
                    disabled={!isFormValid || status === "sending"}
                    whileHover={isFormValid ? { scale: 1.02, y: -2 } : {}}
                    whileTap={isFormValid ? { scale: 0.98 } : {}}
                    className="relative mt-1 flex items-center justify-center gap-2.5 rounded-2xl px-6 py-4 text-sm font-semibold transition-all duration-300"
                    style={{
                      background:
                        isFormValid && status !== "sending"
                          ? "linear-gradient(135deg, var(--accent-primary), var(--accent-emerald))"
                          : "var(--surface-hover)",
                      color:
                        isFormValid && status !== "sending"
                          ? "var(--cta-text)"
                          : "var(--text-dim)",
                      border: "none",
                      cursor:
                        isFormValid && status !== "sending" ? "pointer" : "not-allowed",
                      boxShadow:
                        isFormValid && status !== "sending"
                          ? "0 8px 32px rgba(34, 211, 238, 0.25), 0 2px 8px rgba(52, 211, 153, 0.15)"
                          : "none",
                      opacity: isFormValid ? 1 : 0.5,
                    }}
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2
                          className="h-4 w-4 animate-spin"
                          style={{ color: "var(--accent-primary)" }}
                        />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Send Message</span>
                        <Rocket className="h-4 w-4" />
                      </>
                    )}
                  </motion.button>

                  {/* Privacy note */}
                  <p
                    className="text-center text-[11px] leading-relaxed"
                    style={{ color: "var(--text-dim)" }}
                  >
                    Your message goes directly to my inbox. No spam, no data sharing — ever.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
