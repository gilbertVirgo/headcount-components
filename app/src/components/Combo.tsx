import React from "react";

import View from "../base/View";
import Image from "../base/Image";

interface ComboProps {
    children: JSX.Element | JSX.Element[]
}

const Combo = (props: ComboProps) => (
    <View border-radius>
        {props.children}
    </View>
)

interface HeaderProps {
    children: JSX.Element | JSX.Element[]
}

Combo.Header = (props: HeaderProps) => (
    <View padding border variant="white" flex flex-row flex-middle>{props.children}</View>
)

interface ImageProps {
    src: string
}

const imageWidth = "70px";

Combo.Image = (props: ImageProps) => (
    <View center flex-value={1}>
        <Image circle block width={imageWidth} height={imageWidth} src={props.src} />
    </View>
);

interface InfoProps {
    children: JSX.Element | JSX.Element[]
}

Combo.Info = (props: InfoProps) => (
    <View padding-left flex-grow={1}>{props.children}</View>
);

interface BodyProps {
    children: JSX.Element | JSX.Element[]
}

Combo.Body = (props: BodyProps) => (
    <View>{props.children}</View>
)

export default Combo;