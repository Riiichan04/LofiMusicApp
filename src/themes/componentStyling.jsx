const buttonStyle = {
    "color": "var(--text-color)",
    "fontSize": "var(--h2)",
    "cursor": "pointer",
    "margin": "auto 0.25rem",
    ":hover": {
        "color": "var(--text-color-hover)",
    },
    // ":disabled": {
    //     "color": "var(--text-color-disabled)"
    // }
}

const smallButtonStyle = {
    "color": "var(--text-color)",
    "fontSize": "var(--h4)",
    "cursor": "pointer",
    ":hover": {
        "color": "var(--text-color-hover)",
    }
}

const textButtonStyle = {
    "color": "var(--text-color)",
    "cursor": "pointer",
}

const buttonStyleWithoutHover = {
    "color": "var(--text-color)",
    "fontSize": "var(--h2)",
    "cursor": "pointer",
}

export { buttonStyle, smallButtonStyle, textButtonStyle, buttonStyleWithoutHover }