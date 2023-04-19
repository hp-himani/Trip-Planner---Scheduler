import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import SideBar from '../Sidebar';
import background from '../S_comp/Scheduler.jpg';


export const ChatPage = ({ groupData }) => {
    let username = "Himani";

    const [messages, setMessages] = useState(groupData.chatMsg); // State to store chat messages
    let k = messages.length - 1;
    const [input, setInput] = useState(''); // State to store input message

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (input.trim() === '') return; // Do not submit empty messages
        k = k + 1;
        let mymsg = {
            id: k,
            sender: username,
            text: input
        };
        setMessages([...messages, mymsg]); // Add input message to messages state
        setInput(''); // Reset input state after submission
    };

    return (
        <div>
            <Navbar variant="dark"
                style={{
                    backgroundColor: "#E28616",
                    color: "#000000",
                    height: "50px",
                    position: 'fixed',
                    width: "100%",
                    zIndex: '2'
                }}>
                <SideBar groupName={groupData.name} />
                <Container>
                    <Navbar.Brand style={{ fontSize: "30px" }}><strong>TRIP  ROYALE</strong></Navbar.Brand>
                </Container>
            </Navbar>
            <Navbar
                style={{
                    backgroundColor: "#F6AD52",
                    color: "#000000", textAlign: "center",
                    display: "inline-block",
                    width: "100%",
                    marginTop: '3.2%',
                    zIndex: '2',
                    position: 'fixed'
                }}>
                <h4>GENERAL</h4>
            </Navbar>

            <Container fluid>
                <div className="row" >
                    <Col sm={2} style={{ backgroundColor: '#FFE193', height: '100vh', position: 'fixed', marginTop: '6.7%' }}>
                        <ListGroup>
                            {groupData.members.map(member => (
                                <ListGroup.Item
                                    key={member.id}
                                    style={{
                                        backgroundColor: "#FFE193",
                                        fontSize: '20px',
                                    }}
                                >
                                    {member.name}
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Col>
                    <Col sm={10}
                        style={{
                            marginTop: '6.4%',
                            padding: '20px',
                            width: '96%'
                        }}>
                        <img src={background} alt="Trip"
                            style={{
                                position: 'fixed',
                                zIndex: '-1',
                                height: '80%',
                                width: '80%'
                            }} />
                        {messages.map((m) => (

                            <div key={m.id} >
                                {username === m.sender ?
                                    (<div className="d-flex mb-3">
                                        <Card
                                            style={{
                                                marginLeft: "60%",
                                                backgroundColor: "#FF900B",
                                                borderColor: "#000000",
                                                width: "40%",
                                                height: "20%",
                                                borderRadius: "20px",
                                                borderTopRightRadius: "0px"
                                            }}>
                                            <Card.Body>
                                                <Card.Title>{m.sender}</Card.Title>
                                                <Card.Text style={{ fontSize: "20px", color: "#FFFFFF" }}>
                                                    {m.text}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>)
                                    :
                                ( <div className="d-flex mb-3">
                                    <Card
                                        style={{
                                            marginLeft: "22%",
                                            backgroundColor: "#FF900B",
                                            borderColor: "#000000",
                                            width: "40%",
                                            height: "20%",
                                            borderRadius: "20px",
                                            borderTopLeftRadius: "0px"
                                        }}>
                                        <Card.Body>
                                            <Card.Title>{m.sender}</Card.Title>
                                            <Card.Text style={{ fontSize: "20px", color: "#FFFFFF" }}>
                                                {m.text}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>

                        )}
                            </div>

                        ))}
                        <div
                            style={{
                                bottom: '-10px',
                                position: 'fixed',
                                width: '95%',
                                zIndex: '2'
                            }}>
                            <Form onSubmit={handleFormSubmit} className="chat-form"
                                style={{
                                    marginLeft: "20%",
                                }}>
                                <div className="d-flex" style={{ width: '100%' }}>
                                    <Form.Group className="mb-3 mr-2 flex-grow-1">
                                        <Form.Control
                                            type="text"
                                            placeholder="Type your message..."
                                            value={input}
                                            onChange={(e) => { setInput(e.target.value) }}
                                            style={{ borderColor: "#000000", borderBottomLeftRadius: "30px", borderTopLeftRadius: "30px" }}
                                        />
                                    </Form.Group>
                                    <Button variant="warning" type="submit" style={{ backgroundColor: "#F6AD52", borderColor: "#000000", height: "38px", borderBottomRightRadius: "30px", borderTopRightRadius: "30px" }}>Send</Button>
                                </div>
                            </Form>
                        </div>
                    </Col>
                </div>
            </Container >
        </div>
    );
};


