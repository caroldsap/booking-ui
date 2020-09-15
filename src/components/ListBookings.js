import React from 'react';
import axios from 'axios';
import BootstrapTable from 'react-bootstrap-table-next';


export default class ListBookings extends React.Component {
  state = {
    bookings: [],
    columns : [{
      dataField: 'bookingId',
      text: 'Booking ID'
    }, {
      dataField: 'serviceRequestedFor',
      text: 'Service Name'
    }, {
      dataField: 'bookingStatus',
      text: 'Status'
    }]
  }

  
  componentDidMount() {
    const apiURL = "http://localhost:8080/v1/booking/list?userId=100";
    axios.get(apiURL)
      .then(res => {
        const bookings = res.data;
        this.setState({ bookings });
      })
  }
  render() {
    return (
      
      <BootstrapTable keyField='bookingId' striped={true} bordered={true} columns={this.state.columns}
         data={this.state.bookings} />

    )

  }

}
