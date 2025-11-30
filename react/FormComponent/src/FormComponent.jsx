import { useState } from "react";

export function Form({
  initialValues,
  validate,      // (values) => errors object, e.g. { email: "Required" }
  onSubmit,      // async or sync: (values) => void | Promise<void>
  children,
}) {
  const [values, setValues] = useState(initialValues || {});
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const runValidation = (nextValues = values) => {
    if (!validate) return {};
    const validationErrors = validate(nextValues) || {};
    setErrors(validationErrors);
    return validationErrors;
  };

  const handleChange = (name) => (event) => {
    const value = event.target.value;
    const nextValues = { ...values, [name]: value };
    setValues(nextValues);

    // Optional: live validation
    if (Object.keys(errors).length > 0) {
      runValidation(nextValues);
    }
  };

  const handleBlur = (name) => () => {
    setTouched((prev) => ({ ...prev, [name]: true }));
    runValidation();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = runValidation();
    const hasErrors = Object.keys(validationErrors).length > 0;
    if (hasErrors) return;

    try {
      setIsSubmitting(true);
      await onSubmit?.(values);
    } finally {
      setIsSubmitting(false);
    }
  };

  const setFieldValue = (name, value) => {
    const nextValues = { ...values, [name]: value };
    setValues(nextValues);
    if (Object.keys(errors).length > 0) {
      runValidation(nextValues);
    }
  };

  const form = {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    setValues,
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      {typeof children === "function" ? children(form) : children}
    </form>
  );
}
