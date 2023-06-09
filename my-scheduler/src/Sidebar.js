import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ListGroup from 'react-bootstrap/ListGroup';
import Collapse from 'react-bootstrap/Collapse';
import {
  Link
} from "react-router-dom";

function SideBar({groupName}) {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleME = () => setOpen(!open);
  return (
    <>
      <Button variant="warning" onClick={handleShow} 
      style={{
        width:'45px',
        height: '45px'
      }}>
      <div className="row" style={{width: '25px', height: '1.2px', backgroundColor: '#000000', marginBottom:'10px'}}></div>
      <div className="row" style={{width: '25px', height: '1.2px', backgroundColor: '#000000', marginBottom:'10px'}}></div>
      <div className="row" style={{width: '25px', height: '1.2px', backgroundColor: '#000000'}}></div>
      </Button>

      <Offcanvas show={show} onHide={handleClose} backdrop="static">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{groupName}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <ListGroup>
            <ListGroup.Item variant="warning"><Link to="/Schd">SCHEDULER</Link></ListGroup.Item>
            <ListGroup.Item variant="warning">FIND NEARBY PLACES</ListGroup.Item>
            <ListGroup.Item variant="warning">SPLIT BILL</ListGroup.Item>
            <ListGroup.Item variant="warning">
                MY EXPENSES
                <Button variant="warning" onClick={handleME} style={{backgroundColor:"#FFDEAD", borderColor:"#FFDEAD"}}>v</Button>
                <Collapse in={open}>
                    <div >
                     <ListGroup>
                        <ListGroup.Item variant="warning">EXPENSES</ListGroup.Item>
                        <ListGroup.Item variant="warning">AMOUNT TO BE PAID</ListGroup.Item>
                        <ListGroup.Item variant="warning">PENDING PAYMENT</ListGroup.Item>
                     </ListGroup>
                    </div>
                </Collapse>
            </ListGroup.Item>
            <ListGroup.Item variant="warning">PHOTOS</ListGroup.Item>
            <ListGroup.Item variant="warning"><Link to="/Chat">CHAT</Link></ListGroup.Item>
            <ListGroup.Item variant="warning">SETTINGS</ListGroup.Item>
        </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SideBar;