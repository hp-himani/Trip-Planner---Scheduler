import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/esm/Container';
import Collapse from 'react-bootstrap/Collapse';
import { useState } from 'react';

import { DayPlans } from './Dayplans.js';
import TaskAdd from './TaskAddition.js';

export const Dates = (props) => {
  
  const [open, setOpen] = useState(false);
  const [schedule, setSchedule] = useState([]);
  const [day, setDay] = useState("");

  const handleClick = async (e) => {
    // console.log("hi")
    const res = await fetch(`http://localhost:8000/1/trips/1/schedule/${e}/events`);
    const schedule = await res.json();
    setSchedule(schedule);
    console.log(schedule)
    setDay(e);
    
  }  

  const renderItems=() => {
    return props.dayplans.map((date)=>
      (
        
          <Button variant="warning" style=
            {{backgroundColor:"#FF900B", color:"#000000", borderColor: "", height: "60px"}}
            onClick={() => { handleClick(date) }}
            aria-controls="schedule"
            aria-expanded={open}
          >{date}</Button>
          
        
      )
    );
      
  }
  
  return (
    <div className="text-center">
      <Container fluid 
      style = {{backgroundColor:"#FFE193", marginTop:"3%", marginBottom:"3%"}} 
      >

        <ButtonGroup size="lg" >
          {renderItems()}
        </ButtonGroup>
      </Container>

      <Collapse in={open}>
        <div id="schedule">
          <DayPlans Plan={schedule} />
        </div>
      </Collapse>
      <TaskAdd day={day}/>

    </div>
  );
}