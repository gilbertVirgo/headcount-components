import React from "react";
import * as Styles from "../styles/styles";

interface ViewProps extends Styles.Options {
    children?: any,
    onClick?: any,
    ref?: any,
    style?: object
}

const View = React.forwardRef((props: ViewProps, forwardedRef: any) => (
    <div
        style={Styles.format(props)}
        onClick={props.onClick}
        ref={forwardedRef}>
        {props.children}
    </div>
));

export default View;