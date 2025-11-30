import { Form } from "./FormComponent.jsx";

export default function LoginForm() {
  const initialValues = {
    email: "",
    password: "",
  };

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email is invalid";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    return errors;
  };

  const handleSubmit = async (values) => {
    // Real-world: call API here
    console.log("Submitting", values);
    // await api.login(values);
  };

  return (
    <Form
      initialValues={initialValues}
      validate={validate}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched, handleChange, handleBlur, isSubmitting }) => (
        <div style={{ display: "grid", gap: 12, maxWidth: 320 }}>
          <div>
            <label>
              Email
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange("email")}
                onBlur={handleBlur("email")}
              />
            </label>
            {touched.email && errors.email && (
              <div style={{ color: "red", fontSize: 12 }}>{errors.email}</div>
            )}
          </div>

          <div>
            <label>
              Password
              <input
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange("password")}
                onBlur={handleBlur("password")}
              />
            </label>
            {touched.password && errors.password && (
              <div style={{ color: "red", fontSize: 12 }}>{errors.password}</div>
            )}
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Login"}
          </button>
        </div>
      )}
    </Form>
  );
}
