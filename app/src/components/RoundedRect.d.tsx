import React from "react";

import Text from "./Text.d";

import main from "../styles/main";
import text from "../styles/text";
import color from "../styles/color";

declare module "react";

const inline = {
    container: {
        backgroundColor: color.dark,
        borderRadius: "30px"
    },
    text: {
        ...text.caps,
        ...text.bold,
        ...text.default,
        ...text.center,
        ...main.padding,
        color: color.white
    }
}

const RoundedRect = ({ children }: { children: any }) => (
    <div style={inline.container}>
        <Text style={inline.text}>{children}</Text>
    </div>
);

export default RoundedRect;