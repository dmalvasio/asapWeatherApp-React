import React from 'react';
import { func } from 'prop-types';
import './drawerToggle.css';

const DrawerToggle = ({ onClick }) => (
  <div onClick={onClick} className="DrawerToggle">
    <div />
    <div />
    <div />
  </div>
);

DrawerToggle.propTypes = {
  onClick: func.isRequired,
};

export default DrawerToggle;
