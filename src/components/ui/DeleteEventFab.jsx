import React from 'react';
import { useDispatch } from 'react-redux';
import { eventDeleted } from '../../actions/events';

const DeleteEventFab = () => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(eventDeleted());
  };
  return (
    <button
      type="button"
      className="btn btn-danger fab-danger"
      onClick={handleDelete}
    >
      <i className="fas fa-trash" />
      <span>Borrar evento</span>
    </button>
  );
};

export default DeleteEventFab;
