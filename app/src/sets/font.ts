import Constants from "../Constants";

export interface props {
    "sans-serif"?: boolean,
    serif?: boolean
}

export const sets = {
    "sans-serif": { fontFamliy: Constants.FONT_SANS_SERIF },
    serif: { fontFamliy: Constants.FONT_SERIF }
}