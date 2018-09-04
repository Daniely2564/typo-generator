import React from "react";
const SetLength = props => {
  const numberOption = function(length) {
    let options = [];
    if (length > 8) {
      length = 8;
    }
    for (let i = 0; i <= length; i++) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return options;
  };
  return (
    <div className="row form-group">
      <div className="col-1">{""}</div>
      <div className="col-4 text-center">
        <label className="lead">Number of last Letters</label>
      </div>
      <div className="col-5">
        <select
          className="form-control"
          onChange={event => {
            let length = event.target.value;
            props.permutation(length);
          }}
        >
          {numberOption(props.keyword.length)}
        </select>
      </div>
      <div className="col-1">{""}</div>
    </div>
  );
};

export default SetLength;
