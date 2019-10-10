import React from "react";

import main from "../styles/main";

declare module "react";

const inline = {
    ...main.paddingLarge,
    position: "relative" as const,
    maxWidth: "480px",
    marginLeft: "auto",
    marginRight: "auto",
    boxSizing: "border-box" as const
}

const Container = ({ style, children }: { style: object, children: object }) => (
    <div style={{ ...inline, ...style }}>{children}</div>
);

export default Container;