import React from "react";

import Styles from "../Styles";
import Constants from "../Constants";

const sets = {
    sansSerif: { fontFamily: Constants.FONT_SANS_SERIF },
    serif: { fontFamily: Constants.FONT_SERIF },
    margin: { marginBottom: Constants.MARGIN },
    center: { textAlign: "center" },
    color: (color: string) => ({ color }),
    small: { fontSize: Constants.FONT_SMALL },
    large: { fontSize: Constants.FONT_LARGE },
    light: { fontWeight: Constants.FONT_LIGHT },
    bold: { fontWeight: Constants.FONT_BOLD }
}

interface TextProps {
    children?: string,
    sansSerif?: boolean,
    serif?: boolean,
    margin?: boolean,
    center?: boolean,
    color?: string,
    small?: boolean,
    large?: boolean,
    light?: boolean,
    bold?: boolean
}

const Text = (props: TextProps) => (
    <p style={Styles.submit(props).to(sets)}>
        {props.children}
    </p >
);

export default Text;