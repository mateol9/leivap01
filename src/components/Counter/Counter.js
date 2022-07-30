import { useState } from "react";
import './Counter.css'

const Counter = ({stock, onAdd}) => {
    const [count, setCount] = useState(1);

    const countUp = () => count < stock ? setCount(count + 1) : null;

    const countDown = () => count > 1 ? setCount(count - 1) : null;

    return(
        <div className="counterContainer">
            <p className="countSpan">{count}</p>
            <div className="buttonContainer">
                <button className="counterBtn" onClick={countDown}>-</button>
                <button className="counterBtn" onClick={() => onAdd(count)}>Agregar al carrito</button>
                <button className="counterBtn" onClick={countUp}>+</button>
            </div>
        </div>
    );
}

export default Counter;
