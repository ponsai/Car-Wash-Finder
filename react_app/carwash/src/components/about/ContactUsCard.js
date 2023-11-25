import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function ContactUsCard() {
  return (
    <Card style={{ width: '50rem'}}>
        <Card.Title style={{marginTop: '20px', fontSize: '40px'}}>Contact Us</Card.Title>
        <Card.Body>
        <Form>
        <Form.Group className="mb-3" controlId="formGroupName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupText">
        <Form.Label>Email Message</Form.Label>
        <Form.Control type="text" placeholder="Email Body" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupSubject">
        <Form.Label>Subject</Form.Label>
        <Form.Control type="password" placeholder="Subject" />
      </Form.Group>
    </Form>
        </Card.Body>
        <Card.Footer>
        <Button variant="primary">Send</Button>
        </Card.Footer>
    </Card>
  );
}

export default ContactUsCard;