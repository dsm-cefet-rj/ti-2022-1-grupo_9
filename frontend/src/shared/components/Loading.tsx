import { useState } from "react";
import { useSelector } from "react-redux";

export default props => {

    const count = useSelector(state => {
        let result: any = state;
        return result.counter.value;
    });

    return (<div>
        {count && <div className="loading-spinner">

        </div>}
    </div>)
}
