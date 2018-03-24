import React from 'react';
import ReactDOM from 'react-dom';

import 'jquery';
import 'popper.js';
import 'bootstrap';


import './style.sass';

import Dash from './dashboard';

ReactDOM.render(
  <Dash />,
  document.getElementById('react'),
);
