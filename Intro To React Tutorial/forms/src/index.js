import React,{Fragment} from 'react';
import ReactDOM from 'react-dom';

import NameForm from './Components/NameForm.component'
import EssayForm from "./Components/EssayForm.component";
import FlavorForm from "./Components/FlavorForm.component";
import Reservation from "./Components/Reservation.component";

ReactDOM.render(
  <Fragment>
    <NameForm />
    <br/>
    <EssayForm/>
    <br/>
    <FlavorForm/>
    <br/>
    <Reservation/>
  </Fragment>,
  document.getElementById('root'));
