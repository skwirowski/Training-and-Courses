import React from 'react';
import ReactDOM from 'react-dom';

import LoginControl from './Components/LoginControl.component';
import Mailbox from './Components/Mailbox.component';
import Warning from "./Components/Warning.component";

ReactDOM.render(
  <div>
    <LoginControl />
    <Mailbox />
    <Warning />
  </div>,
  document.getElementById('root')
);
