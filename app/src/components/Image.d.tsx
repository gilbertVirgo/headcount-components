import React from "react";

declare module "react";

const Image = ({ source, style }: { source: any, style?: object }) => (
    <img src={source} style={style} />
);

export default Image;