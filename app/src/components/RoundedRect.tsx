import React from "react";

import Text from "../base/Text";
import View from "../base/View";

import Constants from "../Constants";

interface RoundedRectProps {
    sharp?: boolean,
    children: string
}

const RoundedRect = ({ sharp, children }: RoundedRectProps) => (
    <View variant="dark" padding border-radius={!sharp}>
        <Text color={Constants.color.WHITE} bold text-center caps>{children}</Text>
    </View>
);

export default RoundedRect;