import React from "react";

import View from "./View";

import * as Styles from "../styles/styles";

interface GroupProps extends Styles.Options {
    children: JSX.Element | JSX.Element[] | null | undefined
}

const Group = (props: GroupProps) => (
    <View style={Styles.format({ marginBottom: true, ...props })}>{props.children}</View>
)

export default Group;