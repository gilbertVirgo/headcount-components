import React from "react";

import Styles from "../Styles";

import * as text from "../sets/text";
import * as align from "../sets/align";
import * as margin from "../sets/margin";

const sets = {
    ...text.sets,
    ...align.sets,
    ...margin.sets
}

interface TextProps extends text.props, align.props, margin.props {
    children?: string
}

const defaults = {
    "sans-serif": true,
    medium: true,
    "no-margin": true
}

const Text = (props: TextProps) => (
    <p style={Styles.submit(props, defaults).to(sets)}>
        {props.children}
    </p>
);

export default Text;