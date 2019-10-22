import React from "react";

import Styles from "../Styles";

import * as font from "../sets/font";
import * as text from "../sets/text";
import * as padding from "../sets/padding";
import * as border from "../sets/border";
import * as variant from "../sets/variant";
import * as dimensions from "../sets/dimensions";

const sets = {
    ...font.sets,
    ...text.sets,
    ...border.sets,
    ...variant.sets,
    ...padding.sets,
    ...variant.sets,
    ...dimensions.sets,
    "no-outline": {
        outline: "none"
    }
}

interface InputProps extends font.props, text.props, padding.props, border.props, variant.props, dimensions.props {
    value?: string,
    defaultValue?: string,
    placeholder?: string,
    onChange?: any,
    type?: string,

    "no-outline"?: boolean
}

const Input = (props: InputProps) => (
    <input
        style={Styles.submit(props).to(sets)}
        value={props.value}
        defaultValue={props.defaultValue}
        placeholder={props.placeholder}
        onChange={props.onChange}
        type={props.type} />
);

export default Input;