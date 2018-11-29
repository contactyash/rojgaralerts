import { Component } from "react";
import VisiblePosts from "../src/components/VisiblePosts";
import Filters from "../src/components/Filters";
import ShareHeader from "../src/components/ShareHeader";
import { withRouter } from "next/router";
import { getData } from "../src/firebase/firebase";
import DetailView from "../src/components/DetailView";
import SetDocumentTitle from "../src/components/SetDocumentTitle";

//we are fetching all latest posts from firebase
//and sending all data  for index page
//when somebody clicks on post for  detail view we are again making request to same index page but
//this time we only sending queried data
//we are using nextjs' shallow routing feature
//bcoz of which getinitialprops function is not called everytime

class Index extends Component {
  state = {
    filterString: "",
    stateFilterString: ""
  };
  handleFilter = (filterText, isActive) => {
    if (isActive) {
      this.setState(() => ({ filterString: filterText }));
    } else {
      this.setState(() => ({ filterString: "", stateFilterString: "" }));
    }
  };
  handleStateFilter = (filterObj, isActive) => {
    if (isActive) {
      this.setState(() => filterObj);
    } else {
      this.setState(() => ({ filterString: "", stateFilterString: "" }));
    }
  };
  render() {
    return (
      <ShareHeader>
        <Filters
          handleFilter={this.handleFilter}
          handleStateFilter={this.handleStateFilter}
        />
        <VisiblePosts
          visiblePosts={this.props.latestPosts}
          filterString={this.state.filterString}
          stateFilterString={this.state.stateFilterString}
        />
      </ShareHeader>
    );
  }
}

//below component returns queried data wrapped in detailview component or index compo
const Page = props => {
  const { pathname, query } = props.router;
  const { latestPosts } = props;
  let detailsOf = [];
  detailsOf = latestPosts.filter(post =>
    query.id === post.key ? post : false
  );
  return pathname === "/" && !Object.keys(query).length ? (
    <Index latestPosts={latestPosts} />
  ) : detailsOf[0] ? (
    <SetDocumentTitle title={`${detailsOf[0].dept},${detailsOf[0].postName}`}>
      <DetailView {...detailsOf[0]} />
    </SetDocumentTitle>
  ) : (
    <p>I have no Idea what is going on</p>
  );
};
Page.getInitialProps = async () => {
  //we fetch data from firebase and map to props of Page component;
  return await getData("latestPosts");
};
export default withRouter(Page);
