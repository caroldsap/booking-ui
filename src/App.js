import React from 'react';

import Booking from './components/Booking';

import ListBookings from './components/ListBookings'
import Rating from './components/RatingService'
import Route from './components/Route';
import Header from './components/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import '../node_modules/react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';


export default () => {


  return (
    <div>
      <Header />
      <Route path="/list">
        <ListBookings />
      </Route>
      <Route path="/book">
        <Booking />
      </Route>
      <Route path="/ratings">
        <Rating />
      </Route>

    </div>
  );
};
