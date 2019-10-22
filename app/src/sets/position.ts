export interface props {
    absolute?: boolean,
    fixed?: boolean,
    relative?: boolean,
    top?: string,
    right?: string,
    bottom?: string,
    left?: string
}

export const sets = {
    absolute: { position: "absolute" as const },
    fixed: { position: "fixed" as const },
    relative: { position: "relative" as const },
    top: (top: string) => ({ top }),
    right: (right: string) => ({ right }),
    bottom: (bottom: string) => ({ bottom }),
    left: (left: string) => ({ left }),
}