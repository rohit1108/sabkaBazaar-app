import React from "react";

import Heading from "../../molecules/headings/Heading";
import InputItem from "../../molecules/inputItems/InputItem";
import Button from "../../atoms/FormButton/Button";
import useForm from "../../../utils/useForm";
import "./registerbody.scss";
const RegisterBody = () => {
    const { formValues, setFormValues, handleSubmit, formErrors } = useForm();
    return (
        <div className="register-body">

            <Heading heading="Signup" className="register-heading register-child" children="We do not share your personal details wiith anyone." />

            <form onSubmit={handleSubmit} className="register-form register-child" autoComplete="off" >

                <InputItem 
                    type="text" 
                    id="fname" 
                    label="First Name" 
                    className="" 
                    onChange={(event) =>setFormValues({ ...formValues, firstName: event.target.value })} 
                    values={formValues.firstName} errors={formErrors.firstName}
                />

                <InputItem 
                    type="text"     
                    id="lname" 
                    label="Last Name" 
                    className="" 
                    onChange={(event) =>setFormValues({ ...formValues, lastName: event.target.value })} 
                    values={formValues.lastName} errors={formErrors.lastName}
                />

                <InputItem 
                    type="text" 
                    id="email" 
                    label="Email" 
                    className="" 
                    onChange={(event) =>setFormValues({ ...formValues, email: event.target.value })} 
                    values={formValues.email} errors={formErrors.email} 
                />

                <InputItem 
                    type="password" 
                    id="password" 
                    label="Password" 
                    hint = "&nbsp; Example: pass123"
                    className="" 
                    onChange={(event) =>setFormValues({ ...formValues, password: event.target.value })} 
                    values={formValues.password} errors={formErrors.password}
                />

                <InputItem 
                    type="password" 
                    id="cpassword" 
                    label="Confirm Password" 
                    className="" 
                    onChange={(event) =>setFormValues({ ...formValues, confirmPassword: event.target.value })} values={formValues.confirmPassword} errors={formErrors.confirmPassword}
                />

                <Button>Signup</Button>
               
            </form>
        </div>
    )
}
export default RegisterBody;