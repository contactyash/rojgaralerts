import React from "react";
import AdminProvider, { AdminContext } from "../src/components/AdminProvider";
import Tabs from "../src/components/Tabs";
import Form from "../src/components/Form";
import "../src/utils/capitalize";
import Head from "next/head";
import { firebase } from "../src/firebase/firebase";
import Router from "next/router";

class AdminAccess extends React.Component {
  handleLogoutOnClick() {
    firebase
      .auth()
      .signOut()
      .then(() => Router.push("/admin-login", { shallow: true }));
  }

  render() {
    return (
      <AdminProvider>
        <AdminContext.Consumer>
          {context => {
            return (
              <div className="admin">
                <Head>
                  <link rel="stylesheet" href="../static/css/admin.css" />
                  <link
                    rel="stylesheet"
                    href="../static/css/react-day-picker.css"
                  />
                </Head>
                <div className="admin-tabs">
                  <Tabs />
                </div>
                <div>
                  <Form />
                  <button
                    className="logout-btn"
                    type="button"
                    onClick={this.handleLogoutOnClick}
                  >
                    {context.state.access ? "Log Out" : "Log In First"}
                  </button>
                </div>
              </div>
            );
          }}
        </AdminContext.Consumer>
      </AdminProvider>
    );
  }
}
export default AdminAccess;
