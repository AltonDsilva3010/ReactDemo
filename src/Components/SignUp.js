import React from "react";

const SignUpPage = ({ loginState }) => {
  return (
    <div>
      {loginState ? (
        <div>
          <h1>You are already logged in!</h1>
        </div>
      ) : (
        <div class="signup-box">
          <h1>Signup</h1>
          <hr />
          <form method="post">
            <div class="panel-body">
              <form action="">
                <div class="form-grp">
                  <label for="name">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email"
                  />
                </div>
                <div class="form-grp">
                  <label for="email">Username</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Username"
                  />
                </div>
                <div class="form-grp">
                  <label for="password">Password</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Password"
                  />
                </div>
                <div class="form-grp">
                  <label for="role">Role</label>
                  <select name="role" class="form-control">
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                  </select>
                </div>
                <div class="form-grp">
                  <label for="id_proof">Upload ID PROOF</label>
                  <input type="file" class="form-control" />
                </div>
                <a class="btn">Submit</a>
              </form>
            </div>

            <div class="signup_footer">
              <p>
                Already have an account?{" "}
                <a href="login.html">Click here to login</a>
              </p>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default SignUpPage;
