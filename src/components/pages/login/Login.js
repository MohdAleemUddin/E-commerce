import "./Login.css";
let Login = () => {
  return (
    <>
      <div className="body">
        <div className="loginContainer">
          <h4 className="Heading"> Login </h4>
          <form>
            <div className="block">
              <label name="username">User name </label>
              <input className=" logininput" type="text" />
            </div>
            <br />
            <div className="block">
              <label name="password"> Password </label>
              <input className=" logininput" type="password" />
            </div>
            <br />
            <button className="button">continue</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
