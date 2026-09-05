
   function Flower({ flowerName, petalsColor, centerColor }) {

  const flowerCardStyle = {
    backgroundColor: petalsColor, // צבע הרקע לפי צבע עלי הכותרת
    color: centerColor,           // צבע הכתב לפי צבע המרכז
    padding: '20px',
    margin: '20px auto',
    borderRadius: '15px',
    width: '260px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    fontWeight: 'bold',
    cursor: 'pointer'
  };
const handleFlowerClick = () => {
    alert(`אני פרח מסוג: ${flowerName}`);
  }
  return (
    <div style={flowerCardStyle} onClick={handleFlowerClick}>
      <h2>{flowerName}</h2>
      <p>צבע עלי כותרת: {petalsColor}</p>
      <p>צבע מרכז: {centerColor}</p>
    </div>
  );
}

export default Flower;