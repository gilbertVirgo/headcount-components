import React from "react";

declare module "react";

const Text = ({ style, children }: { style?: object, children: any }) => (
    <p style={style}>{children}</p>
);

export default Text;