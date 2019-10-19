import React from "react";

import main from "../styles/main";
import border from "../styles/border";
import color from "../styles/color";

import * as Styles from "../styles/styles";
import View from "./View";

const imageWidth = "70px";

const styles = {
    container: {
        ...main.borderRadius,
        ...main.padding
    },
    header: {
        ...border.thin,
        ...main.padding,
        borderColor: color.light,
        display: "flex",
        flexDirection: "row" as const,
        alignItems: "center"
    },
    imageContainer: {
        flex: "1",
        textAlign: "center" as const,
        marginRight: "15px"
    },
    image: {
        width: imageWidth,
        height: imageWidth,
        borderRadius: imageWidth,
        display: "block"
    },
    infoContainer: {
        flex: "3"
    }
}

// Just realised that if this is actually going to be useful, I'm going to need to have
// some sort of a `View` component instead of `View`s because you won't be able to use 
// these options on `View`s or any base level HTML element. 

interface ComboProps extends Styles.Options { children: JSX.Element | JSX.Element[] }
const Combo = (props: ComboProps) => (
    <View style={{ ...Styles.format(props), ...styles.container }}>
        {props.children}
    </View>
)

interface HeaderProps extends Styles.Options { children: JSX.Element | JSX.Element[] }
Combo.Header = (props: HeaderProps) => (
    <View style={{ ...Styles.format(props), ...styles.header }}>{props.children}</View>
)

interface ImageProps extends Styles.Options { src: string }
Combo.Image = (props: ImageProps) => (
    <View style={styles.imageContainer}>
        <img style={{ ...Styles.format(props), ...styles.image }} src={props.src} />
    </View>
);

interface InfoProps extends Styles.Options { children: JSX.Element | JSX.Element[] | string }
Combo.Info = (props: InfoProps) => (
    <View style={{ ...Styles.format(props), ...styles.infoContainer }}>{props.children}</View>
);

interface BodyProps extends Styles.Options { children: JSX.Element | JSX.Element[] }
Combo.Body = (props: BodyProps) => (
    <View style={Styles.format(props)}>{props.children}</View>
)

export default Combo;