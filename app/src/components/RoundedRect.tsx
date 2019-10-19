import React from "react";

import Text from "./Text";
import View from "./View";

import main from "../styles/main";
import text from "../styles/text";
import color from "../styles/color";

import * as Styles from "../styles/styles";

// const styles = {
//     container: {
//         backgroundColor: color.dark,
//         borderRadius: "30px"
//     },
//     text: {
//         ...text.caps,
//         ...text.default,
//         ...main.padding,
//     }
// }

interface RoundedRectProps extends Styles.Options {
    noRadius?: boolean,
    children: JSX.Element | JSX.Element[]
}

const RoundedRect = (props: RoundedRectProps) => (
    <View dark weightBold alignCenter padding caps style={{
        borderRadius: props.noRadius ? "0" : "30px",
        ...Styles.format(props)
    }}>{props.children}</View>
);

// RoundedRect.Text = ({ children }: { children: string }) => (
//     <Text weightBold alignCenter color={color.white} style={styles.text}>{children}</Text>
// );

export default RoundedRect;