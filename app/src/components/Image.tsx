import React from "react";

import * as Styles from "../styles/styles";

interface ImageProps extends Styles.Options {
    src: string | JSX.Element,
    style?: object
}

const Image = ({ src, style }: { src: any, style?: object }) => (
    <img src={src} style={style} />
);

export default Image;