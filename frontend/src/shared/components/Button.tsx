import React from "react";

export default (props) =>{
    return(
        <div>
            <button type={props.type == null? 'button': props.type} onClick={props.function} className="btn">{props.title}</button>
        </div>

    )
}