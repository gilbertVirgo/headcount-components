import Constants from "../Constants";

export interface props {
    "no-margin"?: boolean,
    margin?: boolean,
    "margin-top"?: boolean,
    "margin-right"?: boolean,
    "margin-bottom"?: boolean,
    "margin-left"?: boolean,
    "margin-auto"?: boolean
}

export const sets = {
    "no-margin": {
        margin: "0"
    },
    margin: {
        margin: Constants.MARGIN
    },
    "margin-top": {
        marginTop: Constants.MARGIN
    },
    "margin-right": {
        marginRight: Constants.MARGIN_SMALL
    },
    "margin-bottom": {
        marginBottom: Constants.MARGIN
    },
    "margin-left": {
        marginLeft: Constants.MARGIN_SMALL
    },
    "margin-auto": {
        marginLeft: "auto",
        marginRight: "auto"
    }
}