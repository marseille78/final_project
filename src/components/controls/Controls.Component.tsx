import * as React from 'react';
import { NavLink } from "react-router-dom";

import './Controls.scss';

export const ControlsComponent: React.SFC<{}> = () => {
  return (
    <nav className="nav-controls">
      <ul className="nav-controls__list">
        <li className="nav-controls__item">
          <NavLink
            exact={true}
            to={'/'}
            className="nav-controls__link"
            title="Home"
            activeClassName="active"
          >
            <span className="icon icon--home" />
          </NavLink>
        </li>
        <li className="nav-controls__item">
          <NavLink
            to={'/about'}
            className="nav-controls__link"
            title="About"
            activeClassName="active"
          >
            <span className="icon icon--about" />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};