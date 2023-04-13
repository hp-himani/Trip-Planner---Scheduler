import SideBar from './Sidebar';
import {Dates} from './dates.js';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Scehduler() {
  let dayplans = [
    {
      date:'13 Mar 2023',
      plans: [
      {
        id: 1,
        time: '9:00 AM',
        desc: 'eat breakfast',
        loc: 'Hotel Raj'
      },
      {
        id: 2,
        time: '10:00 AM',
        desc: 'go to palace',
        loc: 'Raj mahal'
      },
      { 
        id: 3,
        time: '11:00 AM',
        desc: 'go to bridge',
        loc: 'Ram Jhula'
      }
      ]
    },
    {
      date:'14 Mar 2023',
      plans: [
      {
        id: 1,
        time: '9:00 AM',
        desc: 'eat pasta',
        loc: 'Hotel Raj'
      },
      {
        id: 2,
        time: '10:00 AM',
        desc: 'go to market',
        loc: 'Raj mahal'
      },
      {
        id: 3,
        time: '1:00 PM',
        desc: 'go to hotel',
        loc: 'Taj mahal'
      }
      ]
    },
    {
      date:'15 Mar 2023',
      plans: []
    },
    {
      date:'16 Mar 2023',
      plans: []
    },
    {
      date:'17 Mar 2023',
      plans: []
    }
  ];

  return (
    <>
    <div>
    <Navbar variant="dark" 
    style = {{backgroundColor:"#E28616", color:"#000000", height:"50px"}}>
      <SideBar/>
      <Container>
        <Navbar.Brand style={{fontSize: "30px"}}><strong>TRIP  ROYALE</strong></Navbar.Brand>
      </Container>
    </Navbar>
    <Navbar 
    style = {{backgroundColor:"#F6AD52", color:"#000000", textAlign:"center", display: "inline-block", width: "100%"}}>
      <h4>SCHEDULER</h4>
    </Navbar>
    </div>

    <Dates dayplans={dayplans}/>
    </>
  );
}

export default Scehduler;
