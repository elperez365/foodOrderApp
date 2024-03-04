import React from "react";
import Input from "../../reusable/Input/Input";
import { toast } from "react-toastify";
import { createFieldsByInputs, searchErrors } from "./formFunctions";
import { forwardRef } from "react";
import { useImperativeHandle } from "react";

const CheckoutForm = forwardRef((props, ref) => {
  const formRef = React.useRef();
  const submitButtonRef = React.useRef();

  useImperativeHandle(ref, () => ({
    submit: () => {
      return onSubmit();
    },
    submitButtonRef: submitButtonRef.current,
  }));

  const onSubmit = (e) => {
    e && e.preventDefault();
    const resolveAfter = new Promise((resolve) => setTimeout(resolve, 2000));
    const notify = () =>
      toast.promise(resolveAfter, {
        pending: "Waiting for validation...",
        success: "Submitted successfully!",
        error: "An error occurred. Please try again.",
      });

    const inputs = formRef.current.querySelectorAll("input");
    const fields = createFieldsByInputs(Array.from(inputs));
    let isValid = false;

    const { error, errors, emptyValue, empties } = searchErrors(fields);

    if (error) {
      errors.forEach((error) => {
        toast.error(`${error} non è valido`);
      });
    }

    if (emptyValue) {
      empties.forEach((error) => {
        // toast.warning(`${error} è vuoto`);
        console.log(`${error} è vuoto`);
      });
    }
    if (!error && !emptyValue) {
      notify();
      isValid = true;
    }
    return { isValid, fields };
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="control"
      ref={formRef}
    >
      <Input label={"Full Name"} action="FULL-NAME" required />
      <Input label={"E-Mail Address"} action="EMAIL" type="email" required />
      <Input label={"Street"} action="NO-CONTROLL" required />
      <div className="control-row" required>
        <Input label={"Postal Code"} action="POSTAL" required />
        <Input label={"City"} action="CITY" required />
      </div>
      <button ref={submitButtonRef} type="submit" style={{ display: "none" }} />
    </form>
  );
});

export default CheckoutForm;
