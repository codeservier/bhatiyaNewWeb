import React from "react";

const InputField = ({ name, value, onChange, placeholder }) => {
  return (
    <div>
      <input
        data-aos="fade-up"
        type="text"
        name={name}               // Add name attribute for form handling
        value={value}             // Bind value to the state
        onChange={onChange}       // Handle change events
        className="w-full p-3 rounded-lg text-black"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
