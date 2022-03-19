import "./App.css";

function App() {
  return (
    <div className="container">
      <form>
        <h1>Login Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label htmlFor="">Username</label>
            <input type="text" name="username" placeholder="Username" />
          </div>
          <div className="field">
            <label htmlFor="">Email</label>
            <input type="email" name="email" placeholder="Email" />
          </div>
          <div className="field">
            <label htmlFor="">Password</label>
            <input type="password" name="password" placeholder="Password" />
          </div>
          <button className="fluid ui buttont blue">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
