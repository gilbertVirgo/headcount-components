import React, { useState } from "react";

import View from "../base/View";
import Button from "../base/Button";
import Image from "../base/Image";
import Text from "../base/Text";

import Close from "../assets/close.svg";
import { useEffect } from "react";

interface AlertProps {
    children: string,
    variant: string,
    dismissible?: boolean
}

const Alert = (props: AlertProps) => {
    const [hidden, setHidden] = useState(false);

    return !hidden ? (
        <View margin-bottom border variant={props.variant} padding flex flex-middle flex-row>
            {props.dismissible && (
                <View margin-right>
                    <Button onClick={() => setHidden(true)}>
                        <Image src={Close} block width="15px" />
                    </Button>
                </View>
            )}

            <View flex-value={1}>
                <Text no-margin sans-serif>{props.children}</Text>
            </View>
        </View>
    ) : null
}

export default Alert;