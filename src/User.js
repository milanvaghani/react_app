import React from "react";
import { useLocation, useNavigate, useParams} from "react-router-dom";

const User = () => {
  const { fname, lname } = useParams();
  const location = useLocation();
  const history = useNavigate();
  console.log(history);
  return (
    <>
      <h1>
        User {fname} {lname} Page
      </h1>
      <p>My Current Location Is {location.pathname}</p>
      {location.pathname === `/user/Milan/Vaghani` ? (
        <button onClick={() =>history('/')}>CLick Me</button>
      ) : null}
    </>
  );
};

export default User;
