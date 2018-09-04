import React from "react";

const SearchBar = props => {
  return (
    <div className="w-75 mx-auto row my-3">
      <label
        className="col-3 text-center lead"
        style={{ marginTop: "auto", marginBottom: "auto", fontWeight: "bold" }}
      >
        Enter Keyword
      </label>
      <input
        type="text"
        value={props.keyword}
        onChange={props.setKeyword}
        className="form-control col-9"
        maxLength={30}
      />
    </div>
  );
};

export default SearchBar;
