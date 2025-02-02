import React, { useState } from "react";
import "./ChooseOption.css";

const ChooseOption = () => {
  const [userName, setUserName] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
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
      <div className="input-section">
        <label htmlFor="username-input">Enter Username: </label>
        <input
          type="text"
          id="username-input"
          value={userName}
          onChange={handleInputChange}
          minLength={1}
          maxLength={12}
          placeholder="username"
        />
      </div>
    </>
  );
};

export default ChooseOption;
