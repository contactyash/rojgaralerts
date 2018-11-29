import React from "react";
import { arrowUpIcon } from "../assets/svg";
import Header from "./Header";
import Share from "./Share";

//Ok, to show admit cards ,latestposts and results with one component i did this
// maybe not best practice
const DetailView = props => {
  const {
    dept,
    componentName,
    startDate,
    endDate,
    releaseDate,
    postName,
    maxAge,
    minAge,
    totalPosts,
    eduQuals,
    officialLink,
    pdfLink,
    updated,
    addtional
  } = props;
  let flag = true;
  if (componentName !== "latestPosts") {
    flag = false;
  }
  const title = (
    <div className="dept-name">
      <div>
        <h3>{dept}</h3>
      </div>
      <div>{arrowUpIcon}</div>
    </div>
  );
  const dates = (
    <div className="dates">
      {releaseDate ? (
        <div className="releaseDate">
          <h5>Released Date:- {releaseDate}</h5>
        </div>
      ) : null}
      {flag ? (
        <div className="dates-start-end">
          <div className="starts">
            <h5>
              <span>
                Starts:
                {startDate}
              </span>
            </h5>
          </div>
          <div className="ends">
            <h5>
              <span>
                Ends:
                {endDate}
              </span>
            </h5>
          </div>
        </div>
      ) : null}
    </div>
  );
  const posts = (
    <div className="total-posts">
      <h5>
        Total Posts:
        {totalPosts}
      </h5>
    </div>
  );
  const postTitle = (
    <div className="post">
      <h4>{postName}</h4>
    </div>
  );
  const quals = (
    <div className="qualifications">
      <div className="age">
        <div className="age-heading">
          <h5>
            <span>Age(Gen)</span>
          </h5>
        </div>
        {maxAge ? (
          <div className="age-details">
            <div className="age-sub-heading">
              <p>{minAge ? `Min:- ${minAge}` : undefined}</p>
            </div>
            <div className="age-sub-heading">
              <p>{maxAge ? `Max:-${maxAge}` : undefined}</p>
            </div>
          </div>
        ) : (
          <div>
            <p>Check PDF For Age Details</p>
          </div>
        )}
      </div>
      <div className="education">
        <div className="edu-heading">
          <h5>
            <span>Education</span>
          </h5>
        </div>
        <div className="edu-quals">
          <p>
            {eduQuals ? eduQuals : "different for different posts,check Pdf"}
          </p>
        </div>
      </div>
    </div>
  );
  const links = (
    <div className="links">
      <div className="official-site">
        <a href={officialLink ? officialLink : null} target="_blank">
          Official Site
        </a>
      </div>
      {pdfLink ? (
        <div className="pdf">
          <a href={pdfLink} target="_blank">
            Detail PDF
          </a>
        </div>
      ) : null}
    </div>
  );
  const updates = (
    <div className="updates">
      <p>
        <span>{updated ? updated : null}</span>
      </p>
    </div>
  );
  const addtionals = (
    <div className="addtionals">
      <p>
        <span>{addtional ? addtional : null}</span>
      </p>
    </div>
  );
  return (
    <div className="detailsPage">
      <Header />
      <div className="details-box">
        {title}
        <div className="details-content">
          {startDate || releaseDate ? dates : null}
          {flag && totalPosts ? posts : null}
          {postTitle}
          {flag ? quals : null}
          {links}
          {updates}
          {addtionals}
        </div>
      </div>
      <Share message={postName} />
    </div>
  );
};
export default DetailView;
