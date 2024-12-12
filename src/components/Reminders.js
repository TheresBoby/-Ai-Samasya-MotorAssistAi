import React, { useState } from 'react';
import '../styles/Reminders.css';

const Reminders = () => {
  const [tasks, setTasks] = useState([
    "Complete Chapter 1",
    "Watch HTML Basics video",
    "Submit Quiz for Week 2",
  ]);

  const handleComplete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="reminders">
      <h2>Reminders</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleComplete(index)}>Mark as Done</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reminders;
