import React from "react";

function Select({ field,onInputChangeHandler }) {
  return (
    <div className="w-full flex flex-col gap-1">
      <label className="font-semibold">{field.label}</label>
      <select className="p-2 border rounded-lg focus:outline-none bg-none" onChange={onInputChangeHandler}>
        {Array.isArray(field.options) &&
          field.options.length > 0 &&
          field.options.map((opt) => {
            return <option value={opt.value}>{opt.title}</option>;
          })}
      </select>
    </div>
  );
}

export default Select;
