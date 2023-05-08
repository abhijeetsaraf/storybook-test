
import { useState } from "react";
import PropTypes from "prop-types";

function TextInput(props){
    const [text, setText ] = useState('')

    const handleChange = (event) => {
        setText(event.target.value);
    }

    let scale =1
    if(props.size === "sm") scale = 0.75
    if(props.size === "md") scale = 1
    if(props.size === "lg") scale = 1.5
    
    const style = {
        padding: `${scale*0.5}rem ${scale*1}rem`,
        color:"fafafa",
        borderRadius:"5px",
        }

    return(
        <div>
            <label htmlFor={props.id}>{props.label}</label>
            <input
                type="text"
                id={props.id}
                value={text}
                style={style}
                onChange={handleChange}
            />
        </div>
        )
    }


TextInput.propTypes = {
    lable: PropTypes.string,
    size: PropTypes.oneOf(["sm","md","lg"]),

}
export default TextInput;