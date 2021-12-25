import React from 'react';
import Button from './Button';
import { useState } from 'react'; // Подключаем ссылку на useState.

interface CounterProps {
    start: number;
    step: number;
}

var Counter = (props: CounterProps) => {
    var [count, setCount] = useState(0); // И используем. Значение по умолчанию - 0.
    var handleIncrease = () => {
        setCount(count + props.step);
    };
    return (
        <div>
            <div> Набейте {props.start} кликов!</div>
            <div>Значение счётчика: {count}.</div>
            <button onClick={handleIncrease}>Прибавить 5</button>
        </div>
    );
};
export default Counter;