import React, { useState } from "react";
import "./Registration.css";
import { Formik } from "formik";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import * as EmailValidator from "email-validator"; // used when validating with a self-implemented approach
import * as Yup from "yup"; // used when validating with a pre-built solution
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const Registration = () => (
  <Formik
    initialValues={{ email: "", password: "" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Logging in", values);
        setSubmitting(false);
      }, 500);
    }}
    validationSchema={Yup.object().shape({
      email: Yup.string().email().required("Required"),
      password: Yup.string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/(?=.*[0-9])/, "Password must contain a number."),
    })}
  >
    {(props) => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
      } = props;

      return (
        <div className="registration">
          {/* <Link to="/">
        <img className="registration__logo" src={amazon_logo_black} alt="" />
      </Link> */}
          <h2 className="registration__logo">Bengal</h2>

          <div className="registration__infoBox">
            <h2>Register</h2>
            <form className="registration__option" onSubmit={handleSubmit}>
              <p>Name</p>
              {/* <input
                type="text"
                name="email"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
              /> */}
              <input
                id="email"
                name="name"
                type="text"
                // value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <p>Email</p>
              {/* <input
                type="text"
                name="email"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
              /> */}
              <input
                id="email"
                name="email"
                type="text"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.email && touched.email && "error"}
              />
              {errors.email && touched.email && (
                <div className="registration__inputFeedback">
                  {errors.email}
                </div>
              )}

              <p>Password</p>
              {/* <input
                type="password"
                name="password"
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
              /> */}

              <input
                id="password"
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.password && touched.password && "error"}
              />
              {errors.password && touched.password && (
                <div className="registration__inputFeedback">
                  {errors.password}
                </div>
              )}

              <p>Phone Number</p>
              <PhoneInput
                className="registration__phone"
                international
                defaultCountry="BD"
                // value={value}
                // onChange={setValue}
              />

              <button type="submit" disabled={isSubmitting}>
                Register
              </button>
            </form>
          </div>
        </div>
      );
    }}
  </Formik>
);

export default Registration;
