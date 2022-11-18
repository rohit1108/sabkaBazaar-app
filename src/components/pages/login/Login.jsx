import React from "react";
import LoginBody from "../../organisms/signinBody/LoginBody"
import Navbar from "../../organisms/Navbar/Navbar";
import "./login.scss";
import Helmet from "react-helmet";

const Login =()=>{
    return(
        <>
         <Helmet>
            <meta charSet="utf-8" />
            <meta name="description" content="You can view different offers on the prducts and different categories of product." />
            <title>Login</title>
          </Helmet>
        <Navbar isAuth={false}/>
        <LoginBody/>
        </>
    )
    }
export default Login;