import Constants from "../Constants";

export interface props {
    padding?: boolean,
    "padding-top"?: boolean,
    "padding-right"?: boolean,
    "padding-bottom"?: boolean,
    "padding-left"?: boolean
}

export const sets = {
    padding: {
        padding: Constants.PADDING,
        boxSizing: "border-box"
    },
    "padding-top": {
        paddingTop: Constants.PADDING,
        boxSizing: "border-box"
    },
    "padding-right": {
        paddingRight: Constants.PADDING_SMALL,
        boxSizing: "border-box"
    },
    "padding-bottom": {
        paddingBottom: Constants.PADDING,
        boxSizing: "border-box"
    },
    "padding-left": {
        paddingLeft: Constants.PADDING_SMALL,
        boxSizing: "border-box"
    }
}