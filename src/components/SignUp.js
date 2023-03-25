import React, { useEffect, useState } from "react";
import { validate } from "./validate";

import { ToastContainer } from "react-toastify";
import { notify } from "./toast";
import "react-toastify/dist/ReactToastify.css";
import styles from "./SignUp.module.css";
const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: "false",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setErrors(validate(data));
  }, [data, touched]);

  const changeHandler = (e) => {
    if (e.target.name === "isAccepted") {
      setData({ ...data, [e.target.name]: e.target.checked });
    } else {
      setData({ ...data, [e.target.name]: e.target.value });
    }
  };

  const focusHandler = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!Object.keys(errors).length) {
      notify("you signed up successfully", "success");
    } else {
      notify("Invalid data!", "error");
      setTouched({
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
        isAccepted: true,
      });
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler} className={styles.formContainer}>
        <h2 className={styles.header}>SignUp</h2>

        <div className={styles.formField}>
          <label>Name</label>
          <input
            className={
              errors.name && touched.name
                ? styles.uncompleted
                : styles.formInput
            }
            value={data.name}
            type="text"
            name="name"
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.name && touched.name && <span>{errors.name}</span>}
        </div>

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

        <div className={styles.formField}>
          <label>Confirm Password</label>
          <input
            className={
              errors.confirmPassword && touched.confirmPassword
                ? styles.uncompleted
                : styles.formInput
            }
            value={data.confirmPassword}
            type="password"
            name="confirmPassword"
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.confirmPassword && touched.confirmPassword && (
            <span>{errors.confirmPassword}</span>
          )}
        </div>

        <div className={styles.formField}>
          <div className={styles.checkBoxContainer}>
            <label>I accept terms of privacy policy</label>
            <input
              value={data.isAccepted}
              type="checkbox"
              name="isAccepted"
              onChange={changeHandler}
              onFocus={focusHandler}
            />
          </div>
          {errors.isAccepted && touched.isAccepted && (
            <span>{errors.isAccepted}</span>
          )}
        </div>

        <div className={styles.formButtons}>
          <a href="#">Login</a>
          <button type="submit">Sign up</button>
        </div>
      </form>

      <ToastContainer />
    </div>
  );
};

export default SignUp;
