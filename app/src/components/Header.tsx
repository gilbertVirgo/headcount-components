import React from "react";

import View from "../base/View";
import Text from "../base/Text";
import Image from "../base/Image";

import Constants from "../Constants";

import Back from "../assets/back.svg";
import Space from "./Space";

const height = "75px";

const Header = ({ title }: { title: string }) => {
    return (<>
        <Space height={height} />
        <View fixed width="100%" left="0" top="0" height={height} zIndex={1000}>
            <View variant="gradient">
                <View absolute top="30px" left="30px">
                    <Image height="15px" src={Back} />
                </View>
                <Text no-margin sans-serif text-center bold color={Constants.color.DARK} medium line-height={height}>{title}</Text>
            </View>
        </View>
    </>);
}

export default Header;
