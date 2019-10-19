import React from "react";

import View from "./View";

import * as Styles from "../styles/styles";

interface ButtonProps extends Styles.Options {
    onClick?: any,
    children?: JSX.Element | JSX.Element[]
}

const Button = (props: ButtonProps) => (
    <View style={Styles.format(props)} onClick={props.onClick}>{props.children}</View>
);

export default Button;