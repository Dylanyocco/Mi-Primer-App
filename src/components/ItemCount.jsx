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
            <span onClick={handleDecreaseCount}>-</span>
            <span>{count}</span>
            <span onClick={handleIncreaseCount}>+</span>
            <button>Agregar al carrito</button>
        </div>
    );
};