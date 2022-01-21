import React from "react";

const LoginPage = ({ loginState }) => {
  return (
    <div>
      {loginState ? (
        <div>
          <h1>You are already logged in!</h1>
        </div>
      ) : (
        <div class="login-box">
          <h1>Login</h1>
          <hr />
          <form method="post">
            <div class="form-grp">
              <label>Username</label>
              <input
                type="text"
                class="form-control"
                placeholder="Username"
                required
              />
            </div>
            <div class="form-grp">
              <label>Password</label>
              <input
                type="text"
                class="form-control"
                placeholder="Password"
                required
              />
            </div>
            <a class="btn">Submit</a>
            <div class="signup_footer">
              <p>
                Don't have an account? <a href="signup.html">Register here</a>
              </p>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
