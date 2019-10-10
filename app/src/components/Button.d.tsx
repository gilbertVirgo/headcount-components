import React from "react";

declare module "react";

const Button = ({ style, children, onClick }: { children: any, style?: object, onClick: any }) => (
    <div style={style} onClick={onClick}>{children}</div>
);

export default Button;