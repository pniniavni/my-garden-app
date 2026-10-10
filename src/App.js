import Header from './components/Header/Header';
import Flower from './components/Flower/Flower';
import './App.css';
const flowers = [
  { id: 1, flowerName: "כלנית", petalsColor: "#ff4d4d", centerColor: "#1a1a1a" },
  { id: 2, flowerName: "חרצית", petalsColor: "#ffeb3b", centerColor: "#4a2c11" },
  { id: 3, flowerName: "אירוס", petalsColor: "#7b1fa2", centerColor: "#2e0854" },
  { id: 4, flowerName: "סביון", petalsColor: "#4caf50", centerColor: "#6ae754" }

];

function App() {
  return (
    <div className="App">
      <Header />
{flowers.map((flower) => (
        <Flower 
          key={flower.id}
          flowerCode={`F00${flower.id}`}
          flowerName={flower.flowerName}
          petalsColor={flower.petalsColor}
          centerColor={flower.centerColor}
        />
      ))}
      <Flower 
        flowerCode="F001"
        flowerName="כלנית" 
        petalsColor="#ff4d4d" 
        centerColor="#1a1a1a" 
      />
      <Flower 
        flowerCode="F002"
        flowerName="חרצית" 
        petalsColor="#ffeb3b" 
        centerColor="#bf3838" 
      />
      <Flower 
        flowerCode="F003"
        flowerName="אירוס" 
        petalsColor="#ff4d4d" 
        centerColor="#7b32c5" 
      />
      <Flower 
        flowerCode="F004"
        flowerName="סביון" 
        petalsColor="#4caf50" 
        centerColor="#6ae754" 
      />
    </div>
  );
}

export default App;