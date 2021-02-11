/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { uiOpenModal } from '../../actions/ui';

const AddNewFab = () => {
  const dispatch = useDispatch();
  const handleOnClick = (e) => {
    e.preventDefault();
    dispatch(uiOpenModal());
  };
  return (
    <button
      type="button"
      className="btn btn-primary fab"
      onClick={handleOnClick}
    >
      <i className="fas fa-plus" />
    </button>
  );
};

export default AddNewFab;
