import { useFormik } from "formik";
import * as yup from "yup";
function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .email("!آدرس ایمیل صحیح نمی باشد")
        .required("!پر کردن این فیلد ضروری می باشد"),
      password: yup
        .string()
        .min(10, "حداقل باید 10 کارکتر باشد!")
        .required("!پر کردن این فیلد ضروری می باشد"),
    }),
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div class="form-group ps-5 pe-5 mt-3">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            class="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            {...formik.getFieldProps("email")}
          ></input>
          {formik.touched.email && formik.errors ? (
            <div className="text-danger">{formik.errors.email}</div>
          ) : null}
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group ps-5 pe-5 mt-3">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="Password"
            {...formik.getFieldProps("password")}
          ></input>
        </div>
        {formik.touched.password && formik.errors ? (
          <div className="ms-5 text-danger">{formik.errors.password}</div>
        ) : null}
        <button type="submit" class="btn btn-primary ms-5 mt-3">
          Submit
        </button>
      </form>
    </>
  );
}
export { Login };