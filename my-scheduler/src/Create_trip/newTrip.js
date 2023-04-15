import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import photo from './Travel_mode.png'
import { usersData } from './usersData'; 
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export const NewTrip=()=> {
  const [groupName, setGroupName] = useState('');
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedMembers, setSelectedMembers] = useState([]);


  const handleMemberSelection = (event) => {
    const selectedOptions = event.target.options;
    const selectedMemberIds = [];
    for (let i = 0; i < selectedOptions.length; i++) {
      if (selectedOptions[i].selected) {
        selectedMemberIds.push(selectedOptions[i].value);
      }
    }
    setSelectedMembers(selectedMemberIds);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!groupName || !destination ||!startDate || !endDate)
    {
      alert("Group details can't be empty");
    }
    else console.log('Form submitted:', groupName, destination, startDate, endDate, selectedMembers);
  };

  return (

    <div >
      <div>
        <Navbar variant="dark" 
        style = {{backgroundColor:"#E28616", color:"#000000", height:"50px"}}>
          <Container>
            <Navbar.Brand style={{fontSize: "30px"}}><strong>TRIP  ROYALE</strong></Navbar.Brand>
          </Container>
        </Navbar>
        
      </div>
      <Container fluid 
      style = {{ marginTop:"2%"}} >
      <div className="row">
        <div className="col">
          <img src={photo} alt="Trip" />
        </div>
        <div className="col" style = {{ marginRight:"2%"}} >
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="groupName" style={{margin:"3%"}} >
              <Form.Label><strong>Group Name</strong></Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Group Name"
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="destination" style={{margin:"3%"}}>
              <Form.Label><strong>Destination</strong></Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="startDate"style={{margin:"3%"}}>
              <Form.Label><strong>Start Date</strong></Form.Label>
              <Form.Control
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="endDate"style={{margin:"3%"}}>
              <Form.Label><strong>End Date</strong></Form.Label>
              <Form.Control
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="members"style={{margin:"3%"}}>
            <Form.Label><strong>Add Members</strong></Form.Label>
            <Form.Control
                  as="select"
                  multiple
                  value={selectedMembers}
                  onChange={handleMemberSelection}
                >{usersData.map((user) => (
                  <option key={user.id} value={user.id}>+{user.name}</option>
                ))}</Form.Control>
            </Form.Group>
            <Button
              variant="warning"
              type="submit"
              style={{margin:"3%",backgroundColor: '#FF900B', color: '#000000', borderColor: '#000000', width: '95%' }}
            >
              SUBMIT
            </Button>
          </Form>
        </div>
      </div>
      </Container>
    </div>
  );
};


