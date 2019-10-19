import React from "react";

import View from "./View";

import _ from "lodash";

import main from "../styles/main";
import border from "../styles/border";
import color from "../styles/color";

const styles = {
    grid: {
        borderCollapse: "collapse" as const,
        width: "100%",
        tableLayout: "fixed" as const
    },
    cell: {
        borderColor: color.light,
        ...border.thin,
        ...main.padding,
        borderCollapse: "collapse" as const,
    },
    cellInner: {
        flexDirection: "row" as const,
        display: "flex",
        alignItems: "center" as const
    }
}

// grid must contain *multiple* Celles!

interface GridProps { children: JSX.Element[], columns?: number }

const splitIntoRows = ({ children, columns }: GridProps) => {
    // Split children into rows

    return _.chunk(children, columns).map((items: JSX.Element[], index: number) =>
        <tr key={index}>
            {items}
        </tr>
    )
}

const Grid = ({ children, columns = 2 }: GridProps) => (
    <View>
        <table style={styles.grid}>
            <tbody>
                {splitIntoRows({ children, columns })}
            </tbody>
        </table>
    </View>
);

interface CellProps { style?: object, children: JSX.Element | JSX.Element[] | string }

Grid.Cell = ({ style, children }: CellProps) => (
    <td style={{ ...style, ...styles.cell }}>
        <View style={styles.cellInner}>
            {children}
        </View>
    </td>
)

export default Grid;