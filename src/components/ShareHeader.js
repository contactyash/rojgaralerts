import React from "react";
// import Link from "next/link";
import Link from "./ActiveLink";
import Header from "./Header";
const ShareHeader = props => (
  <div className="app">
    <Header />
    <nav>
      <Link activeClassName="active" href="/">
        <a>LatestPosts</a>
      </Link>
      <Link activeClassName="active" href="/admitCards">
        <a>Admit Cards</a>
      </Link>
      <Link activeClassName="active" href="/results">
        <a>Results</a>
      </Link>
    </nav>
    {props.children}
  </div>
);
export default ShareHeader;
