import React, { useEffect, useState } from "react";

const GazeCursor = () => {
  const [gazeData, setGazeData] = useState({ x: 0, y: 0, blink: false });

  useEffect(() => {
    const fetchGazeData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/gaze-data");
        const data = await response.json();
        setGazeData(data);

        // Blink action simulation
        if (data.blink) {
          const element = document.elementFromPoint(data.x, data.y);
          if (element) element.click();
        }
      } catch (error) {
        console.error("Error fetching gaze data:", error);
      }
    };

    const interval = setInterval(fetchGazeData, 100); // Fetch every 100ms
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        top: gazeData.y + "px",
        left: gazeData.x + "px",
        width: "20px",
        height: "20px",
        backgroundColor: "red",
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 1000,
        transform: "translate(-50%, -50%)", // Center the dot on coordinates
      }}
    ></div>
  );
};

export default GazeCursor;
