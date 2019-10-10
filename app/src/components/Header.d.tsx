import React from "react";

import Text from "./Text.d";
import Image from "./Image.d";

import main from "../styles/main";
import text from "../styles/text";
import color from "../styles/color";

import Back from "../assets/back.svg";

declare module "react";

const height = "75px";

const inline = {
    master: {
        position: "relative" as const,
        height,
        zIndex: 1000
    },
    container: {
        ...main.gradient,
        width: "100%",
        height,
        position: "fixed" as const,
        top: "0", left: "0",
    },
    back: {
        position: "absolute" as const,
        height: "15px",
        top: "30px", left: "30px"
    },
    title: {
        ...text.default,
        ...text.bold,
        ...text.center,
        color: color.dark,
        lineHeight: height,
        margin: "0"
    }
}

const Header = ({ title }: { title: string }) => {
    return (
        <section style={inline.master}>
            <div style={inline.container}>
                <Image style={inline.back} source={Back} />
                <Text style={inline.title}>{title}</Text>
            </div>
        </section >
    );
}



export default Header;
