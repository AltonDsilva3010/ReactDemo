import React from "react";

const Requests = ({ role }) => {
  return (
    <div>
      {role != "admin" ? (
        <div>
          <h1>You're not allowed to access this page</h1>
        </div>
      ) : (
        <div>
          <h1>Requests</h1>
        </div>
      )}
    </div>
  );
};

export default Requests;
