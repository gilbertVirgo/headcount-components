import React, { useState } from "react";

import Show from "../assets/show.svg";
import Hide from "../assets/hide.svg";

import Input from "../base/Input";
import View from "../base/View";
import Image from "../base/Image";
import Button from "../base/Button";

interface TextInputProps {
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
        <View relative>
            {props.password && (
                <Button onClick={() => setShow(!show)}>
                    <View absolute top="-25px" right="0">
                        <Image height="15px" src={show ? Show : Hide} />
                    </View>
                </Button>
            )}
            <Input
                medium
                padding
                border
                variant={props.invalid ? "danger-outline" : "white"}
                border-radius
                width="100%"
                no-outline
                sans-serif
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