function Login() {
  return (
    <>
      <form>
        <div class="form-group ps-5 pe-5 mt-3">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            class="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            name="email"
          ></input>
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
            name="password"
          ></input>
        </div>
        <button type="submit" class="btn btn-primary ms-5 mt-3">
          Submit
        </button>
      </form>
    </>
  );
}
export { Login };
