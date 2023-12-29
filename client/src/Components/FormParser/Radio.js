import React from "react";

function Radio({ field, onInputChangeHandler }) {
  return (
    <div className="w-full flex  flex-col gap-1">
      <label className="font-semibold">{field.label}</label>
      <div className="flex items-center gap-4 py-2">
        {Array.isArray(field.options) &&
          field.options.length > 0 &&
          field.options.map((opt) => {
            return (
              <div className="flex items-center gap-1">
                <input
                  className=""
                  type="radio"
                  value={opt.value}
                  name={field.name}
                  onChange={onInputChangeHandler}
                />
                <div>{opt.title}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Radio;
