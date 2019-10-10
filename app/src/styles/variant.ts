import color from "./color";

const variant = {
    dark: {
        backgroundColor: color.dark,
        color: color.light,
    },
    muted: {
        backgroundColor: color.muted,
        color: color.white
    },
    white: {
        backgroundColor: color.white,
        color: color.dark
    },
    danger: {
        backgroundColor: color.danger,
        color: color.dark
    },
    light: {
        backgroundColor: color.light,
        color: color.dark
    },
    success: {
        backgroundColor: color.success,
        color: color.dark
    }
}

export default variant;