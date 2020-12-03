import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import cars from "../../../cars.js";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    name: "",
    model: "",
    type: "",
    personCapacity: "",
    bagCapacity: "",
    fuelType: "",
    gearType: "",
    price: "",
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
      errors.name !== undefined ||
      errors.model !== undefined ||
      errors.type !== undefined ||
      errors.personCapacity !== undefined ||
      errors.bagCapacity !== undefined ||
      errors.fuelType !== undefined ||
      errors.gearType !== undefined ||
      errors.price !== undefined
      //   ||
      //   errors.phone !== ""
    ) {
      alert(typeof values.bagCapacity);
      setErrors(errors);
    } else {
      console.log("cars 1", cars);
      cars.push({
        // image:
        //   "https://www.cars-data.com/pictures/thumbs/350px/jeep/jeep-wrangler-unlimited_4215_1.jpg",
        name: values.name,
        model: values.model,
        // info:
        //   "Manual Transformation ( CCMP ).Is not Suitable for heighest E-Cards. Has CDW interface",
        personCapacity: values.personCapacity,
        bagCapacity: values.bagCapacity,
        type: values.type,
        fuelType: values.fuelType,
        gearType: values.gearType,
        price: values.price,
      });
      history.push("/carinfo/totalcars");
      console.log("cars 2", cars);
    }
  };
  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
