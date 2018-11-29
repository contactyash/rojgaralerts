import React, { Component } from "react";
import { withRouter } from "next/router";
import { firebase } from "../firebase/firebase";
import * as actions from "../store/index";
export const AdminContext = React.createContext();
class AdminProvider extends Component {
  state = {
    access: null,
    form: {
      id: null,
      componentName: "latestPosts",
      state: "",
      dept: "",
      releaseDate: "",
      startDate: "",
      endDate: "",
      totalPosts: "",
      postName: "",
      maxAge: "",
      minAge: "",
      eduQuals: "",
      officialLink: "",
      pdfLink: "",
      updated: "",
      additional: ""
    }
  };
  //here we are grabing all our actions and binding "this" value;
  actionMethods = actionsObj => {
    return Object.keys(actionsObj).reduce((obj, key) => {
      obj[key] = actionsObj[key].bind(this);
      return obj;
    }, {});
  };
  componentDidMount() {
    this.unListen = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ access: true });
      }
    });
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    return (
      <AdminContext.Provider
        value={{
          state: this.state,
          ...this.actionMethods(actions)
        }}
      >
        {this.props.children}
      </AdminContext.Provider>
    );
  }
}

export default withRouter(AdminProvider);
