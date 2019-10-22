import React from "react";

interface ButtonProps {
    onClick?: any,
    children?: JSX.Element | JSX.Element[]
}

const Button = (props: ButtonProps) => (
    <div onClick={props.onClick}>{props.children}</div>
);

export default Button;