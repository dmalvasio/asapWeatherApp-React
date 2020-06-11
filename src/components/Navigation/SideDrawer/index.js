import React from 'react';
import FavItems from '../FavoriteItems';
import Backdrop from '../../Backdrop';
import { func, bool } from 'prop-types';
import './sideDrawer.css';

const SideDrawer = ({ getWeather, setLocation, open, onClosed }) => {
  let attachedClasses = ['SideDrawer', 'OnClosed'];
  if (open) {
    attachedClasses = ['SideDrawer', 'Open'];
  }

  return (
    <>
      <Backdrop show={open} onClick={onClosed} />
      <div className={attachedClasses.join(' ')}>
        <div className="FavToolbar">YOUR FAVORITES</div>
        <nav>
          <FavItems getWeather={getWeather} setLocation={setLocation} />
        </nav>
      </div>
    </>
  );
};

SideDrawer.propTypes = {
  getWeather: func.isRequired,
  setLocation: func.isRequired,
  open: bool.isRequired,
  onClosed: func.isRequired,
};

export default SideDrawer;
