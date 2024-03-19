import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    mobileNumber: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [timer, setTimer] = useState(72000); // 20 hours in seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      setTimer(72000); // Reset timer to 20 hours
    }
  }, [timer]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit form data to backend
      // Implement this part later
      axios
        .post("http://localhost:8080/api/users", formData)
        .then((response) => {
          // Handle successful response
          console.log(response.data);
        })
        .catch((error) => {
          // Handle error
          console.error("Error:", error);
        });
      console.log(formData);
    }
  };

  const validateForm = () => {
    const errors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobilePattern = /^(?!.*(.)\1{9})\d{10}$/;
    const passwordPattern =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])(?=.*[^\dA-Za-z]).{6,}$/;

    if (!formData.username.trim()) {
      errors.username = "Username is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!emailPattern.test(formData.email)) {
      errors.email = "Invalid email format";
    }

    if (!formData.mobileNumber.trim()) {
      errors.mobileNumber = "Mobile number is required";
    } else if (!mobilePattern.test(formData.mobileNumber)) {
      errors.mobileNumber = "Invalid mobile number";
    }

    if (!formData.password.trim()) {
      errors.password = "Password is required";
    } else if (!passwordPattern.test(formData.password)) {
      errors.password = "Invalid password format";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const hours = Math.floor(timer / 3600);
  const minutes = Math.floor((timer % 3600) / 60);
  const seconds = timer % 60;

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="container p-4 border border-primary rounded-3">
          <div className="row">
            <div className="col-md-6">
              <h2 className="mt-4">User Registration</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Username:</label>
                  <input
                    type="text"
                    className={`form-control ${
                      errors.username ? "is-invalid" : ""
                    }`}
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                  {errors.username && (
                    <div className="invalid-feedback">{errors.username}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label">Email:</label>
                  <input
                    type="email"
                    className={`form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label">Mobile Number:</label>
                  <input
                    type="tel"
                    className={`form-control ${
                      errors.mobileNumber ? "is-invalid" : ""
                    }`}
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    required
                  />
                  {errors.mobileNumber && (
                    <div className="invalid-feedback">
                      {errors.mobileNumber}
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label">Password:</label>
                  <input
                    type="password"
                    className={`form-control ${
                      errors.password ? "is-invalid" : ""
                    }`}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
                </div>
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </form>
            </div>
            <div className="col-md-6">
              <div className="timer-container">
                <h2 className="mt-4">Summer Offer Ends In:</h2>
                <p className="timer-text">{`${hours} hours ${minutes} minutes ${seconds} seconds`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
