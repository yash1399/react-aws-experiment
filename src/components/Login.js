import React, { useState } from 'react';

import axios from 'axios';



const Login = () => {
    
    const [email, setEmail] = useState();
    const [password, setPassword] = useState(); 
  


    

    const onSubmit =  async (event) => {
        event.preventDefault();
        console.log('dont reload',email, password,);
        const res = await axios.post('http://api.ybcreates.ml/login ',{
            email,
            password,
   
        })
        localStorage.setItem('token', res.data.token);

    }

    const onClickPro = async () => {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://api.ybcreates.ml/protected', {
            headers :{
                token
            }
        });
        console.log(res)

    }



    return (
        <>
            <h1> User Login</h1>
            <form onSubmit = {onSubmit}>
                <div>
                    <label>Email</label> 
                    <input
                    value= {email} 
                    onChange = {(e) => {setEmail(e.target.value)}}
                    type="email" placeholder="Enter your email id"/>
                </div>
                <div>
                    <label>Password</label>
                    <input 
                    value= {password} 
                    onChange = {(e) => {setPassword(e.target.value)}}
                    type="password" placeholder="Enter password"/>
                </div>
              
                <div>
                    <button type="submit">Submit</button>
                </div>       
                <div>
                    <button type="submit" onClick = {onClickPro}>Check Protected</button>
                </div>                             
            </form> 
        </>
    );
};



export default Login;