import React, { useState, useEffect, useRef } from "react";

import View from "../base/View";
import Text from "../base/Text";
import Image from "../base/Image";
import Button from "../base/Button";

import Calendar from "../assets/calendar.svg";
import Home from "../assets/home.svg";
import Settings from "../assets/settings.svg";

import Constants from "../Constants";
import Space from "./Space";
import Group from "./Group";

interface PanelProps {
    onClick: any,
    active: boolean,
    icon: any,
    children: string
}

const Panel = ({ onClick, active, icon, children }: PanelProps) => (
    <View border-bottom={active} flex flex-value={1} flex-column flex-middle flex-center>
        <Button onClick={onClick}>
            <Group>
                <Image margin-auto block height="20px" src={icon} />
            </Group>
            <Group>
                <Text small color={Constants.color.DARK}>{children}</Text>
            </Group>
        </Button>
    </View>
);

const Nav = ({ onLoad }: { onLoad: any }) => {
    const container = useRef(null);

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const elem: HTMLElement | null = container.current;

        if (elem !== null) {
            onLoad(elem!.getBoundingClientRect().height);
        }
    }, [container]);

    return (
        <View ref={container} padding fixed left="0" bottom="0" flex flex-row width="100vw" variant="white">
            <Panel active={0 === activeIndex} onClick={() => setActiveIndex(0)} icon={Calendar}>My Bookings</Panel>
            <Panel active={1 === activeIndex} onClick={() => setActiveIndex(1)} icon={Home}>Home</Panel>
            <Panel active={2 === activeIndex} onClick={() => setActiveIndex(2)} icon={Settings}>Settings</Panel>
        </View>
    )
}

export default Nav;