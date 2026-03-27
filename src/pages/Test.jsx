import React, { useContext } from "react";
import { AuthContext } from "../contexts/authContext";

export default function Test() {
  const { currentUser, profile, isLogin, loading  } = useContext(AuthContext);
  console.log("if user login",isLogin);
  console.log("user profile",profile);
  console.log("my current User" , currentUser);
  console.log("loading" , loading)

  

  return (
    <div>
      <h1>Hay MC context </h1>
    </div>
  );
}
