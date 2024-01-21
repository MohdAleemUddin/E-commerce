import "./SignIn.css";

let SignIn = () => {
  return (
    <>
      <div className="body">
        <div className="signinContainer">
          <h4 className="Heading"> Signin </h4>
          <form>
            <div className="block">
              <label name="username"> Name</label>
              <input className=" signininput" type="text" />
            </div>
            <br />
            <div className="block">
              <label name="username">Phone/Email </label>
              <input className=" signininput" type="text" />
            </div>
            <br />
            <div className="block">
              <label name="password"> Password </label>
              <input className=" signininput" type="password" />
            </div>
            <br />
            <button className="button">continue</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
