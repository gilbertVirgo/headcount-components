import React from "react";

import View from "../base/View";

interface GroupProps {
    children: JSX.Element | JSX.Element[]
}

const Group = (props: GroupProps) => (
    <View margin-bottom>{props.children}</View>
)

export default Group;