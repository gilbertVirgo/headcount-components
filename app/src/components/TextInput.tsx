import React, { useState } from "react";

import Show from "../assets/show.svg";
import Hide from "../assets/hide.svg";

import color from "../styles/color";

import View from "./View";

import * as Styles from "../styles/styles";
import Input from "./Input";

const styles = {
    container: {
        position: "relative" as const
    },
    toggle: {
        position: "absolute" as const,
        top: "-25px", right: "0",
        height: "15px"
    }
}

interface TextInputProps extends Styles.Options {
    value?: string,
    onChange?: any,
    defaultValue?: string,
    style?: object,
    placeholder?: string,
    password?: boolean,
    invalid?: boolean
}

const TextInput = (props: TextInputProps) => {
    const [show, setShow] = useState(!props.password);

    if (props.invalid === null) props.invalid = false;

    return (
        <View style={styles.container}>
            {props.password && <img style={styles.toggle} src={show ? Show : Hide} onClick={() => setShow(!show)} />}
            <Input
                textMedium
                padding
                border
                borderColor={props.invalid ? color.danger : color.light}
                borderRadius
                fullWidth
                noOutline
                sansSerif
                type={show ? "text" : "password"}
                value={props.value}
                onChange={props.onChange}
                defaultValue={props.defaultValue}
                placeholder={props.placeholder}
            />
        </View>
    );
}

export default TextInput;