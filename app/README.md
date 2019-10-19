# Components & Styling

## Base components

Base components are alternatives to HTML elements. It is necessary to use these instead of HTML elements for styling, readability and consistency. _(More to be added in later stages of development)_

* Text
    - Used for display all types of text. The only base component that will accept a string.
* View
    - Used in place of `div`, `section` and all other block-level tags.
* Button
    - Used when a `click` event needs to be captured.
* Image
    - Used in place of the `img` HTML element.
* Input
    - Used in place of the `input` HTML element.

## Styling Sets

JS styling sets are comparable to CSS classes. Example:

```CSS
.myClass {
    font-family: Arial;
    font-size: 16px
}
```

is equivalent to 

```JS
const mySets = {
    myClass: {
        fontFamily: "Arial",
        fontSize: "16px"
    }
}
```

This enables developers to write JSX without using the conventional (and messy) `className` prop. Example:

```JSX
<BaseComponent className={`${"myClass"} ${"myOtherClass"}`}/>
```

becomes

```JSX
<BaseComponent myClass myOtherClass/>
```

Also for inline styles, instead of using the `style` prop, you may use CSS styles directly in the form of dynamic sets. Example:

```JSX
<BaseComponent style={{color: "blue"}}>
```

becomes

```JSX
<BaseComponent color="blue">
```

### How to - Sets

When building custom components, you may want to add this functionality. This is made simple with the Styles object.

```JS
import Styles from "./Styles";
```

Let's say you want to build a custom button component with different themes.

1. Build the shell

```TSX
interface MyButtonProps {
    red?: boolean,
    blue?: boolean
}

const MyButton = ({red, blue}: MyButtonProps) => {
    return (
        <Button>
            <Text>My Button Text</Text>
        </Button>
    )
}
```

2. Build the sets

```TSX
const MyButtonSets = {
    red: {
        backgroundColor: "red",
        color: "white"
    },
    blue: {
        backgroundColor: "blue",
        color: "grey"
    }
}

interface MyButtonProps {
[...]
```

3. Integrate

```TSX
const MyButton = ({red, blue}: MyButtonProps) => {
    return (
        <Button style={Styles.submit({red, blue}).to(MyButtonSets)}>
            <Text>My Button Text</Text>
        </Button>
    )
}
```

4. Use it!

```TSX
<MyButton red/>     // Button with red background and white text
<MyButton blue/>    // Button with blue background and grey text
```

### How to - Dynamic Sets

Let's say you want a component that allows you to render text of any given color.

1. Build the shell

```TSX
interface MyColoredTextProps {
    textColor?: string,
}

const MyColoredText = ({textColor}: MyColoredTextProps) => {
    return (
        <Text>My Colored Text</Text>
    )
}
```

2. Build the sets

```TSX
const MyColoredTextSets = {
    textColor: (color: string) => {
        return { color }
    }
}
```

3. Integrate

```TSX
interface MyColoredTextProps {
    textColor?: string
}

const MyColoredText = ({textColor}: MyColoredTextProps) => {
    return (
        <Text style={Styles.submit({textColor}).to(MyColoredTextSets)}>My Colored Text</Text>
    )
}
```

4. Use it!

```TSX
<MyColoredText textColor="#FF0000"/>    // Red text
<MyColoredText textColor="orange"/>     // Orange text
```