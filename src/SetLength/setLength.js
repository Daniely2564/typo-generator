import React from 'react';
const SetLength = (props)=>{
    const numberOption = function(length){
        let options = [];
        for(let i = 0;i<=length;i++){
            options.push(<option key={i} value={i}>{i}</option>)
        }
        return options
    }
    return (
        <div className="row form-group">
            <div className="col-1">
                {""}
            </div>
            <div className="col-4 text-center">
                <label className="lead">
                    Set the Length
                </label>
            </div>
            <div className="col-5">
                <select className="form-control" onChange={(event)=>{props.setLength(event.target.value)}}>
                    {numberOption(props.length)}
                </select>
            </div>
            <div className="col-1">
                {""}
            </div>
        </div>
    )
}

export default SetLength;