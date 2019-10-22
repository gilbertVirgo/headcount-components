export interface props {
    width?: string,
    height?: string,
    "max-width"?: string,
    "max-height"?: string
}

export const sets = {
    width: (width: string) => ({ width }),
    height: (height: string) => ({ height }),
    "max-width": (maxWidth: string) => ({ maxWidth }),
    "max-height": (maxHeight: string) => ({ maxHeight })
}