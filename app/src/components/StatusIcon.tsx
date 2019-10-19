import React from "react";
import Group from "./Group";



import Image from "./Image";

// Add new styling stuff 

const styles = {
    icon: {
        marginLeft: "auto",
        marginRight: "auto",
        height: "75px",
        display: "block"
    }
}

interface StatusIconProps extends Styles.Options {
    icon: string | JSX.Element,
    children: any
}

const StatusIcon = (props: StatusIconProps) => (
    <Group style={Styles.format(props)}>
        <Image style={styles.icon} src={props.icon} />
        {props.children}
    </Group>
);

export default StatusIcon;