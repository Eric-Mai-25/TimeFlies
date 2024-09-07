"use client";

import React, { useState } from 'react';
import './CalendarStyles.css'; // Add a new CSS file for styles

export default function WeeklyCalendar() {
  const [tasks, setTasks] = useState({});
  
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const timeSlots = Array.from({ length: 24 }, (_, i) => `${i}:00`); // Create times from 0:00 to 23:00

  // Handle task entry for a specific day and time
  const handleTaskEntry = (day, time, task) => {
    setTasks({
      ...tasks,
      [`${day}-${time}`]: task,
    });
  };

  return (
    <div className="calendar">
      <div className="header">
        {daysOfWeek.map((day) => (
          <div key={day} className="day-header">
            {day}
          </div>
        ))}
      </div>

      <div className="body">
        {timeSlots.map((time) => (
          <div key={time} className="time-row">
            <div className="time-slot">{time}</div>
            {daysOfWeek.map((day) => (
              <div key={day} className="day-cell">
                <input
                  type="text"
                  placeholder="Add task"
                  value={tasks[`${day}-${time}`] || ''}
                  onChange={(e) => handleTaskEntry(day, time, e.target.value)}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}