import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/esm/Container';
import Collapse from 'react-bootstrap/Collapse';
import { useState } from 'react';

import { DayPlans } from './Dayplans.js';
import {TaskAdd} from './TaskAddition.js';

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
    if(!e)
    { setSch([e[0], e[1], e[2]]);}
    else setSch(emptyPlan);
    setOpen(true);
  }

  function addMyTask(len, time,loc,desc){
    let id0 = len;
    const mp = {
      id: id0,
      time: time, 
      desc: desc,
      loc: loc
    }
    setSch([...Plan,mp]);
  }

  function DeleteTask(Task){
    setSch(Plan.filter((e)=>{
      return e!==Task;
    }));
  }

  return (
    <div className="text-center">
      <Container fluid
      style = {{backgroundColor:"#FFE193", marginTop:"3%", marginBottom:"3%"}} 
      >
        
        <ButtonGroup size="lg" >
          <div style={{ display: 'flex', overflowX: 'auto', maxWidth: '600px' }}>
        {props.dayplans.map((e) => (
          <Button
            key={e.date} 
            variant="warning"
            style={{
              backgroundColor: '#FF900B',
              color: '#000000',
              height: '60px',
              minWidth: '100px'
            }}
            onClick={() => {
              addPlans(e.plans);
            }}
            aria-controls="schedule"
            aria-expanded={open}
          >
            {e.date}
          </Button>
        ))}
      </div>
        </ButtonGroup>
      </Container>

      <Collapse in={open}>
        <div id="schedule">
          <DayPlans Plan={Plan} DeleteTask={DeleteTask} />
          <TaskAdd pl ={Plan} addMyTask={addMyTask}/>
        </div>
      </Collapse>
      

    </div>
  );
}