import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer label='Bienvenido'/>
    </div>
  );
}

export default App;
