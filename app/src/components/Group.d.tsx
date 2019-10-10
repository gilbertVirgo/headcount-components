import React from "react";

declare module "react";

const inline = {
    marginBottom: "15px"
}

const Group = ({ style, children }: { style?: object, children: any }) => (
    <div style={{ ...style, ...inline }}>{children}</div>
)

export default Group;