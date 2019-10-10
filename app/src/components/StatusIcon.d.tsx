import React from "react";

import Text from "./Text.d";
import Group from "./Group.d";
import Image from "./Image.d";

import text from "../styles/text";

declare module "react";

const inline = {
    icon: {
        marginLeft: "auto",
        marginRight: "auto",
        height: "75px",
        display: "block"
    },
    title: {
        ...text.default,
        ...text.center,
        ...text.bold
    },
    text: {
        ...text.default,
        ...text.center,
        ...text.small
    }
}

const StatusIcon = ({ icon, title, children }: { icon: any, title?: string, children?: any }) => (
    <Group>
        <Image style={inline.icon} source={icon} />
        <Text style={inline.title}>{title}</Text>
        <Text style={inline.text}>{children}</Text>
    </Group>
);

export default StatusIcon;