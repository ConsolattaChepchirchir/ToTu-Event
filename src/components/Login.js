import React, {useState} from "react";
import {Navigate} from "react-router-dom";

export const Login =(props) =>{

    const [Email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [logIn, setLogIn]= useState('');
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(Email);
    }

    function  handleClick(){
       setLogIn(true);
    };

    if (logIn){
        return <Navigate to ="/events"/>
    }
   
    return(
        
        <div className="auth-form-container">
            
            <h1>Login</h1>
    <form className="login-form"onSubmit={handleSubmit}>
        <label for="Email">Email</label>
        <input value={Email} onChange={(e)=> setEmail(e.target.value)}type="Email" placeholder="youremail@gmail.com"/>
        <label for="Password">Password</label>
        <input value={pass} onChange={(e)=> setPass(e.target.value)}type="Password" placeholder="*********"/>
        <button onClick={handleClick}type="submit">Login</button>
    </form>
    <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register Here</button>
    </div>
    )
}
export default Login;