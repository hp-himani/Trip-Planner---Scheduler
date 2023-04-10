import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

export const DayPlans=(props) => {
  return (
      props.Plan.map((ev)=>
      {
        return(
            <Container className="pt-3">
            <Col>
                <Card style = {{backgroundColor:"#FFE193", width: "50%", marginLeft:"25%"}}>
                <Card.Body>        
                <blockquote className="blockquote mb-0">
                    <p>{ev.time} | {ev.desc}</p>
                    <footer className="blockquote-footer">{ev.loc}</footer>
                </blockquote>
                </Card.Body>
                </Card>
            </Col>
            </Container>
        )
    }
    )
  );
}