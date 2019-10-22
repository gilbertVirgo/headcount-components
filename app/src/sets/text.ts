import Constants from "../Constants";

export interface props {
    "sans-serif"?: boolean,
    serif?: boolean,
    color?: string,
    small?: boolean,
    medium?: boolean,
    large?: boolean,
    light?: boolean,
    bold?: boolean,
    "line-height"?: string,
    caps?: boolean
}

export const sets = {
    "sans-serif": { fontFamily: Constants.FONT_SANS_SERIF },
    serif: { fontFamily: Constants.FONT_SERIF },
    color: (color: string) => ({ color }),
    small: { fontSize: Constants.FONT_SMALL },
    medium: { fontSize: Constants.FONT_MEDIUM },
    large: { fontSize: Constants.FONT_LARGE },
    light: { fontWeight: Constants.FONT_LIGHT },
    bold: { fontWeight: Constants.FONT_BOLD },
    "line-height": (lineHeight: string) => ({ lineHeight }),
    caps: { textTransform: "uppercase" }
}