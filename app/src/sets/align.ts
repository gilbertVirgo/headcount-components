export interface props {
    "text-center"?: boolean,
    "fixed-center"?: boolean
}

export const sets = {
    "text-center": {
        textAlign: "center" as const
    },
    "fixed-center": {
        position: "fixed",
        left: "50%", top: "50%",
        transform: "translate(-50%, -50%)"
    }
}