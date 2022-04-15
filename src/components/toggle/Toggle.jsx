import React, { useContext } from "react";
import { ThemeContext } from "../../context";
import "./toggle.scss";

const Toggle = () => {
  const theme = useContext(ThemeContext);
  const handleCLick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <div className="t">
      <img
        src="https://cdn-icons-png.flaticon.com/128/979/979585.png"
        alt=""
        className="t-icon"
      />
      <img
        src="https://cdn-icons.flaticon.com/png/128/1823/premium/1823324.png?token=exp=1649927174~hmac=8d5fd8a003442218354d9108f6bf97e1"
        alt=""
        className="t-icon"
      />
      <div className="t-button" onClick={handleCLick} style={{ left: theme.state.darkMode ? 0 : 25, backgroundColor: !theme.state.darkMode ? "lightgray" : "gray" }}></div>
    </div>
  );
};

export default Toggle;
