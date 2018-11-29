import React from "react";
import Router from "next/router";
import ListView from "./ListView";
const Post = props => {
  const showDetails = () => {
    const currentPage = props.componentName;
    let href =
      currentPage === "latestPosts"
        ? `/?id=${props.id}`
        : `/${currentPage}?id=${props.id}`;
    let as = href;
    Router.push(href, as, { shallow: true });
  };
  return <ListView {...props} showDetails={showDetails} />;
};

export default React.memo(Post);
