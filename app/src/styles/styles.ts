import Color from "./color";
import _ from "lodash";

export const Constants = {
    MARGIN: "15px",
    PADDING: "15px",
    BORDER_RADIUS: "15px",
    FONT_SMALL: "14px",
    FONT_MEDIUM: "18px",
    FONT_LARGE: "24px",
    FONT_LIGHT: 200,
    FONT_NORMAL: 400,
    FONT_BOLD: 600,
    FONT_SANS_SERIF: "'Source Sans Pro', Helvetica, sans-serif",
    FONT_SERIF: "'Merriweather', Times, serif"
}

export interface Options {

}

export interface Options_ {
    sansSerif?: boolean,
    serif?: boolean,
    color?: string,
    dark?: boolean,
    light?: boolean,
    danger?: boolean,
    success?: boolean,
    white?: boolean,
    overlay?: boolean,
    noMargin?: boolean,
    marginLeft?: boolean,
    marginRight?: boolean,
    marginTop?: boolean,
    marginBottom?: boolean,
    padding?: boolean,
    paddingLeft?: boolean,
    paddingRight?: boolean,
    paddingTop?: boolean,
    paddingBottom?: boolean,
    border?: boolean,
    borderColor?: string,
    borderRadius?: boolean,
    textSmall?: boolean,
    textMedium?: boolean,
    textLarge?: boolean,
    weightLight?: boolean,
    weightNormal?: boolean,
    weightBold?: boolean,
    alignLeft?: boolean,
    alignCenter?: boolean,
    alignRight?: boolean,
    alignTop?: boolean,
    alignMiddle?: boolean,
    alignBottom?: boolean,
    inline?: boolean,
    block?: boolean,
    flex?: number,
    flexRow?: boolean,
    flexColumn?: boolean,
    fullWidth?: boolean,
    noOutline?: boolean,
    caps?: boolean,

    style?: object
}

export const format = ({
    sansSerif,
    serif,
    dark,
    light,
    danger,
    success,
    white,
    overlay,
    color,
    noMargin,
    marginLeft,
    marginRight,
    marginTop,
    marginBottom,
    padding,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingBottom,
    border,
    borderColor,
    borderRadius,
    textSmall,
    textMedium,
    textLarge,
    weightLight,
    weightNormal,
    weightBold,
    alignLeft,
    alignCenter,
    alignRight,
    alignTop,
    alignMiddle,
    alignBottom,
    inline,
    block,
    flex,
    flexRow,
    flexColumn,
    fullWidth,
    noOutline,
    caps,

    style
}: Options): object => {
    let composite = {
        boxSizing: "border-box", // always need this
        ...style
    };

    if (sansSerif) _.assign(composite, { fontFamily: Constants.FONT_SANS_SERIF });
    if (serif) _.assign(composite, { fontFamily: Constants.FONT_SERIF });
    if (dark) _.assign(composite, {
        backgroundColor: Color.dark,
        borderColor: Color.white,
        color: Color.white
    });
    if (light) _.assign(composite, {
        backgroundColor: Color.light,
        borderColor: Color.dark,
        color: Color.dark
    });
    if (danger) _.assign(composite, {
        backgroundColor: Color.danger,
        borderColor: Color.dark,
        color: Color.dark
    });
    if (success) _.assign(composite, {
        backgroundColor: Color.success,
        borderColor: Color.dark,
        color: Color.dark
    });
    if (white) _.assign(composite, {
        ...composite,
        backgroundColor: Color.white,
        borderColor: Color.light,
        color: Color.dark
    });
    if (overlay) _.assign(composite, { backgroundColor: Color.dark + "40" })
    if (color) _.assign(composite, { color });
    if (noMargin) _.assign(composite, { margin: "0" });
    if (marginLeft) _.assign(composite, { marginLeft: Constants.MARGIN });
    if (marginRight) _.assign(composite, { marginRight: Constants.MARGIN });
    if (marginTop) _.assign(composite, { marginTop: Constants.MARGIN });
    if (marginBottom) _.assign(composite, { marginBottom: Constants.MARGIN });
    if (padding) _.assign(composite, { padding: Constants.PADDING });
    if (paddingLeft) _.assign(composite, { paddingLeft: Constants.PADDING });
    if (paddingRight) _.assign(composite, { paddingRight: Constants.PADDING });
    if (paddingTop) _.assign(composite, { paddingTop: Constants.PADDING });
    if (paddingBottom) _.assign(composite, { paddingBottom: Constants.PADDING });
    if (border) _.assign(composite, { borderStyle: "solid" });
    if (borderColor) _.assign(composite, { borderColor });
    if (borderRadius) _.assign(composite, { borderRadius: Constants.BORDER_RADIUS });
    if (textSmall) _.assign(composite, { fontSize: Constants.FONT_SMALL });
    if (textMedium) _.assign(composite, { fontSize: Constants.FONT_MEDIUM });
    if (textLarge) _.assign(composite, { fontSize: Constants.FONT_LARGE });
    if (weightLight) _.assign(composite, { fontWeight: Constants.FONT_LIGHT });
    if (weightNormal) _.assign(composite, { fontWeight: Constants.FONT_NORMAL });
    if (weightBold) _.assign(composite, { fontWeight: Constants.FONT_BOLD });
    if (alignLeft) _.assign(composite, { textAlign: "left" });
    if (alignRight) _.assign(composite, { textAlign: "right" });
    if (alignCenter) _.assign(composite, { textAlign: "center" });
    if (alignTop) _.assign(composite, { verticalAlign: "top" });
    if (alignMiddle) _.assign(composite, { verticalAlign: "middle" });
    if (alignBottom) _.assign(composite, { verticalAlign: "bottom" });
    if (inline) _.assign(composite, { display: "inline-block" });
    if (block) _.assign(composite, { display: "block" });
    if (flex) _.assign(composite, { flex });
    if (flexRow) _.assign(composite, { flexDirection: "row" });
    if (flexColumn) _.assign(composite, { flexDirection: "column" });
    if (fullWidth) _.assign(composite, { width: "100%" });
    if (noOutline) _.assign(composite, { outline: "none" });
    if (caps) _.assign(composite, { textTransform: "uppercase" })

    return composite;
}