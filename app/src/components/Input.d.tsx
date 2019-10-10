import React, { useState } from "react";

import TextInput from "./TextInput.d";
import Show from "../assets/show.svg";
import Hide from "../assets/hide.svg";

import main from "../styles/main";
import text from "../styles/text";
import color from "../styles/color";

declare module "react";

const inline = {
    container: {
        position: "relative" as const
    },
    toggle: {
        position: "absolute" as const,
        top: "-25px", right: "0",
        height: "15px"
    },
    input: (invalid: boolean) => ({
        ...text.default,
        ...main.borderRadius,
        ...main.padding,
        width: "100%",
        border: `1.5px solid ${invalid ? color.danger : color.light}`,
        outline: "none"
    })
}

interface InputProps {
    value: string,
    style?: object,
    placeholder?: string,
    password?: boolean,
    invalid?: boolean
}

const Input = ({ value, style, placeholder, password, invalid = false }: InputProps) => {
    const [show, setShow] = useState(!password);

    return (
        <div style={inline.container}>
            {password && <img style={inline.toggle} src={show ? Show : Hide} onClick={() => setShow(!show)} />}
            <TextInput
                type={show ? "text" : "password"}
                value={value}
                placeholder={placeholder}
                style={{ ...inline.input(invalid), ...style }} />
        </div>
    );
}

export default Input;