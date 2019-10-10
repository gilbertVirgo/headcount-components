import React from "react";

declare module "react";

const TextInput = ({ value, style, placeholder, type }: { value: string, style?: object, placeholder?: string, type?: string }) => {
    return <input
        defaultValue={value}
        placeholder={placeholder}
        style={style}
        type={type} />
}

export default TextInput;