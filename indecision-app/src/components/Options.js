import React from "react";
import Option from "./Option";

const Options = ({ handleDeleteOptions, options, handleDeleteOption }) => (
  <div>
    <button onClick={handleDeleteOptions}>Remove All</button>
    {options.length === 0 && <p>Please Add an Option to Get Started</p>}
    {options.map(option => (
      <Option
        key={option}
        optionText={option}
        handleDeleteOption={handleDeleteOption}
      />
    ))}
  </div>
);

export default Options;
