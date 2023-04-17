import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

export const TaskAdd = (pl, { addMyTask }) => {

  const [time, setTime] = useState("");
  const [loc, setLoc] = useState("");
  const [desc, setDesc] = useState("");

  const SUBMIT = (e) => {
    e.preventDefault();
    if (!time || !loc || !desc) {
      alert("PLease fill all the details for your plan");
    }
    else pl.addMyTask(pl.length, time, loc, desc);
  }
  return (

    <OverlayTrigger
      trigger="click"
      placement="right"
      style={{ backgroundColor: "#FFE193", width: "600px" }}
      overlay={
        <Popover id={`popover-positioned-top`} style={{ backgroundColor: "#FFC594", width: "600px", maxWidth: "35%" }}>
          <Popover.Header as="h3" style={{ backgroundColor: "#FA5B3C" }}>So, what you are planning?</Popover.Header>
          <Popover.Body>
            <Form onSubmit={SUBMIT}>

              <Form.Group className="mb-3" >
                <Form.Label value={time} >Time</Form.Label>
                <Form.Control type="time" onChange={(e) => { setTime(e.target.value) }} />
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Label value={loc} >Location</Form.Label>
                <Form.Control as="textarea" rows={2} placeholder="Eg. Hotel Roar" onChange={(e) => setLoc(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Label value={desc} >Description</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Eg. Go To Mahal" onChange={(e) => setDesc(e.target.value)} />
              </Form.Group>
              <div className="text-center">
                <Button variant="primary" type="submit" style=
                  {{ backgroundColor: "#FA5B3C", color: "#000000", borderColor: "#000000", width: "240px" }}>
                  Done
                </Button>
              </div>
            </Form>
          </Popover.Body>
        </Popover>
      }
    >
      <Button variant="warning" style=
        {{ backgroundColor: "#FF900B", color: "#000000", borderColor: "#000000", width: "400px", height: "50px", margin: "2%", boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)" }}
        size="lg">ADD TASK</Button>
    </OverlayTrigger>
  );
}

