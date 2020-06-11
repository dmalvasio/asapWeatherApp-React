import React from 'react';
import DrawerToggle from '../SideDrawer/DrawerToggle';
import { func } from 'prop-types';
import './header.css';

const Toolbar = ({ drawerToggleClicked }) => (
  <header className="Toolbar">
    <DrawerToggle onClick={drawerToggleClicked} />
  </header>
);

Toolbar.propTypes = {
  drawerToggleClicked: func.isRequired,
};

export default Toolbar;
