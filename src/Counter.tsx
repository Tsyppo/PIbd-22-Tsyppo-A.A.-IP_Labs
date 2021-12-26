import React from 'react';
import Button from './Button';
import { useState } from 'react'; // Подключаем ссылку на useState.

interface CounterProps {
    start: number;
    step: number;
}

var Counter = (props: CounterProps) => {
    var [count, setCount] = useState<number>(props.start); 
    var handleIncrease = () => {
        setCount(count + props.step);
    };
    return (
        <div>
            <div> Набейте 10000 кликов!</div>
            <div>Значение счётчика: {count}.</div>
            <button onClick={handleIncrease}>Прибавить 5</button>
        </div>
    );
};
export default Counter;