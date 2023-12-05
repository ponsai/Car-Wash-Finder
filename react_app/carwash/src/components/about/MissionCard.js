import Card from 'react-bootstrap/Card';

function PlainCard() {
  return (
    <Card style={{ width: '60rem' }}className="text-center">
      <Card.Body>
        <Card.Title style={{fontSize: '40px' }}>Our Mission</Card.Title>
        <Card.Text>
        Are you sick and weary of looking for a car wash that doesn't handle your car like it's trying to go on a spa every single day? You've found the most inventive and bubbly car wash finder on the internet, so stop looking elsewhere!
Finding the ideal car wash can be serious, but at Bubbles and Brilliance, we take the seriousness out of it and add a dash of humor as bubbly as our foam weapons. We're more than simply a website; we're your neighborhood companion in your search for the most dazzling vehicle.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default PlainCard;