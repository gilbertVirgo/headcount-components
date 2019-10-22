/* Usage:
 *
 * import Styles from "./Styles"
 * 
 * Styles.submit(props [, defaults]).to(sets) 
 * 
 */

import _ from "lodash";

export default {
    submit: (props: object, defaults?: object) => {
        if (defaults) {
            props = { ...props }; // Free props

            Object.keys(defaults).forEach(name => {
                if (!props.hasOwnProperty(name)) {
                    // Non destructive
                    props[name] = defaults[name];
                }
            });
        }

        return {
            to: (sets: object) => {
                const composite = {};

                Object.keys(sets).forEach(name => {
                    if (props.hasOwnProperty(name)) {
                        let value = props[name],
                            set = sets[name];

                        switch (typeof value) {
                            case "boolean":
                                if (value === true) {
                                    _.assign(composite, set);
                                }
                                break;
                            default:
                                _.assign(composite, set(value));
                                break;
                        }
                    }
                });

                return composite;
            }
        }
    }
}
