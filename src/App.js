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
    </div>
  );
}

export default App;