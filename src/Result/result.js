import React from "react";

const Result = props => {
  return (
    <div className="w-75 mx-auto">
      <h2 style={{ textIndent: "15px" }}>Result</h2>
      <textarea className="form-control lead" rows={10} value={props.typos} />
    </div>
  );
};

export default Result;
