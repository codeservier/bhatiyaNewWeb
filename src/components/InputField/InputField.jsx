import React from "react";

const InputField = ({placeholder}) => {
  return (
    <div>
     
      <input
        data-aos="fade-up"
        type="text"
        className="w-full p-3 rounded-lg "
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
