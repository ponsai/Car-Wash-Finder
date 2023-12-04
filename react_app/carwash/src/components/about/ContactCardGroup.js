import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import image1 from './images/contactImage.png';

function ContactCardGroup() {
  return (
    <Card style={{ width: '80rem' }}className="text-center">
        <Card.Title style={{fontSize: '40px', marginTop: '12px' }}>Meet Our Team</Card.Title>
      <Row style={{margin: '10px'}}>
        <Col xs={6} md={3}>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height='180rem' src={image1} />
      <Card.Body>
        <Card.Title>Arjuna Reddy</Card.Title>
        <Card.Text>
        Chief Froth Officer
        </Card.Text>
      </Card.Body>
    </Card>
        </Col>
        <Col xs={6} md={3}>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height='180rem' src={image1} />
      <Card.Body>
        <Card.Title>Blake</Card.Title>
        <Card.Text>
        Chief Sparkle Officer

        </Card.Text>
      </Card.Body>
    </Card>
        </Col>
        <Col xs={6} md={3}>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height='180rem' src={image1} />
      <Card.Body>
        <Card.Title>Huzaifa</Card.Title>
        <Card.Text>
        Chief Humorist
        </Card.Text>
      </Card.Body>

    </Card>
        </Col>
        <Col xs={6} md={3}>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height='180rem' src={image1} />
      <Card.Body>
        <Card.Title>Rodrigo Sosa</Card.Title>
        <Card.Text>
        Chief Bubble Officer
        </Card.Text>
      </Card.Body>

    </Card>
        </Col>
        <Col xs={6} md={3}>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height='180rem' src={image1} />
      <Card.Body>
        <Card.Title>Vasundara Hosahalli Boregowda </Card.Title>
        <Card.Text>
        Chief Bubble Liaison
        </Card.Text>
      </Card.Body>

    </Card>
        </Col>
      </Row>
    </Card>
  );
}

export default ContactCardGroup;