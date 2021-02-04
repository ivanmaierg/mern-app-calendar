/* eslint-disable react/prop-types */
import React from 'react';

const CalendarEvent = ({ event }) => {
  const { title, user } = event;
  return (
    <div className="calendarEvent">
      <strong>{title}</strong>
      <span>{user.name}</span>
    </div>
  );
};

export default CalendarEvent;
