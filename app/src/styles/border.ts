const solid = {
    borderStyle: "solid"
}

const border = {
    thin: {
        ...solid,
        borderWidth: "1px"
    },
    thick: {
        ...solid,
        borderWidth: "3px"
    }
}

export default border;