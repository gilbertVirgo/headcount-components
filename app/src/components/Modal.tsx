import React from "react";

import View from "./View";

import Close from "../assets/close.svg";

import main from '../styles/main';
import color from "../styles/color";

import Button from "./Button";
import Image from "./Image";

const styles = {
    overlay: (show: boolean) => ({
        ...main.paddingLarge,
        display: show ? "block" : "none",
        backgroundColor: "#00000040",
        width: "100vw", height: "100vh",
        position: "fixed" as const,
        top: "0", left: "0",
    }),
    container: (backgroundColor: string) => ({
        ...main.paddingLarge,
        ...main.borderRadius,
        ...main.shadow,
        backgroundColor,
        width: "100%", maxWidth: "500px",
        position: "relative" as const,
        left: "50%", top: "50%",
        transform: "translate(-50%, -50%)",
    }),
    closeButton: {
        overflow: "auto",
        clear: "both"
    },
    close: {
        width: "15px",
        float: "right"
    }
}

interface ModalProps {
    show: boolean,
    variant: {
        backgroundColor: string,
        color: string
    },
    onClose: any,
    children: JSX.Element | JSX.Element[] | string
}

const Modal = ({ show, variant: { backgroundColor, color }, onClose, children }: ModalProps) => {
    return (
        <View style={styles.overlay(show)} onClick={onClose}>
            <View style={styles.container(backgroundColor)}>
                <Button style={styles.closeButton} onClick={onClose}>
                    <Image src={Close} style={styles.close} />
                </Button>
                {children}
            </View>
        </View>
    )
}

export default Modal;