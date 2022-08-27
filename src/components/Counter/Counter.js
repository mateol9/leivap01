import { useState } from "react";
import './Counter.css'

const Counter = ({ stock = 0, onAdd, initial = 1 }) => {
  const [count, setCount] = useState(initial);

  const countUp = () => count < stock ? setCount(count + 1) : null;

  const countDown = () => count > 1 ? setCount(count - 1) : null;

  return (
    <div className="counterContainer">
      {stock === 0 ?
        <p>Producto actualmente fuera de Stock</p> :
        <div>
          <p className="countSpan">{count}</p>
          <div className="buttonContainer">
            <button className="counterBtn" onClick={countDown}>-</button>
            <button className="counterBtn" onClick={() => onAdd(count)}>Agregar al carrito</button>
            <button className="counterBtn" onClick={countUp}>+</button>
          </div>
        </div>}

    </div>
  );
}

export default Counter;
