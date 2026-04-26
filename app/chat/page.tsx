"use client";
import Link from "next/link";
import { useState } from "react";
import styles from "./page.module.css";
// import { getModel } from "./getModel";

const ChatPage = () => {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    [],
  );
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    setLoading(true);
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");

    const res = await fetch("/api/chatBot", {
      method: "POST",
      body: JSON.stringify({ message: input }),
      headers: { "Content-Type": "application/json" },
    });

    const resJson = await res.json();
    console.log("Received response:", resJson);
    const reply = resJson.reply;
    setMessages([...newMessages, { role: "assistant", content: reply }]);
    setLoading(false);
  };
  return (
    <>
      <p>chatPage</p>
      <div className={styles.chatContainer}>
        <div className={styles.messages}>
          {messages.map((msg, idx) => (
            <div key={idx} className={msg.role}>
              <strong>{msg.role}:</strong> {msg.content}
            </div>
          ))}
        </div>
        <div className={styles.inputArea}>
          <textarea
            className={styles.textarea}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className={styles.button}
            onClick={sendMessage}
            disabled={loading}
          >
            送信
          </button>
        </div>
      </div>
      <Link href="/">homeへ</Link>
    </>
  );
};
export default ChatPage;
