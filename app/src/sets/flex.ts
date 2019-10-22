export interface props {
    "flex-row"?: boolean,
    "flex-column"?: boolean,
    "flex-value"?: number
}

export const sets = {
    "flex-row": { flexDirection: "row" },
    "flex-column": { flexDirection: "column" },
    "flex-middle": { alignItems: "center" },
    "flex-center": { justifyContent: "center" },
    "flex-value": (flex: number) => ({ flex }),
    "flex-grow": (flexGrow: number) => ({ flexGrow }),
    "flex-shrink": (flexShrink: number) => ({ flexShrink })
}