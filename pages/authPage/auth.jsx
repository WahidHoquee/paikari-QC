import React from "react";


const Auth = () => {

    return (
      <div>
        <div className="backgroundLogin"> </div>
        <div className="LoginBox">
          <div className="mercury-logologin" />
          <form>
            <div className="UserLogin">
              <label htmlFor="userName" className="control-Element">
                Username
              </label>
              <input
                type="email"
                className="login-control"
                id="userName"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="UserLogin">
              <label htmlFor="userpassword" className="control-Element">
                Password
              </label>
              <input
                type="password"
                className="login-control"
                id="userpassword"
              />
            </div>
            <input type="submit" className="submitLogin" value="Login" />
            <div className="Login-forgetRegister">
              <a className="registerUser float-left" href="">
                Register
              </a>
              <a className="forgetPassword float-right" href="">
                Forget Password ?
              </a>
            </div>
          </form>
          <div className="clear" />
        </div>

        <div className="mercuryCopyright">
          <div className="container-fluid">
            <div className="mercuryCopyLeft">
              <a href="">Mercury</a>
              <a href="">About us</a>
              <a href="">Blog</a>
            </div>

            <div className="mercuryCopyRight">
              © 2019, Mercury, A product of <a href="">SCC Online.</a>
            </div>
          </div>
        </div>
      </div>
    );
  
}
export default Auth;
