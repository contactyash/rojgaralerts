import { Component } from "react";
import { getData } from "../src/firebase/firebase";
import VisiblePosts from "../src/components/VisiblePosts";
import Filters from "../src/components/Filters";
import ShareHeader from "../src/components/ShareHeader";
import { withRouter } from "next/router";
import SetDocumentTitle from "../src/components/SetDocumentTitle";
import DetailView from "../src/components/DetailView";
class Results extends Component {
  state = {
    filterString: "",
    stateFilterString: ""
  };

  handleFilter = (filterText, isActive) => {
    if (isActive) {
      this.setState(() => ({ filterString: filterText }));
    } else {
      this.setState(() => ({ filterString: "" }));
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
          visiblePosts={this.props.results}
          filterString={this.state.filterString}
          stateFilterString={this.state.stateFilterString}
          admin={false}
        />
      </ShareHeader>
    );
  }
}

const ResultPage = props => {
  const { pathname, query } = props.router;
  const { results } = props;
  let detailsOf = [];
  detailsOf = results.filter(post => (query.id === post.key ? post : false));

  return pathname === "/results" && !Object.keys(query).length ? (
    <Results results={props.results} />
  ) : detailsOf[0] ? (
    <SetDocumentTitle title={`${detailsOf[0].dept},${detailsOf[0].postName}`}>
      <DetailView {...detailsOf[0]} />
    </SetDocumentTitle>
  ) : (
    <p>loading........</p>
  );
};

ResultPage.getInitialProps = async () => {
  return await getData("results");
};
export default withRouter(ResultPage);
