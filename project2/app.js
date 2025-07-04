// App.js
import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3001"); // Backend server URL

function App() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const sendMessage = () => {
    socket.emit("send_message", { message });
    setMessage("");
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setChat((prev) => [...prev, data]);
    });

    return () => {
      socket.off("receive_message");
    };
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h2>🟢 Real-Time Chat</h2>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={message}
          placeholder="Type a message..."
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
      <div>
        <h4>Messages:</h4>
        <ul>
          {chat.map((msg, i) => (
            <li key={i}>{msg.message}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
