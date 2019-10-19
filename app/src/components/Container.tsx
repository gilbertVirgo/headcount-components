import React from "react";

import View from "./View";

import main from "../styles/main";

const styles = {
    ...main.paddingLarge,
    position: "relative" as const,
    maxWidth: "480px",
    marginLeft: "auto",
    marginRight: "auto",
    boxSizing: "border-box" as const
}

const Container = ({ style, children }: { style: object, children: object }) => (
    <View style={{ ...styles, ...style }}>{children}</View>
);

export default Container;