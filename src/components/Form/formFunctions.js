export function createFieldsByInputs(inputs) {
  const fields = inputs.map((input) => {
    const label = input.name;
    const value = input.value;
    const error = input.classList.contains("error") ? "error" : "not-error";
    return { label, value, error };
  });
  return fields;
}

export function searchErrors(fields) {
  let error = false;
  let errors = [];
  let emptyValue = false;
  let empties = [];
  fields.forEach((field) => {
    if (field.error === "error") {
      errors.push(field.label);
    }
  });
  if (errors.length > 0) {
    error = true;
  }
  fields.forEach((field) => {
    if (field.value === "") {
      empties.push(field.label);
    }
  });
  if (empties.length > 0) {
    emptyValue = true;
  }

  return { error, errors, emptyValue, empties };
}
