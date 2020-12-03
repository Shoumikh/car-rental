import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
  });
  const history = useHistory();
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = validate(values);

    if (
      errors.username !== undefined ||
      errors.email !== undefined ||
      errors.password !== undefined
      //   ||
      //   errors.phone !== ""
    ) {
      alert(("email ", errors.email));
      alert(("password ", errors.password));
      setErrors(errors);
    } else {
      history.push("/");
    }
  };
  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
