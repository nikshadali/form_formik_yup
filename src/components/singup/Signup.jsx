import { signupSchema } from "../../schemas/SingupSchema";
import "./Signup.css";
import { useFormik } from "formik";
const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

const Signup = () => {
  const { errors, handleBlur, handleChange, handleSubmit, touched, values } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signupSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });
  console.log(errors);
  return (
    <div className="signup">
      <div className="left">
        <h2>Signup Form</h2>
        <form onSubmit={handleSubmit}>
        <div className="form-control">
    <label htmlFor="name" className="label">
      Name
    </label>
    <input
      type="text"
      name="name"
      id="name"
      value={values.name}
      onBlur={handleBlur}
      onChange={handleChange}
    />
    {errors.name && touched.name ? (
      <p className="error">{errors.name}</p>
    ) : null}
  </div>
          <div className="form-control">
            <label htmlFor="email" className="label">
              email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={values.email}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.email && touched.email ? (
              <p className="error">{errors.email}</p>
            ) : null}
          </div>
          <div className="form-control">
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={values.password}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.password && touched.password ? (
              <p className="error">{errors.password}</p>
            ) : null}
          </div>
          <div className="form-control">
            <label htmlFor="confirm_password" className="label">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirm_password"
              id="confirm_password"
              value={values.confirm_password}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.confirm_password && touched.confirm_password ? (
              <p className="error">{errors.confirm_password}</p>
            ) : null}
          </div>

          <button className="submit" type="submit">
            Submit
          </button>
        </form>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default Signup;
