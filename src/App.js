import Header from './components/Header/Header';
import Flower from './components/Flower/Flower';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      {/* שליחת המאפיינים לקומפוננטה */}
      <Flower 
        flowerName="כלנית" 
        petalsColor="#ff4d4d" 
        centerColor="#1a1a1a" 
      />
      <Flower 
        flowerName="חרצית" 
        petalsColor="#ffeb3b" 
      />
      <Flower 
        flowerName="אירוס" 
        centerColor="#2e0854" 
      />
      <Flower 
        flowerName="סביון" 
      />
    </div>
  );
}

export default App;