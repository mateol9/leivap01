import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Counter from './components/Counter/Counter';

function App() {
  
  const handleOnAdd = (quantity) => {
    console.log(`Cantidad Agregada: ${quantity}`);
  }

  return (
    <div>
      <Navbar />
      <ItemListContainer label='Bienvenido'/>
      <Counter stock={15} onAdd={handleOnAdd}/>
    </div>
  );
}

export default App;
