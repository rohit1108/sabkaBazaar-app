import React from "react";
import RegisterBody from '../../organisms/signupBody/RegisterBody';
import "./register.scss";
import Navbar from "../../organisms/Navbar/Navbar"
import Helmet from "react-helmet";
const Register =()=>{
    return(
        <>
        <Helmet>
            <meta charSet="utf-8" />
            <meta name="description" content="You can view different offers on the prducts and different categories of product." />
            <title>Register</title>
        </Helmet>
        <Navbar isAuth={false}/>
        <RegisterBody/>
        </>
    )
    }
export default Register;