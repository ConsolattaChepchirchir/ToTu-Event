import React, {useState} from "react";
export const Register =(props) =>{
    const [Email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name,setName] = useState('')
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(Email);
    }
    return(
        <div className="auth-form-container">
            <h2>Register</h2>
    <form className="register-form"onSubmit={handleSubmit}>
        <label htmlfor="name">Full Name</label>
        <input value={name} name="name" paceholder="Full Name"/>
        <lable for="Email">Email</lable>
        <input value={Email} onChange={(e)=> setEmail(e.target.value)}type="Email" placeholder="youremail@gmail.com"/>
        <label for="Password">Password</label>
        <input value={pass} onChange={(e)=> setPass(e.target.value)}type="Password" placeholder="*********"/>
        <button type="submit">Login</button>
    </form>
    <button className="link-btn"onClick={() => props.onFormSwitch('Login')}>Don't have an account? Register Here</button>
    </div>
    )
}
export default Register;