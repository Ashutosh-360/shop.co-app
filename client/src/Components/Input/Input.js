import React from "react";

function Input(props) {
  const {
    inputType = "text",
    placeholder = "",
    keyName,
    onChange,
    heading = "",
    defaultValue = "",
    disabled = false,
  } = props;

  const changeHandler = (e) => {
    console.log(e.target.type);
    if (e.target.type == "number") {
      e.target.value = e.target.value.replace(/[^0-9]/g, "");
    }
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
        disabled={disabled}
        defaultValue={defaultValue}
        className="border w-full outline-none rounded-md p-2"
        placeholder={placeholder}
        onChange={changeHandler}
      />
    </div>
  );
}

export default Input;
