import React from 'react';

const Result = (props)=>{
    return (
        <div className="w-75 mx-auto">
            <textarea className="form-control" value={props.result}>
                
            </textarea>
        </div>
    )
}

export default Result;