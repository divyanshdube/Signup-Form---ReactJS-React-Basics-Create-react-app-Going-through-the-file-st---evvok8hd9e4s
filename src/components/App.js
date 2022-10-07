import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  const dataValidate = (event) => {
    event.preventDefault();
    
    var email = document.getElementById
    
  };
  return (
    <div id="main">
      <form onSubmit={dataValidate}>
        <label>Name</label>
        <input type="text" data-testid="name" />
        <br />
        <label>Email Address</label>
        <input type="email" data-testid="email" />
        <br />
        <label>Gender</label>
        <select data-testid="gender" placeholder="Gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <br />
        <label>Phone Number</label>
        <input type="number" data-testid="phoneNumber" /> <br />
        <label>Enter Password</label>
        <input type="password" data-testid="password" /> <br />
        <button type="submit" data-testid="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
