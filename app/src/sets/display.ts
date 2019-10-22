export interface props {
    inline?: boolean,
    "inline-block"?: boolean,
    block?: boolean,
    flex?: boolean
}

export const sets = {
    inline: { display: "inline" },
    "inline-block": { display: "inline-block" },
    block: { display: "block" },
    flex: { display: "flex" }
}