import React from "react";

import View from "./View";

import Text from "./Text";

import main from "../styles/main";
import color from "../styles/color";

import Back from "../assets/back.svg";

const height = "75px";

const styles = {
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
        lineHeight: height,
        margin: "0"
    }
}

const Header = ({ title }: { title: string }) => {
    return (
        <section style={styles.master}>
            <View style={styles.container}>
                <img style={styles.back} src={Back} />
                <Text alignCenter weightBold color={color.dark} style={styles.title}>{title}</Text>
            </View>
        </section >
    );
}



export default Header;
