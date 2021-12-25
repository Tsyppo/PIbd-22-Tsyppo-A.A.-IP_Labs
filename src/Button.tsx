import React from 'react';

interface ButtonProps {
    text: string;
    onClick: () => any; // TODO: Что это за пропс?
}

var Button = (props: ButtonProps) => {
    return (
        <button onClick={props.onClick}>{props.text}</button>
    );
};
export default Button;