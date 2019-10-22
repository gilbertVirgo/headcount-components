import React from "react";

import View from "../base/View";
import Space from "./Space";

import Button from "../base/Button";
import Image from "../base/Image";

import Close from "../assets/close.svg";

interface ModalProps {
    show: boolean,
    variant?: string,
    onClose: any,
    children: JSX.Element | JSX.Element[]
}

const Modal = (props: ModalProps) => {
    return props.show ? (
        // <Button onClick={props.onClose}>
        <View padding variant="overlay" width="100vw" height="100vh" fixed top="0" left="0">
            <View variant={props.variant || "white"} padding border-radius width="90%" max-width="500px" fixed-center>
                <Space height="30px" />
                <View absolute top="15px" right="15px">
                    <Button onClick={props.onClose}>
                        <Image src={Close} width="15px" />
                    </Button>
                </View>
                {props.children}
            </View>
        </View>
        // </Button>
    ) : null
}

export default Modal;