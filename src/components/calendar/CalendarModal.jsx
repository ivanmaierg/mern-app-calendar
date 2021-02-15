/* eslint-disable import/named */
/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';

import Swal from 'sweetalert2';

import { uiCloseModal } from '../../actions/ui';
import {
  eventStartAddNew,
  eventClearActiveEvent,
  eventUpdated,
} from '../../actions/events';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');

const startEvent = moment().minutes(0).seconds(0).add(1, 'hours');
const endEvent = startEvent.clone().add(1, 'hour');
const initEvent = {
  title: '',
  notes: '',
  start: startEvent.toDate(),
  end: endEvent.toDate(),
};
const CalendarModal = () => {
  const { modalOpen } = useSelector((state) => state.ui);
  const { activeEvent } = useSelector((state) => state.calendar);
  const dispatch = useDispatch();

  const [dateStart, setDateStart] = useState(startEvent.toDate());
  const [dateEnd, setDateEnd] = useState(endEvent.toDate());
  const [titleValid, setTitleValid] = useState(true);

  const [formValues, setFormValues] = useState(initEvent);

  const {
    notes, title, start, end,
  } = formValues;

  useEffect(() => {
    if (activeEvent) {
      setFormValues(activeEvent);
    } else {
      setFormValues(initEvent);
    }
  }, [activeEvent, setFormValues]);

  const closeModal = () => {
    dispatch(uiCloseModal());
    dispatch(eventClearActiveEvent());
    setFormValues(initEvent);
  };
  const handleStartDate = (e) => {
    setDateStart(e);
    setFormValues({ ...formValues, start: e });
  };

  const handleEndDate = (e) => {
    setDateEnd(e);

    setFormValues({ ...formValues, end: e });
  };
  const handleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    const momentStart = moment(start);
    const momentEnd = moment(end);
    if (momentStart.isSameOrAfter(momentEnd)) {
      return Swal.fire(
        'Error',
        'La fecha fin debe de ser mayor a la fecha de inicio',
        'error',
      );
    }
    if (title.trim().length < 2) {
      return setTitleValid(false);
    }
    if (activeEvent) {
      dispatch(eventUpdated({ ...formValues }));
    } else {
      dispatch(
        eventStartAddNew({
          ...formValues,
          id: new Date().getTime(),
          user: {
            _id: '123',
            name: 'Ivan',
          },
        }),
      );
    }

    setTitleValid(false);
    closeModal();
  };
  return (
    <Modal
      isOpen={modalOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      closeTimeoutMS={200}
      contentLabel="Example Modal"
      className="modal"
      overlayClassName="modal-fondo"
    >
      <h1>
        {' '}
        {(activeEvent) ? activeEvent.title : 'Nuevo Evento'}
        {' '}
      </h1>
      <hr />
      <form className="container" onSubmit={handleSubmitForm}>
        <div className="form-group">
          <label htmlFor="startDate">Fecha y hora inicio</label>
          <DateTimePicker
            onChange={handleStartDate}
            value={dateStart}
            id="startDate"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="endDate">Fecha y hora fin</label>
          <DateTimePicker
            onChange={handleEndDate}
            value={dateEnd}
            minDate={dateStart}
            id="endDate"
            className="form-control"
          />
        </div>

        <hr />
        <div className="form-group">
          <label>Titulo y notas</label>
          <input
            type="text"
            className={`form-control ${!titleValid && 'is-invalid'}`}
            placeholder="Título del evento"
            name="title"
            value={title}
            autoComplete="off"
            onChange={handleInputChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            Una descripción corta
          </small>
        </div>

        <div className="form-group">
          <textarea
            type="text"
            className="form-control"
            placeholder="Notas"
            value={notes}
            rows="5"
            name="notes"
            onChange={handleInputChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            Información adicional
          </small>
        </div>

        <button type="submit" className="btn btn-outline-primary btn-block">
          <i className="far fa-save" />
          <span>Guardar</span>
        </button>
      </form>
    </Modal>
  );
};

export default CalendarModal;
