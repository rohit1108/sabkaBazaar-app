import React from "react";

import Heading from '../../molecules/headings/Heading'
import InputItem from '../../molecules/inputItems/InputItem'
import Button from '../../atoms/FormButton/Button'
import useForm from "../../../utils/useFormLogin";
import "./loginbody.scss"
const LoginBody=()=>{
    const { formValues, setFormValues, handleSubmit, formErrors} = useForm();
    return(
        <div className="login-body">

            <Heading  heading="Login" className="login-heading login-child" children="Get access to your Orders, Wishlist and Recommendations"/>
            
            <form onSubmit={handleSubmit} className="login-form login-child" autoComplete="off">
                <InputItem 
                    type="text" 
                    id="user-email" 
                    name="email" 
                    label="Email" 
                    className="" 
                    onChange={(event) =>
                        setFormValues({ ...formValues, email: event.target.value })
                        } values={formValues.email} errors={formErrors.email}/>
                <InputItem 
                    type="password" 
                    id="user-password" 
                    name="password" 
                    label="Password" 
                    className="" 
                    onChange={(event) => setFormValues({ ...formValues, password: event.target.value })
                    }
                     values={formValues.password} errors={formErrors.password}/>
                <Button>Login</Button>
               
            </form>
        </div>
    )
}
export default LoginBody;