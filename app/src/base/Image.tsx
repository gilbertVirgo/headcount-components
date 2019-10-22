import React from "react";

import Styles from "../Styles";

import * as dimensions from "../sets/dimensions";
import * as display from "../sets/display";
import * as border from "../sets/border";
import * as margin from "../sets/margin";

const sets = {
    ...dimensions.sets,
    ...display.sets,
    ...border.sets,
    ...margin.sets
}

interface ImageProps extends dimensions.props, display.props, border.props, margin.props {
    src: string
}

const Image = (props: ImageProps) => (
    <img
        src={props.src}
        style={Styles.submit(props).to(sets)} />
);

export default Image;