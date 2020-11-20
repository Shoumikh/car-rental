import React, { useState } from "react";
import Home from "../Home/Home";
import SignIn from "./SignIn";

function SignInResult() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      {!isSubmitted ? <SignIn submitForm={submitForm}/>  : <Home />}
      {/* {!isSubmitted ? (
        <SignIn submitForm={submitForm} />
      ) : (
        console.log("hoia gse mamma")
      )}
      {console.log(isSubmitted)} */}
    </>
  );
}

export default SignInResult;
