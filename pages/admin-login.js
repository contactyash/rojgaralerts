import React, { Component } from "react";
import { firebase } from "../src/firebase/firebase";
import Router from "next/router";

class AdminLogin extends Component {
  handleOnLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === "auth/wrong-password") {
          alert("Wrong password.");
        } else {
          alert(errorMessage);
        }
        console.log(error);
        return errorCode;
      })
      .then(res => {
        if (res === "auth/wrong-password") return;
        const href = `/admin-access`;
        const as = href;
        Router.push(href, as);
      });
  };
  render() {
    return (
      <div>
        <form onSubmit={e => this.handleOnLogin(e)}>
          <input type="email" placeholder="email" name="email" />
          <input type="password" name="password" />
          <button type="submit">login</button>
        </form>
      </div>
    );
  }
}
export default AdminLogin;
