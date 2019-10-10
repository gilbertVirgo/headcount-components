import React, { useState, useEffect, useRef } from "react";

import Image from "./Image.d";
import Text from "./Text.d";

import Calendar from "../assets/calendar.svg";
import Home from "../assets/home.svg";
import Settings from "../assets/settings.svg";

import main from "../styles/main";
import text from "../styles/text";
import color from "../styles/color";
import { createSecureContext } from "tls";

declare module "react";

const inline = {
    container: {
        ...main.paddingLarge,
        paddingBottom: "0",
        position: "fixed" as const,
        left: "0", bottom: "0",
        display: "flex",
        flexDirection: "row" as const,
        width: "100vw",
        backgroundColor: color.white
    },
    panel: (active: boolean) => ({
        flex: 1,
        textAlign: "center" as const,
        borderBottom: active ? `5px solid ${color.dark}` : "none"
    }),
    panelIcon: {
        display: "block",
        height: "20px",
        marginLeft: "auto",
        marginRight: "auto"
    },
    panelLabel: {
        ...text.default,
        ...text.small,
        display: "block",
        color: color.dark,
    }
}

interface PanelProps {
    onClick: any,
    active: boolean,
    icon: any,
    children: any
}

const Panel = ({ onClick, active, icon, children }: PanelProps) => (
    <div style={inline.panel(active)} onClick={onClick}>
        <Image style={inline.panelIcon} source={icon} />
        <Text style={inline.panelLabel}>{children}</Text>
    </div>
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
        <div ref={container} style={inline.container}>
            <Panel active={0 === activeIndex} onClick={() => setActiveIndex(0)} icon={Calendar}>My Bookings</Panel>
            <Panel active={1 === activeIndex} onClick={() => setActiveIndex(1)} icon={Home}>Home</Panel>
            <Panel active={2 === activeIndex} onClick={() => setActiveIndex(2)} icon={Settings}>Settings</Panel>
        </div>
    )
}

export default Nav;