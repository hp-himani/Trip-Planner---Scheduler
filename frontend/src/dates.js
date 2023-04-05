import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/esm/Container';
import { DayPlans } from './Dayplans.js';
import Collapse from 'react-bootstrap/Collapse';
import { useState } from 'react';


export const Dates = (props) => {
  // let emptyPlan = [
  //   {
  //     id: 1,
  //     time: 'time',
  //     desc: 'your description here',
  //     loc: 'Location here'
  //   },
  //   {
  //     id: 2,
  //     time: 'time',
  //     desc: 'your description here',
  //     loc: 'Location here'
  //   },
  //   {
  //     id: 2,
  //     time: 'time',
  //     desc: 'your description here',
  //     loc: 'Location here'
  //   }
  // ]
  const [open, setOpen] = useState(false);
  const [Plan, setSch] = useState([]);
  const [schedule, setSchedule] = useState([{date:"hi"}]);

  const handleClick = async (e) => {
    console.log("hi")
    const res = await fetch(`http://localhost:8000/1/trips/1/schedule/2023-04-05/events`);
    const schedule = await res.json();
    setSchedule(schedule);
    // fetch(`http://localhost:8000/1/trips/1/schedule/2023-04-05/events`).then((res) => res.json()).then((schedule) => {console.log(schedule); return setSchedule(schedule);}).catch((err)=>{console.log(err.message);})
  }

  function addPlans(e) {
    setSch([e[0], e[1], e[2]]);
    setOpen(true);
  }

  return (
    <div className="text-center">
      <Container fluid 
      style = {{backgroundColor:"#FFE193", marginTop:"3%", marginBottom:"3%"}} 
      >

        <ButtonGroup size="lg" >
          <Button variant="warning" style=
            {{backgroundColor:"#FF900B", color:"#000000", borderColor: "", height: "60px"}}
            onClick={handleClick}
            aria-controls="schedule"
            aria-expanded={open}
          >{schedule[0].date}</Button>
          {/* <Button
            variant="warning" 
            style= {{backgroundColor:"#FF900B", color:"#000000", borderColor: "", height: "60px"}}
            onClick={() => { addPlans(props.dayplans[1].plans) }}
            aria-controls="schedule"
            aria-expanded={open}
          >{props.dayplans[1].date}</Button>

          <Button variant="warning"
            style= {{backgroundColor:"#FF900B", color:"#000000", borderColor: "", height: "60px"}}
            onClick={() => { addPlans(emptyPlan) }}
            aria-controls="schedule"
            aria-expanded={open}
          >{props.dayplans[2].date}</Button>

          <Button variant="warning"
            style= {{backgroundColor:"#FF900B", color:"#000000", borderColor: "", height: "60px"}}
            onClick={() => { addPlans(emptyPlan) }}
            aria-controls="schedule"
            aria-expanded={open}>{props.dayplans[3].date}</Button>

          <Button variant="warning"
            style= {{backgroundColor:"#FF900B", color:"#000000", borderColor: "", height: "60px"}}
            onClick={() => { addPlans(emptyPlan) }}
            aria-controls="schedule"
            aria-expanded={open}>{props.dayplans[4].date}</Button> */}

        </ButtonGroup>
      </Container>

      <Collapse in={open}>
        <div id="schedule">
          <DayPlans Plan={schedule} />
          <Button variant="warning" style=
            {{backgroundColor:"#FF900B", color:"#000000", borderColor: "#000000", width: "400px", height: "50px", margin: "4%", boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)"}}
           size="lg" onClick={() => { }}>ADD TASK</Button>
        </div>
      </Collapse>

    </div>
  );
}