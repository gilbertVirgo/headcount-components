import React from "react";

import View from "../base/View";

import _ from "lodash";


interface GridProps {
    children: JSX.Element[], // grid must contain *multiple* Cells!
    columns?: number
}

const Grid = (props: GridProps) => {
    const splitIntoRows = () => {
        return _.chunk(props.children, props.columns || 2).map((items: JSX.Element[], index: number) => (
            <View flex flex-row>
                {items.map((item: JSX.Element, index: number) => {
                    const columns = props.columns || 2;

                    const x = index % columns;
                    const y = Math.floor(index / columns);

                    return (
                        <View
                            flex-value={1}
                            border-top={y > 0}
                            border-left={x === 0}
                            border-right border-bottom
                            variant="white"
                            padding>
                            {item}
                        </View>
                    );
                })}
            </View>
        ));
    }

    return (
        <View>{splitIntoRows()}</View>
    )
}

export default Grid;