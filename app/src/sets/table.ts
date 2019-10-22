export interface props {
    "border-collapse"?: boolean
    "layout-fixed"?: boolean
}

export const sets = {
    "border-collapse": { borderCollapse: "collapse" as const },
    "layout-fixed": { tableLayout: "fixed" as const },
}