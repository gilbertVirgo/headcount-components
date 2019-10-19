import color from "./color";

const variant = {
    dark: {
        backgroundColor: color.dark,
        color: color.light,
        borderColor: color.light
    },
    muted: {
        backgroundColor: color.muted,
        color: color.white,
        borderColor: color.white
    },
    white: {
        backgroundColor: color.white,
        color: color.dark,
        borderColor: color.dark
    },
    danger: {
        backgroundColor: color.danger,
        color: color.dark,
        borderColor: color.dark
    },
    light: {
        backgroundColor: color.light,
        color: color.dark,
        borderColor: color.dark
    },
    success: {
        backgroundColor: color.success,
        color: color.dark,
        borderColor: color.dark
    }
}

export default variant;