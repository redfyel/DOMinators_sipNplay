import React from "react";
import { useForm } from "react-hook-form";
import "./Register.css";
import { TbDice6Filled } from "react-icons/tb";

function Register() {
  
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  return (
    <div className="container">

      <h2 className="text-center mx-auto display-3 m-5" id="heading1">Book Your Reservation<TbDice6Filled/> </h2>
      <div className="row">
        <div className="col-11 col-sm-10 col-md-6 mx-auto" >
          <form action="" className="formm fs-5 p-4 mb-5 " onClick={handleSubmit}>
            <div>
              <label htmlFor="username" className="form-label">
                User Name
              </label>
              <input type="text" id="username" className="form-control" />
            </div>

            <div>
              <label htmlFor="email" className="form-label">
                E-Mail
              </label>
              <input type="email" id="email" className="form-control" />
            </div>

            <div>
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input type="password" id="password" className="form-control" />
            </div>

            <button type="submit" id = "butt" className="btn m-5 mx-auto">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
