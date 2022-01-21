import React from "react";

const Header = ({ role }) => {
  return (
    <header>
      <nav class="navbar">
        <ul>
          <div class="textleft">
            <a href="/">JustGoogleIt</a>
          </div>
          <li>
            <a href="signup">Signup</a>
          </li>
          <li>
            <a href="login">Login</a>
          </li>
          <li>{!role === "admin" && <a href="mylearning">My Learning</a>}</li>
          <li>{!role === "admin" && <a href="signup">Buy a course</a>}</li>
          <li>{role === "admin" && <a href="requests">Requests</a>}</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
