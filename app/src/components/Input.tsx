import React from "react";

import * as Styles from "../styles/styles";

interface InputProps extends Styles.Options {
    value?: string,
    defaultValue?: string,
    placeholder?: string,
    onChange?: any,
    type?: string
}

const Input = (props: InputProps) => (
    <input
        style={Styles.format(props)}
        value={props.value}
        defaultValue={props.defaultValue}
        placeholder={props.placeholder}
        onChange={props.onChange}
        type={props.type} />
);

export default Input;