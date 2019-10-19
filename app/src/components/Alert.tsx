import React, { useState } from "react";
import Button from "./Button";
import View from "./View";
import Image from "./Image";

import * as Styles from "../styles/styles";

import Close from "../assets/close.svg";

import main from "../styles/main";
import text from "../styles/text";

const styles = {
    container: ({ show, backgroundColor }: { show: boolean, backgroundColor: string }) => ({
        backgroundColor: backgroundColor ? backgroundColor + "40" : "transparent", // alpha approx. 0.5
        border: `2px solid ${backgroundColor}`,
        display: show ? "flex" : "none"
    }),
    closeContainer: {
        verticalAlign: "middle" as const,
        textAlign: "center" as const,
        flex: 1
    },
    textContainer: {
        verticalAlign: "middle" as const,
        flex: 9
    },
    close: {
        width: "15px",
        verticalAlign: "middle" as const
    },
}

const Alert = ({ dismissible, variant: { backgroundColor, color }, children }: { dismissible: boolean, variant: { backgroundColor: string, color: string }, children: JSX.Element | JSX.Element[] | string }) => {
    const [show, setShow] = useState(true);

    return (
        <View padding style={styles.container({ show, backgroundColor })}>
            {dismissible && (
                <Button style={styles.closeContainer} onClick={() => setShow(false)}>
                    <Image src={Close} style={styles.close} />
                </Button>
            )}

            <View flex={9} style={styles.textContainer}>
                {children}
            </View>
        </View>
    )
}

export default Alert;