import React from "react";

import View from "../base/View";
import Image from "../base/Image";

// Add new styling stuff 

interface StatusIconProps {
    icon: string
}

const StatusIcon = (props: StatusIconProps) => (
    <Image margin-auto height="75px" block src={props.icon} />
);

export default StatusIcon;