import React from "react";
import Input from "../../reusable/Input/Input";
import { toast } from "react-toastify";
import { createFieldsByInputs, searchErrors } from "./formFunctions";
import { forwardRef } from "react";
import { useImperativeHandle } from "react";

const CheckoutForm = forwardRef((props, ref) => {
  const formRef = React.useRef();

  useImperativeHandle(ref, () => ({
    submit: () => {
      return onSubmit();
    },
  }));

  const onSubmit = () => {
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
        toast.warning(`${error} è vuoto`);
      });
    }
    if (!error && !emptyValue) {
      toast.success("form valido");
      isValid = true;
    }
    return { isValid, fields };
  };

  return (
    <form className="control" ref={formRef}>
      <Input label={"Full Name"} action="FULL-NAME" />
      <Input label={"E-Mail Address"} action="EMAIL" />
      <Input label={"Street"} action="NO-CONTROLL" />
      <div className="control-row">
        <Input label={"Postal Code"} action="POSTAL" />
        <Input label={"City"} action="CITY" />
      </div>
    </form>
  );
});

export default CheckoutForm;
