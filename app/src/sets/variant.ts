import Constants from "../Constants";

export interface props {
    variant?: string
}

export const sets = {
    variant: (theme: string) => {
        const { color } = Constants;

        switch (theme) {
            case "overlay":
                return {
                    backgroundColor: color.DARK + "40"
                }
            case "gradient":
                return {
                    background: `linear-gradient(-70deg, #04C467, #359D99)`,
                    color: color.DARK
                }
            case "dark":
                return {
                    backgroundColor: color.DARK,
                    color: color.WHITE,
                    borderColor: color.DARK
                }
            case "dark-pane":
                return {
                    backgroundColor: color.DARK + "40",
                    color: color.WHITE,
                    borderColor: color.DARK
                }
            case "light":
                return {
                    backgroundColor: color.LIGHT + "40",
                    color: color.DARK,
                    borderColor: color.LIGHT
                }
            case "white":
                return {
                    backgroundColor: color.WHITE,
                    color: color.DARK,
                    borderColor: color.LIGHT
                }
            case "muted":
                return {
                    backgroundColor: color.MUTED + "40",
                    color: color.DARK,
                    borderColor: color.MUTED
                }
            case "success":
                return {
                    backgroundColor: color.SUCCESS + "40",
                    color: color.DARK,
                    borderColor: color.SUCCESS
                }
            case "danger":
                return {
                    backgroundColor: color.DANGER + "40",
                    color: color.DARK,
                    borderColor: color.DANGER
                }
            case "danger-outline":
                return {
                    backgroundColor: color.WHITE,
                    color: color.DANGER,
                    borderColor: color.DANGER
                }
        }
    }
}