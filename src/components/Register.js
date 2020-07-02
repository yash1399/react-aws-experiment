
import React, { useState } from 'react';

import axios from 'axios';



const Register = () => {
    const [name , setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState(); 
    const [gender, setGender] = useState(); 


    

    const onSubmit =  async (event) => {
        event.preventDefault();
        console.log('dont reload', name + email, password, gender);
        const res = await axios.post('http://api.ybcreates.ml/user',{
            name,
            email,
            password,
            gender
        })
        console.log(res);

    }



    return (
        <>
            <h1> User resgistration</h1>
            <form onSubmit = {onSubmit}>
               
                <div>
                    <label>Name</label>
                    <input 
                    value= {name}
                    type="text" onChange ={(e)=> {setName(e.target.value)}}
                    placeholder="Enter your name" /> 
                </div>
               
                
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
                    type="password" placeholder="Create new password"/>
                </div>
              
               <div>
                <form>
                        <label>Gender</label>
                        <select  onChange = {(e) => {setGender(e.target.value)}} value={gender}>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>  
                 </form>
                </div> 
                <div>
                    <button type="submit">Submit</button>
                </div>   
               
                            
            </form> 
        </>
    );
};



export default Register;
