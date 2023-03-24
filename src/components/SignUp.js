import React, { useState } from 'react';

const SignUp = () => {
    const [data,setData] = useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:"",
        isAccepted:"false"
    })
    const changeHandler = (e) =>{
        if(e.target.name === "isAccepted"){

            setData({...data,[e.target.name]: e.target.checked})
        }else{
            
            setData({...data,[e.target.name]:e.target.value})
        }
    }
    
    console.log(data);
    return (
        <div>
            <form>
                <h2>SignUp</h2>
                <div>
                    <label>Name</label>
                    <input value={data.name} type="text" name="name" onChange={changeHandler}/>
                </div>

                 <div>
                    <label>Email</label>
                    <input value={data.email} type="text" name="email" onChange={changeHandler}/>
                </div>

                <div>
                    <label>Password</label>
                    <input value={data.password} type="text" name="password" onChange={changeHandler}/>
                </div>

                <div>
                    <label>Confirm Password</label>
                    <input value={data.confirmPassword} type="text" name="confirmPassword" onChange={changeHandler}/>
                </div>

                <div>
                    <label>I accept terms of privacy policy</label>
                    <input value={data.isAccepted} type="checkbox" name="isAccepted" onChange={changeHandler}/>
                </div>

                <div>
                    <a href="#">Login</a>
                    <button type="submit">Sign up</button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;