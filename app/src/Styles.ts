/* Usage:
 *
 * import Styles from "./Styles"
 * 
 * Styles.submit(props).to(sets) 
 * 
 * -- Want to add additional styles?
 * 
 * Styles.join(Styles.submit(props).to(sets), {additional: "styles", ...})
 * 
 */

import _ from "lodash";

export default {
    join: (a: object, b: object) =>
        ({ ...a, ...b }),
    submit: (props: object) => {
        return {
            to: (sets: object) => {
                const composite = {};

                Object.keys(sets).forEach(name => {
                    if (props.hasOwnProperty(name)) {
                        let value = props[name],
                            set = sets[name];

                        switch (typeof value) {
                            case "boolean":
                                _.assign(composite, set);
                                break;
                            default:
                                _.assign(composite, set(value))
                        }
                    }
                });

                return composite;
            }
        }
    }
}
