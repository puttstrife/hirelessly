"use client";

import { useState, useEffect } from "react";

type Message = {
  role: "user" | "ai";
  text: string;
};

const CONVERSATIONS: Message[][] = [
  [
    { role: "user", text: "Any important emails today?" },
    { role: "ai", text: "3 unread from clients. Sarah replied to your proposal. Want me to draft a response?" },
    { role: "user", text: "Yes, draft a follow-up." },
    { role: "ai", text: "Done. Draft ready in your Gmail. Subject: 'Re: Proposal — Next Steps'. Review and send?" },
  ],
  [
    { role: "user", text: "Book a call with James for Thursday." },
    { role: "ai", text: "Checking James's availability... Thursday 2PM works. Invite sent to james@company.com." },
    { role: "user", text: "Add a Zoom link too." },
    { role: "ai", text: "Updated. Zoom link added to the invite. James will get the updated calendar notification." },
  ],
  [
    { role: "user", text: "Summarize this week's leads." },
    { role: "ai", text: "12 new leads this week. Top 3 are high-intent based on reply signals. Want the full breakdown?" },
    { role: "user", text: "Yes, and update the CRM." },
    { role: "ai", text: "CRM updated. 12 leads tagged, 3 marked high-priority. Follow-up reminders set for Monday." },
  ],
];

const TYPING_SPEED = 28;
const MESSAGE_DELAY = 900;
const CONVERSATION_PAUSE = 3000;

export default function ChatDemo() {
  const [convIndex, setConvIndex] = useState(0);
  const [messages, setMessages] = useState<Message[]>([]);
  const [typingText, setTypingText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [msgIndex, setMsgIndex] = useState(0);

  useEffect(() => {
    const conversation = CONVERSATIONS[convIndex];
    if (msgIndex >= conversation.length) {
      const timeout = setTimeout(() => {
        setMessages([]);
        setMsgIndex(0);
        setConvIndex((prev) => (prev + 1) % CONVERSATIONS.length);
      }, CONVERSATION_PAUSE);
      return () => clearTimeout(timeout);
    }

    const msg = conversation[msgIndex];

    if (msg.role === "user") {
      const timeout = setTimeout(() => {
        setMessages((prev) => [...prev, msg]);
        setMsgIndex((prev) => prev + 1);
      }, MESSAGE_DELAY);
      return () => clearTimeout(timeout);
    }

    // AI message — typewriter
    const timeout = setTimeout(() => {
      setIsTyping(true);
      setTypingText("");
      let i = 0;
      const interval = setInterval(() => {
        i++;
        setTypingText(msg.text.slice(0, i));
        if (i >= msg.text.length) {
          clearInterval(interval);
          setIsTyping(false);
          setMessages((prev) => [...prev, msg]);
          setTypingText("");
          setMsgIndex((prev) => prev + 1);
        }
      }, TYPING_SPEED);
      return () => clearInterval(interval);
    }, MESSAGE_DELAY);

    return () => clearTimeout(timeout);
  }, [msgIndex, convIndex]);

  const sceneLabels = ["Email Management", "Scheduling", "Lead Tracking"];

  return (
    <div style={{
      background: "var(--surface-2)",
      border: "1px solid var(--border)",
      borderRadius: 20,
      overflow: "hidden",
      maxWidth: 420,
      width: "100%",
      boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
    }}>

      {/* Window chrome */}
      <div style={{ background: "var(--surface-3)", padding: "12px 16px", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", gap: 8 }}>
        <div style={{ display: "flex", gap: 6 }}>
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FF5F57", display: "block" }} />
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FEBC2E", display: "block" }} />
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28C840", display: "block" }} />
        </div>
        <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginLeft: 8, fontFamily: "DM Mono, monospace" }}>
          hirelessly / ai-assistant
        </span>
        <div style={{ marginLeft: "auto", display: "flex", gap: 6 }}>
          {sceneLabels.map((label, i) => (
            <span
              key={i}
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: i === convIndex ? "var(--accent)" : "var(--border)",
                display: "block",
                transition: "background 0.3s",
              }}
            />
          ))}
        </div>
      </div>

      {/* Scene label */}
      <div style={{ padding: "10px 16px 0", display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{
          fontSize: "0.6875rem",
          fontWeight: 700,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--accent)",
          background: "rgba(0,255,135,0.1)",
          padding: "3px 10px",
          borderRadius: 100,
        }}>
          {sceneLabels[convIndex]}
        </span>
      </div>

      {/* Messages */}
      <div style={{ padding: "16px", minHeight: 220, display: "flex", flexDirection: "column", gap: 10 }}>
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
            }}
          >
            {msg.role === "ai" && (
              <div style={{ width: 24, height: 24, borderRadius: "50%", background: "var(--brand-primary)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.625rem", fontWeight: 700, color: "#fff", flexShrink: 0, marginRight: 8, marginTop: 2 }}>
                AI
              </div>
            )}
            <div style={{
              maxWidth: "75%",
              padding: "10px 14px",
              borderRadius: msg.role === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
              background: msg.role === "user" ? "var(--brand-primary)" : "var(--surface-3)",
              color: msg.role === "user" ? "#fff" : "var(--text-primary)",
              fontSize: "0.875rem",
              lineHeight: 1.5,
            }}>
              {msg.text}
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        {isTyping && (
          <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-start" }}>
            <div style={{ width: 24, height: 24, borderRadius: "50%", background: "var(--brand-primary)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.625rem", fontWeight: 700, color: "#fff", flexShrink: 0, marginRight: 8, marginTop: 2 }}>
              AI
            </div>
            <div style={{
              maxWidth: "75%",
              padding: "10px 14px",
              borderRadius: "16px 16px 16px 4px",
              background: "var(--surface-3)",
              color: "var(--text-primary)",
              fontSize: "0.875rem",
              lineHeight: 1.5,
            }}>
              {typingText}
              <span style={{ display: "inline-block", width: 2, height: "1em", background: "var(--accent)", marginLeft: 1, animation: "blink 0.7s step-end infinite", verticalAlign: "text-bottom" }} />
            </div>
          </div>
        )}
      </div>

      {/* Input bar */}
      <div style={{ padding: "0 16px 16px" }}>
        <div style={{ background: "var(--surface-3)", border: "1px solid var(--border)", borderRadius: 12, padding: "10px 14px", display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: "0.875rem", color: "var(--text-muted)", flex: 1 }}>Ask your AI assistant...</span>
          <div style={{ width: 28, height: 28, borderRadius: "50%", background: "var(--brand-primary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 6h8M7 3l3 3-3 3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
