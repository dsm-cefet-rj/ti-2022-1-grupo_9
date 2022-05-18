import React from "react";

let actions = (props) =>{
    var result = props.action?.map((act) =>{
        return <a>{act}</a>
    })
    return result;
}
export default (props) =>    {
    return(
        <div>
            <div className="row justify-content-center ">
                <div className="col-12 col-md-6">
                    <div className="card">
                        <div className="card-image">
                            <img height="294px" width="392px" src={props.image} />
                            <span className="card-title">{props.title}</span>
                        </div>
                        <div className="card-content">
                             {props.content}
                            
                        </div>
                        <div className="card-action">
                            {actions(props)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}