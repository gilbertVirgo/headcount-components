import React from "react";

import Text from "./Text.d";

import text from "../styles/text";
import color from "../styles/color";

declare module "react";

const inline = {
    ...text.default,
    color: color.muted,
    margin: "5px 0"
}

const Label = ({ children }: { children: any }) => (
    <Text style={inline}>{children}</Text>
)

export default Label;