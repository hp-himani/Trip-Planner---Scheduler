import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import CloseButton from 'react-bootstrap/CloseButton';
import TaskAdd from './TaskAddition.js';

export const DayPlans = (props, {DeleteTask}) => {
  return (
    <Container className="pt-3">
        {props.Plan.map((ev) => {
          return (
            <div key={ev.id} className="d-flex mb-3">
              <Card
                style={{
                  backgroundColor: "#FFE193",
                  width: "35%",
                  marginLeft: "32%",
                  height: "90px"
                }}
              >
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p>
                      {ev.time} | {ev.desc}
                    </p>
                    <footer className="blockquote-footer">{ev.loc}</footer>
                  </blockquote>
                </Card.Body>
              </Card>
              <CloseButton aria-label="Hide"
                style={{height:"90px"}}
                onClick={() => {props.DeleteTask(ev)}}
              >
              </CloseButton>
              
            </div>
          );
        })}
        {/* <TaskAdd/> */}
    </Container>
    
  );
}