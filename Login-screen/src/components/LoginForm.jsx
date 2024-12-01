import React from "react";


export default function LoginForm(){
    return(

        <div className="d-flex align-items-center justify-content-center vh-100 bg-info">
        <div className="form-group d-flex flex-column gap  card col-md-5 shadow-sm rounded p-4 ">
  <h1 className="text=center">User Login</h1>
  <div className="">
    <label
      htmlFor="name"
      className="col-sm col-form-label col-form-label-sm"
    >
      Username
    </label>
    <input
      type="text"
      name="username"
      className="form-control col-md "
      placeholder="Username"
    />
  </div>
  <div className="">
    <label
      htmlFor="password"
      className="col-sm col-form-label col-form-label-sm"
    >
      Password
    </label>
    <input
      type="password"
      name="password"
      className="form-control col-md"
      placeholder="Password"
    />
  </div>
  <button type="submit" className="form-control  col-md-2 btn btn-primary bg-info">
    Submit
  </button>
</div>
        </div>
    );
}