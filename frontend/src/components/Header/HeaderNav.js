import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class HeaderNav extends Component {
  render() {
    return (
      <nav>
        <div className="container">
          <ul>
            <li>
              <Link to="/dashboard">
                <i className="fa fa-tachometer" aria-hidden="true"></i>Dashboard
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default HeaderNav;
