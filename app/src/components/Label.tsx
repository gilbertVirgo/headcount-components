import React from "react";

import Constants from "../Constants";

import Text from "../base/Text";
import View from "../base/View";
import Space from "./Space";

const Label = ({ children }: { children: string }) => (
    <View>
        <Text color={Constants.color.MUTED}>{children}</Text>
        <Space height="5px" />
    </View>
)

export default Label;