import { useState } from "react";

export const ItemCount = () => {
    const [count, setCount] = useState(1);
    const handleIncreaseCount = () => {
        if (true){
            setCount((prev) =>prev +1);
        }
    };
    const handleDecreaseCount = () => {
        if (count > 1){
            setCount((prev) =>prev -1);
            }
    };

    return(
        <div className="ItemCount">
            <div className="contador">
            <span onClick={handleDecreaseCount}>-</span>
            <span>{count}</span>
            <span onClick={handleIncreaseCount}>+</span>
            </div>
            <button className="boton-agregar">Agregar al carrito</button>
        </div>
    );
};