function App() {
  return (
    <form>
      <div>
        <label className="form-control" htmlFor="Email">
          Email :
        </label>
        <input className="form-control" type="text" id="Email"></input>
      </div>
      <div>
        <label htmlFor="password">Password :</label>
        <input type="text" id="password"></input>
      </div>
      <button className="btn btn-primary">Login</button>
    </form>
  );
}

export default App;
