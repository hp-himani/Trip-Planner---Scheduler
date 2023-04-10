import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/esm/Container';
import Collapse from 'react-bootstrap/Collapse';
import { useState } from 'react';

import { DayPlans } from './Dayplans.js';
import TaskAdd from './TaskAddition.js';

export const Dates = (props) => {
  let emptyPlan = [
    {
      id: 1,
      time: 'time',
      desc: 'your description here',
      loc: 'Location here'
    },
    {
      id: 2,
      time: 'time',
      desc: 'your description here',
      loc: 'Location here'
    },
    {
      id: 2,
      time: 'time',
      desc: 'your description here',
      loc: 'Location here'
    }
  ]
  const [open, setOpen] = useState(false);
  const [Plan, setSch] = useState([]);

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
            onClick={() => { addPlans(props.dayplans[0].plans) }}
            aria-controls="schedule"
            aria-expanded={open}
          >{props.dayplans[0].date}</Button>
          <Button
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
            aria-expanded={open}>{props.dayplans[4].date}</Button>

        </ButtonGroup>
      </Container>

      <Collapse in={open}>
        <div id="schedule">
          <DayPlans Plan={Plan} />
        </div>
      </Collapse>
      <TaskAdd/>

    </div>
  );
}