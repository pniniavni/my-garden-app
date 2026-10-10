function Flower({ flowerCode, flowerName, petalsColor, centerColor }) {
  const petalColor = petalsColor || '#ffb6c1';
  const flowerCenterColor = centerColor || '#4a2c11';

  const cardStyle = {
    backgroundColor: petalColor,
    color: flowerCenterColor,
    padding: '20px',
    margin: '20px auto',
    borderRadius: '15px',
    width: '260px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    fontWeight: 'bold',
    cursor: 'pointer'
  };

  const handleClick = () => {
    alert(`אני פרח מסוג: ${flowerName}`);
  };

  return (
    <div style={cardStyle} onClick={handleClick}>
      <h2>{flowerName}</h2>
      <p>קוד פרח: {flowerCode}</p>
      <p>צבע עלי כותרת: {petalColor}</p>
      <p>צבע מרכז: {flowerCenterColor}</p>
    </div>
  );
}

export default Flower;