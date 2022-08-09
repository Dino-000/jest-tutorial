import React, { useState } from "react";

export function replaceCamelCaseWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

export default function ColorButton() {
  const [buttonColor, setButtonColor] = useState("MediumVioletRed");
  const newButtonColor =
    buttonColor === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";
  const [disabled, setDisabled] = useState(false);

  return (
    <div>
      <button
        style={{
          backgroundColor: disabled ? "gray" : buttonColor,
          color: "white",
        }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={disabled}
      >
        Change to {replaceCamelCaseWithSpaces(newButtonColor)}
      </button>
      <br />
      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={disabled}
        aria-checked={disabled}
        onChange={(e) => {
          console.log(e.target.checked);
          setDisabled(e.target.checked);
        }}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}
