import React, { useState } from "react";
import Radio from "./Radio";
import Select from "./Select";
import Text from "./Text";

function FormParser({ data, callback }) {
  const [keyValue, setKeyValue] = useState({});

  const onInputChangeHandler = (e) => {
    setKeyValue({ ...keyValue, [e.target.name]: e.target.value });
  };
  callback(keyValue);
  return (
    Array.isArray(data) &&
    data.length > 0 &&
    data.map((field) => {
      return field.inputType == "text" ? (
        <Text field={field} onInputChangeHandler={onInputChangeHandler} />
      ) : field.inputType == "radio" ? (
        <Radio field={field} onInputChangeHandler={onInputChangeHandler} />
      ) : field.inputType == "select" ? (
        <Select field={field} onInputChangeHandler={onInputChangeHandler} />
      ) : (
        ""
      );
    })
  );
}

export default FormParser;
