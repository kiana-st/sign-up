import React, { useEffect, useState } from "react";
import { validate } from "./validate";

import { ToastContainer } from "react-toastify";
import { notify } from "./toast";
import "react-toastify/dist/ReactToastify.css";
import styles from "./SignUp.module.css";
import { Link } from 'react-router-dom';

const Login = () => {

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setErrors(validate(data,"login"));
  }, [data, touched]);

  const changeHandler = (e) => {
      setData({ ...data, [e.target.name]: e.target.value });
  };

  const focusHandler = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!Object.keys(errors).length) {
      notify("you loged in successfully", "success");
    } else {
      notify("Invalid data!", "error");
      setTouched({
        email: true,
        password: true,
      });
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler} className={styles.formContainer}>
        <h2 className={styles.header}>Login</h2>

        <div className={styles.formField}>
          <label>Email</label>
          <input
            className={
              errors.email && touched.email
                ? styles.uncompleted
                : styles.formInput
            }
            value={data.email}
            type="text"
            name="email"
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.email && touched.email && <span>{errors.email}</span>}
        </div>

        <div className={styles.formField}>
          <label>Password</label>
          <input
            className={
              errors.password && touched.password
                ? styles.uncompleted
                : styles.formInput
            }
            value={data.password}
            type="password"
            name="password"
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.password && touched.password && (
            <span>{errors.password}</span>
          )}
        </div>

        <div className={styles.formButtons}>
          <Link to="/signup">Sign up</Link>
          <button type="submit">Login</button>
        </div>
      </form>

      <ToastContainer />
    </div>
  );
};

export default Login;
