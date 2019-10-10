import color from "./color";

const main = {
    gradient: {
        background: "linear-gradient(-70deg, #04C467, #359D99)"
    },
    borderRadius: {
        borderRadius: "5px"
    },
    padding: {
        padding: "10px",
        boxSizing: "border-box" as const
    },
    paddingLarge: {
        padding: "20px",
        boxSizing: "border-box" as const
    },
    shadow: {
        boxShadow: `0 5px 10px ${color.dark}40`
    }
}

export default main;