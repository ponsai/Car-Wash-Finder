import Card from 'react-bootstrap/Card';

function PlainCard() {
  return (
    <Card style={{ width: '60rem' }}className="text-center">
      <Card.Body>
        <Card.Title style={{fontSize: '40px' }}>Our Mission</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default PlainCard;