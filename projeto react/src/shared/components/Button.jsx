import React from "react";

export default (props) =>{
    return(
        <div>
            <button onClick={props.function} className="btn">{props.title}</button>
        </div>

    )
}