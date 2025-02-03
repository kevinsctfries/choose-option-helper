import React, { useState } from "react";
import "./ChooseOption.css";

const ChooseOption = () => {
  const [userName, setUserName] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;

    // Regex to allow only valid characters and restrict length
    const validUsernamePattern = /^[A-Za-z0-9 _-]*$/;

    // Check if the length exceeds 12 characters
    if (input.length > 12) {
      setIsInvalid(true);
      setErrorMessage("Cannot exceed 12 characters.");
      setTimeout(() => setIsInvalid(false), 500);
      return; // Prevent further input
    }

    // Check if the input contains forbidden characters
    if (!validUsernamePattern.test(input)) {
      setIsInvalid(true);
      setErrorMessage("Username cannot contain forbidden characters.");
      setTimeout(() => setIsInvalid(false), 500);
      return; // Prevent further input
    }

    // If no error, allow the input
    setUserName(input);
    setIsInvalid(false);
    setErrorMessage("");
  };

  return (
    <>
      <div className="menu">
        <span className="choose-option">Choose Option</span>
        <div className="option-list">
          <span className="option-text">
            <span className="action">Walk here</span>{" "}
            <span className="username">{userName}</span>
            <span className="user-level">(level-126)</span>
          </span>
          <span className="option-text">
            <span className="action">Follow</span>{" "}
            <span className="username">{userName}</span>
            <span className="user-level">(level-126)</span>
          </span>
          <span className="option-text">
            <span className="action">Trade with</span>{" "}
            <span className="username">{userName}</span>
            <span className="user-level">(level-126)</span>
          </span>
          <span className="option-text">
            <span className="action">Report</span>{" "}
            <span className="username">{userName}</span>
            <span className="user-level">(level-126)</span>
          </span>
          <span className="option-text">
            <span className="action">Lookup</span>{" "}
            <span className="username">{userName}</span>
            <span className="user-level">(level-126)</span>
          </span>
          <span className="option-text">
            <span className="action">Cancel</span>
          </span>
        </div>
      </div>
      <div className={`input-section ${isInvalid ? "invalid-input" : ""}`}>
        <label htmlFor="username-input">Enter Username: </label>
        <input
          type="text"
          id="username-input"
          value={userName}
          onChange={handleInputChange}
          placeholder="username"
        />
      </div>
      {isInvalid && <div className="error-box">{errorMessage}</div>}
    </>
  );
};

export default ChooseOption;
