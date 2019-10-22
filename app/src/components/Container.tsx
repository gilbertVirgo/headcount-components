import React from "react";

import View from "../base/View";

const Container = ({ children }: { children: JSX.Element | JSX.Element[] }) => (
    <View padding relative max-width="480px" margin-auto>{children}</View>
);

export default Container;