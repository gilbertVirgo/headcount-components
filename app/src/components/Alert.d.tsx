import React, { useState } from "react";
import Image from "./Image.d";
import Button from "./Button.d";
import Text from "./Text.d";

import Close from "../assets/close.svg";

import main from "../styles/main";
import text from "../styles/text";

declare module "react";

const inline = {
    container: ({ show, backgroundColor }: { show: boolean, backgroundColor: string }) => ({
        ...main.padding,
        backgroundColor: backgroundColor ? backgroundColor + "40" : "transparent", // alpha approx. 0.5
        border: `2px solid ${backgroundColor}`,
        display: show ? "flex" : "none"
    }),
    closeContainer: {
        display: "inline-block",
        verticalAlign: "middle" as const,
        textAlign: "center" as const,
        flex: 1
    },
    textContainer: {
        display: "inline-block",
        verticalAlign: "middle" as const,
        flex: 9
    },
    close: {
        width: "15px",
        verticalAlign: "middle" as const
    },
}

const Alert = ({ dismissible, variant: { backgroundColor, color }, children }: { dismissible: boolean, variant: { backgroundColor: string, color: string }, children: any }) => {
    const [show, setShow] = useState(true);

    return (
        <div style={inline.container({ show, backgroundColor })}>
            {dismissible && (
                <Button style={inline.closeContainer} onClick={() => setShow(false)}>
                    <Image source={Close} style={inline.close} />
                </Button>
            )}

            <div style={inline.textContainer}>
                <Text style={{ ...text.default, ...text.small, color, margin: "0" }}>
                    {children}
                </Text>
            </div>
        </div>
    )
}

export default Alert;