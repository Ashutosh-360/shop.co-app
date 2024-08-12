import React from "react";

function Input(props) {
  const {
    inputType = "text",
    placeholder = "",
    keyName,
    onChange,
    heading = "",
    defaultValue = "",
  } = props;

  const changeHandler = (e) => {
    onChange(e);
  };
  return (
    <div className="flex flex-col gap-[2px] w-full">
      <label htmlFor={keyName} className="text-md">
        {heading}
      </label>
      <input
        type={inputType}
        id={keyName}
        name={keyName}
        defaultValue={defaultValue}
        className="border w-full outline-none rounded-md p-2"
        placeholder={placeholder}
        onChange={changeHandler}
      />
    </div>
  );
}

export default Input;
