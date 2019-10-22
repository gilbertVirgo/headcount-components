import Constants from "../Constants";

export interface props {
    border?: boolean,
    "border-top"?: boolean,
    "border-right"?: boolean,
    "border-bottom"?: boolean,
    "border-left"?: boolean,
    "border-color"?: string,
    "border-radius"?: boolean,
    circle?: boolean
}

export const sets = {
    border: { borderStyle: "solid", borderWidth: Constants.BORDER_WIDTH },
    "border-top": { borderTopStyle: "solid", borderTopWidth: Constants.BORDER_WIDTH },
    "border-right": { borderRightStyle: "solid", borderRightWidth: Constants.BORDER_WIDTH },
    "border-bottom": { borderBottomStyle: "solid", borderBottomWidth: Constants.BORDER_WIDTH },
    "border-left": { borderLeftStyle: "solid", borderLeftWidth: Constants.BORDER_WIDTH },
    "border-color": (borderColor: string) => ({ borderColor }),
    "border-radius": { borderRadius: Constants.BORDER_RADIUS },
    circle: { borderRadius: "50%" }
}