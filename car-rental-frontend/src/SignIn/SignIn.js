import React, { useState } from "react";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import "./SignIn.css";
import { Formik } from "formik";
import * as EmailValidator from "email-validator"; // used when validating with a self-implemented approach
import * as Yup from "yup"; // used when validating with a pre-built solution
import { Link, useHistory } from "react-router-dom";
import validate from "./validateInfo";
import useForm from "./useForm";
import Home from "../Home/Home";

const SignIn = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  const history = useHistory();

  return (
    <div className="login">
      <h2 className="login__logo">Bengal</h2>
      <div className="login__infoBox">
        <h2>Sign-In</h2>

        <form className="login__option" onSubmit={handleSubmit} noValidate>
          <p>Email</p>
          {/* <input
            type="text"
            name="email"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            /> */}

          <input
            className="form-input"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="login__inputFeedback">{errors.email}</p>
          )}

          <p>Password</p>
          {/* <input
            type="password"
            name="password"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          /> */}

          <input
            className="form-input"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && (
            <p className="login__inputFeedback">{errors.password}</p>
          )}

          <button type="submit">Sign In</button>
        </form>

        <div className="login__infoBottom">
          <div className="login__condition">
            <span>
              By Signing in, you agree to Bengal Car Rental's Conditions of Use
              and Privacy Notice.
            </span>
          </div>
          <div className="login__help">
            <NavigateNextIcon fontSize="small" />
            <p>Need help?</p>
          </div>
        </div>
      </div>
      <p className="login__newToAmazon">New to Bengal Car Rental?</p>
      <Link to="/registration">
        <button className="login__buttonCreateAccount">Register</button>
      </Link>
    </div>
  );
};

export default SignIn;
