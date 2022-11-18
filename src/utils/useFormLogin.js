import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../service/Auth";

function useForm() {
const navigate = useNavigate();
  const initialvalues = {
   
    email: "",
    password: "",
  
  };
  const [formValues, setFormValues] = useState({initialvalues});
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    login(formValues);
  };
  const getEmail = () => {
    return localStorage.getItem("EMAIL");
};
const removeEmail = () => {
    localStorage.removeItem("EMAIL");
};

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
        navigate("/home");
        
        console.log(formValues);
    }
  }, [formErrors, formValues, navigate, isSubmit]);
  const validate = (values) => {
    const errors = {};
    const emailRegex = /[a-z0-9]+@[a-z]+.[a-z]{2,3}/;
    const passwordRegex = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
    
   
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "This is not a valid email format";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (!passwordRegex.test(values.password)) {
      errors.password = "Credentails are incorrect";
    }
    return errors;
  };

  return {  validate, formValues,  setFormValues, formErrors, isSubmit, handleSubmit, getEmail,removeEmail };
}
export default useForm;