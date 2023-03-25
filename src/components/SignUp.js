import React, {useEffect, useState} from 'react';
import {validate} from "./validate";

import {ToastContainer} from "react-toastify";
import {notify} from "./toast";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        isAccepted: "false"
    });

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});


    useEffect(() => {

        setErrors(validate(data))

    }, [data, touched])

    const changeHandler = (e) => {
        if (e.target.name === "isAccepted") {

            setData({...data, [e.target.name]: e.target.checked})
        } else {

            setData({...data, [e.target.name]: e.target.value})
        }
    }

    const focusHandler = (e) => {
        setTouched({...touched, [e.target.name]: true})
    }

    const submitHandler = (e) => {
        e.preventDefault()
        if (!Object.keys(errors).length) {
            notify("you signed in successfully", "success")
        } else {
            notify("Invalid data!", "error")
            setTouched({
                name: true,
                email: true,
                password: true,
                confirmPassword: true,
                isAccepted: true,
            })
        }
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <h2>SignUp</h2>
                <div>
                    <label>Name</label>
                    <input value={data.name} type="text" name="name" onChange={changeHandler} onFocus={focusHandler}/>
                    {errors.name && touched.name && <span>{errors.name}</span>}
                </div>

                <div>
                    <label>Email</label>
                    <input value={data.email} type="text" name="email" onChange={changeHandler} onFocus={focusHandler}/>
                    {errors.email && touched.email && <span>{errors.email}</span>}

                </div>

                <div>
                    <label>Password</label>
                    <input value={data.password} type="password" name="password" onChange={changeHandler}
                           onFocus={focusHandler}/>
                    {errors.password && touched.password && <span>{errors.password}</span>}

                </div>

                <div>
                    <label>Confirm Password</label>
                    <input value={data.confirmPassword} type="password" name="confirmPassword" onChange={changeHandler}
                           onFocus={focusHandler}/>
                    {errors.confirmPassword && touched.confirmPassword && <span>{errors.confirmPassword}</span>}

                </div>

                <div>
                    <label>I accept terms of privacy policy</label>
                    <input value={data.isAccepted} type="checkbox" name="isAccepted" onChange={changeHandler}
                           onFocus={focusHandler}/>
                    {errors.isAccepted && touched.isAccepted && <span>{errors.isAccepted}</span>}

                </div>

                <div>
                    <a href="#">Login</a>
                    <button type="submit">Sign up</button>
                </div>
            </form>

            <ToastContainer/>
        </div>
    );
};

export default SignUp;