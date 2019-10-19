import React from "react";

import text from "../styles/text";
import color from "../styles/color";

const styles = {
    ...text.default,
    color: color.muted,
    margin: "5px 0"
}

const Label = ({ children }: { children: JSX.Element | JSX.Element[] | string }) => (
    <p style={styles}>{children}</p>
)

export default Label;