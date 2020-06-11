import React from 'react';
import { func, bool } from 'prop-types';
import './backdrop.css';

const Backdrop = ({ show, onClick }) =>
  show ? <div className="Backdrop" onClick={onClick} /> : null;

Backdrop.propTypes = {
  show: bool.isRequired,
  onClick: func.isRequired,
};

export default Backdrop;
