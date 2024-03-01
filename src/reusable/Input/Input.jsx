import { useReducer } from "react";
import { inputReducer } from "./inputReducer";
import "./Input.css";

class initialState {
  value = "";
  error = false;
}

export default function Input({ action = "NULL", label, ...props }) {
  const [state, dispatch] = useReducer(inputReducer, new initialState());

  const handleChange = (e) => {
    dispatch({ type: action, payload: e.target.value });
  };

  const inputClass = state.error ? "error" : "not-error";

  return (
    <div className="input-container">
      <label htmlFor={label}>{label}</label>
      <input
        name={label}
        className={inputClass}
        {...props}
        value={state.value}
        onChange={handleChange}
      />
    </div>
  );
}
