import React from "react";

import Styles from "../Styles";

import * as align from "../sets/align";
import * as variant from "../sets/variant";
import * as hide from "../sets/hide";
import * as margin from "../sets/margin";
import * as padding from "../sets/padding";
import * as display from "../sets/display";
import * as position from "../sets/position";
import * as dimensions from "../sets/dimensions";
import * as border from "../sets/border";
import * as flex from "../sets/flex";
import * as overflow from "../sets/overflow";

const sets = {
    ...align.sets,
    ...variant.sets,
    ...margin.sets,
    ...padding.sets,
    ...display.sets,
    ...position.sets,
    ...dimensions.sets,
    ...flex.sets,
    ...border.sets,
    ...overflow.sets,
    zIndex: (zIndex: number) => ({ zIndex }),
    transform: (transform: string) => ({ transform }),
    ...hide.sets
}

interface ViewProps extends align.props, variant.props, margin.props, padding.props, display.props, position.props, flex.props, border.props, hide.props, overflow.props {
    children?: JSX.Element | JSX.Element[],
    ref?: any,

    zIndex?: number,
    transform?: string,
    borderRadius?: boolean
}

const View = React.forwardRef((props: ViewProps, ref: any) => (
    <div
        style={Styles.submit(props).to(sets)}
        ref={ref}>
        {props.children}
    </div>
));

export default View;