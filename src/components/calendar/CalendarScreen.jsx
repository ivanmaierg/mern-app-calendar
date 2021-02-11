/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import 'moment/locale/es';
import Navbar from '../ui/Navbar';
import messages from '../../helpers/calendar-msg-esp';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import CalendarEvent from './CalendarEvent';
import CalendarModal from './CalendarModal';
import { uiOpenModal } from '../../actions/ui';
import { eventClearActiveEvent, eventSetActive } from '../../actions/events';
import AddNewFab from '../ui/AddNewFab';
import DeleteEventFab from '../ui/DeleteEventFab';

moment.locale('es');

const localizer = momentLocalizer(moment);

const eventBuild = (event) => ({
  title: '',
  notes: '',
  start: moment(event.start, 'YYYY-MM-DD'),
  end: moment(event.end, 'YYYY-MM-DD'),
});

const CalendarScreen = () => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector((state) => state.calendar);
  const [lastView, setLastView] = useState(
    localStorage.getItem('lastView') || 'month',
  );
  const onDoubleClick = (e) => {
    dispatch(uiOpenModal());
  };
  const onSelectEvent = (e) => {
    dispatch(eventSetActive(e));
  };
  const onViewChange = (e) => {
    setLastView(e);
    localStorage.setItem('lastView', e);
  };
  const onSelectSlot = (e) => {
    dispatch(eventClearActiveEvent());
    dispatch(eventSetActive(eventBuild(e)));
  };

  // el retorno de esta funcion, asigna el estilo q queramos a la nota
  const eventStyleGetter = (event, start, end, isSelected) => {
    let style;
    if (isSelected) {
      style = {
        backgroundColor: '#3CF7',
        borderRadius: '0px',
        opacity: 0.8,
        display: 'block',
        color: 'white',
      };
    } else {
      style = {
        backgroundColor: '#367CF7',
        borderRadius: '2px',
        opacity: 0.8,
        width: '100%',
        display: 'block',
        color: 'white',
      };
    }
    return {
      style,
    };
  };
  return (
    <div className="calendar-screen">
      <Navbar />
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
        onSelectSlot={onSelectSlot}
        selectable
        view={lastView}
        components={{
          event: CalendarEvent,
        }}
      />
      <AddNewFab />
      {activeEvent && <DeleteEventFab />}
      <CalendarModal />
    </div>
  );
};

export default CalendarScreen;
