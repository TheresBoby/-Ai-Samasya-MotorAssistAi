import React, { useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import VideoPage from "./components/VideoPage";
import Reminders from "./components/Reminders";
import "./styles/App.css";

const App = () => {
  const cursorRef = useRef();

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:6789");

    ws.onmessage = (event) => {
      const [x, y] = event.data.split(",").map(Number);
      if (cursorRef.current) {
        cursorRef.current.style.left = `${x}px`;
        cursorRef.current.style.top = `${y}px`;
      }
    };

    ws.onopen = () => console.log("WebSocket connection established.");
    ws.onclose = () => console.log("WebSocket connection closed.");
    ws.onerror = (error) => console.error("WebSocket error:", error);

    return () => ws.close();
  }, []);

  return (
    <Router>
      <Navbar />
      <div className="cursor" ref={cursorRef}></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video" element={<VideoPage />} />
        <Route path="/reminders" element={<Reminders />} />
      </Routes>
    </Router>
  );
};

export default App;
