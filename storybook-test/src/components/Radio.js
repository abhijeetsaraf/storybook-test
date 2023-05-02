import PropTypes from "prop-types"

function Radio({label, size ="md", onClick}){
    let scale = 1 
    if(size === "sm") scale = 0.75
    if(size === "lg") scale = 1.5
    
    const style = {
        height: `${scale*16}px`,
        width: `${scale*16}px`,
        verticalAlign:"middle" , 
        cursor:"pointer",
    }

    const style2 = {
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        fontFamily:"Arial, san-serif",
        cursor:"pointer",

    } 
    
    return(
        <div style={{display:"flex", alignItems:"center,"}}>
            <input type="radio" id="select" onClick={onClick} style={style}/>
            <lable htmlFor="select" style={style2}>{label}</lable>
        </div>
        
    )
}

Radio.propTypes = {
    label: PropTypes.string,
    size: PropTypes.oneOf(["sm","md","lg"]),
    onClick: PropTypes.func,
}

export default Radio