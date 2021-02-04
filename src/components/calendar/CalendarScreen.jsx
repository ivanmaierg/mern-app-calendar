/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/es';
import Navbar from '../ui/Navbar';
import messages from '../../helpers/calendar-msg-esp';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import CalendarEvent from './CalendarEvent';
import CalendarModal from './CalendarModal';

moment.locale('es');

const localizer = momentLocalizer(moment);

const events = [
  {
    title: 'Cumpleaños del jefe',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
    bgcolor: '#fafafa',
    notes: 'Comprar el pastel',
    user: {
      _id: '123',
      name: 'Ivan',
    },
  },
];

const CalendarScreen = () => {
  const [lastView, setLastView] = useState(
    localStorage.getItem('lastView') || 'month',
  );
  const onDoubleClick = (e) => {
    console.log(e);
  };
  const onSelectEvent = (e) => {
    console.log(e);
  };
  const onViewChange = (e) => {
    setLastView(e);
    localStorage.setItem('lastView', e);
  };
  // el retorno de esta funcion, asigna el estilo q queramos a la nota
  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: '#367CF7',
      borderRadius: '2px',
      opacity: 0.8,
      width: '100%',
      display: 'block',
      color: 'white',
    };
    return {
      style,
    };
  };
  return (
    <div className="calendar-screen">
      <Navbar />
      <h1>Calendar Screen</h1>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        messages={messages}
        eventPropGetter={eventStyleGetter}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelectEvent}
        onView={onViewChange}
        view={lastView}
        components={{
          event: CalendarEvent,
        }}
      />
      <CalendarModal />
    </div>
  );
};

export default CalendarScreen;
