export const inputReducer = (state, action) => {
  const empty = action.payload.length === 0;

  switch (action.type) {
    case "FULL-NAME":
      const nameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;
      const isNameError = !nameRegex.test(action.payload) && !empty;

      return { ...state, value: action.payload, error: isNameError };

    case "EMAIL":
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      const isEmailError = !emailRegex.test(action.payload) && !empty;

      return { ...state, value: action.payload, error: isEmailError };

    case "STREET":
      return { ...state, value: action.payload };

    case "POSTAL":
      const postalRegex = /^[0-9]{5}$/;
      const isPostalError = !postalRegex.test(action.payload) && !empty;

      return { ...state, value: action.payload, error: isPostalError };

    case "CITY":
      const cityRegex = /^[a-zA-Z]+$/;
      const isCityError = !cityRegex.test(action.payload) && !empty;
      return { ...state, value: action.payload, error: isCityError };

    case "NO-CONTROLL":
      return { ...state, value: action.payload };
    default:
      return state;
  }
};
