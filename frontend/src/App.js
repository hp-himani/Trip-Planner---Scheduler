import './App.css';
import { useState, useEffect } from 'react';
import {Dates} from './S_comp/dates.js';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import moment from 'moment';

function App() {
  let dayplans = [
    // {
    //   date:'13 Mar 2023',
    //   plans: [
    //   {
    //     id: 1,
    //     time: '9:00 AM',
    //     desc: 'eat breakfast',
    //     loc: 'Hotel Raj'
    //   },
    //   {
    //     id: 2,
    //     time: '10:00 AM',
    //     desc: 'go to palace',
    //     loc: 'Raj mahal'
    //   },
    //   { 
    //     id: 3,
    //     time: '11:00 AM',
    //     desc: 'go to bridge',
    //     loc: 'Ram Jhula'
    //   }
    //   ]
    // },
    
  ];
  let [sdate, setSDate] = useState("");
  let [edate, setEDate] = useState("");
  function getDates(startDate, stopDate) {
    var dateArray = [];
    var currentDate = moment(startDate);
    var stopDate = moment(stopDate);
    while (currentDate <= stopDate) {
        dateArray.push( moment(currentDate).format('YYYY-MM-DD') )
        currentDate = moment(currentDate).add(1, 'days');
    }
    return dateArray;
}

    // 3. Create out useEffect function
  useEffect(() => {
    fetch("http://127.0.0.1:8000/1/trips/1/")
    .then((response) => response.json())        
    .then((data) => {setSDate(data.start_date);setEDate(data.end_date);})
  },[])
  console.log(sdate,edate)
  let daysOfTrip = getDates(sdate, edate);

  return (
    <>
    {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment.min.js"></script> */}
    <div>
    <Navbar variant="dark" 
    style = {{backgroundColor:"#E28616", color:"#000000", height:"50px"}}>
      <Container>
        <Navbar.Brand style={{fontSize: "30px"}}><strong>TRIP  ROYALE</strong></Navbar.Brand>
      </Container>
    </Navbar>
    <Navbar 
    style = {{backgroundColor:"#F6AD52", color:"#000000", textAlign:"center", display: "inline-block", width: "100%"}}>
      <h4>SCHEDULER</h4>
    </Navbar>
    </div>

    <Dates dayplans={daysOfTrip}/>
    </>
  );
}

export default App;