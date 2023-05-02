import PropTypes from "prop-types"

function Button({label, backgroundColor = "blue", size = "md", onClick, color, border = "none"}){
    let scale =1
    if(size === "sm") scale = 0.75
    if(size === "lg") scale = 1.5
    
    const style = {
        backgroundColor,
        padding: `${scale*0.5}rem ${scale*1}rem`,
        border,
        borderRadius: "5px",
        color,
    }
    return(
        <button onClick={onClick} style={style}>
            {label}
        </button>
    )
}

//Calling button and passing prop types in the button
Button.propTypes ={
    label: PropTypes.string,
    backgroundColor:PropTypes.string,
    size: PropTypes.oneOf(["sm","md","lg"]),
    color: PropTypes.string,
    border: PropTypes.string,
    onClick: PropTypes.func,
}
export default Button


// This code defines a React functional component named Button that renders a button with a label and some additional styles based on the props passed to it.

// The Button component accepts several props:

// label: a required string prop that specifies the label to be displayed on the button
// backgroundColor: an optional string prop that specifies the background color of the button (default value is "blue" if not provided)
// size: an optional string prop that specifies the size of the button, which can be "sm" (small), "md" (medium), or "lg" (large) (default value is "md" if not provided)
// color: an optional string prop that specifies the text color of the button
// onClick: an optional function prop that specifies the click handler for the button
// The Button component then creates an inline style object based on the props passed to it, which sets the background color, padding, border, border radius, and text color of the button. The scale variable is calculated based on the size prop, which is used to adjust the padding of the button.

// Finally, the Button component renders a button element with the label and style properties, and attaches an onClick event handler if one is provided.

// The PropTypes module is used to define the types of the props passed to the Button component. It is used to ensure that the props passed to the component have the correct type, and to provide warnings in the console if an incorrect type is passed.

// The Button.propTypes object defines the prop types for the Button component, using the PropTypes module to specify the expected types of each prop. This helps to ensure that the props passed to the component are of the expected type and avoids runtime errors.

// Finally, the export default Button statement exports the Button component so that it can be used in other parts of the application.