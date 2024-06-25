import React, { useState } from "react";

export default function Login() {
  const [login, setlogin] = useState({ username: "", password: "" });
  const changeHandler = (e) => {
    setlogin({ ...login, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => e.preventDefault();
  console.log(login);
  return (
    <div>
      <h1>login page</h1>
      <form onSubmit={submitHandler}>
        <input
          onChange={changeHandler}
          name="username"
          type="text"
          placeholder="username"
        />
        <input
          onChange={changeHandler}
          name="password"
          type="password"
          id=""
          placeholder="password"
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}
