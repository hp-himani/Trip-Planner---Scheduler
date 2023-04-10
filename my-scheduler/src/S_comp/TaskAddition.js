import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function TaskAdd() {
  
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [loc, setLoc] = useState("");
  const [desc, setDesc] = useState("");

  const addMyTask = (e)=>{
    e.preventDefault();
    if(!date || !time || !loc || !desc)
    {
      alert("fgregrwe");
    }
  }
  return (
    
    <OverlayTrigger
        trigger="click"
        placement="right"
        style={{backgroundColor:"#FFE193",width:"600px" }}
        overlay={
        <Popover id={`popover-positioned-top`} style={{backgroundColor:"#FFC594",width:"600px", maxWidth:"35%"}}>
            <Popover.Header as="h3" style={{backgroundColor:"#FA5B3C"}}>So, what you are planning?</Popover.Header>
            <Popover.Body>
            <Form onSubmit={addMyTask}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label value={date} onChange={(e)=>setDate(e.target.value)}>Date</Form.Label>
                <Form.Control type="date" />
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Label value={time} onChange={(e)=>setTime(e.target.value)}>Time</Form.Label>
                <Form.Control type="time" />
              </Form.Group>
              
              <Form.Group className="mb-3" >
                <Form.Label value={loc} onChange={(e)=>setLoc(e.target.value)}>Location</Form.Label>
                <Form.Control as="textarea" rows={2} placeholder="Eg. Hotel Roar" />
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Label value={desc} onChange={(e)=>setDesc(e.target.value)}>Description</Form.Label>
                <Form.Control as="textarea" rows={3}  placeholder="Eg. Go To Mahal" />
              </Form.Group>
              <div className="text-center">
              <Button variant="primary" type="submit"  style=
                {{backgroundColor:"#FA5B3C", color:"#000000", borderColor: "#000000", width: "240px"}}>
                Done
              </Button>
              </div>
            </Form>
            </Popover.Body>
        </Popover>
        }
    >
        <Button variant="warning" style=
            {{backgroundColor:"#FF900B", color:"#000000", borderColor: "#000000", width: "400px", height: "50px", margin: "4%", boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)"}}
           size="lg">ADD TASK</Button>
    </OverlayTrigger>
  );
}

export default TaskAdd;