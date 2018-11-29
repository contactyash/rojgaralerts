import { Component } from "react";
import { getData } from "../src/firebase/firebase";
import VisiblePosts from "../src/components/VisiblePosts";
import Filters from "../src/components/Filters";
import ShareHeader from "../src/components/ShareHeader";
import { withRouter } from "next/router";
import SetDocumentTitle from "../src/components/SetDocumentTitle";
import DetailView from "../src/components/DetailView";
class AdmitCards extends Component {
  state = {
    filterString: "",
    stateFilterString: ""
  };
  handleFilter = filterString => {
    if (filterString) {
      this.setState(() => ({
        stateFilterString: "",
        filterString
      }));
    } else {
      this.setState(() => ({ filterString: "", stateFilterString: "" }));
    }
  };
  //we can not predict argument is statefilterstring or fitterstrig ,so below two function
  //cant be combined
  handleStateFilter = stateFilterString => {
    if (stateFilterString) {
      this.setState({ filterString: "", stateFilterString });
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
          visiblePosts={this.props.admitCards}
          filterString={this.state.filterString}
          stateFilterString={this.state.stateFilterString}
          admin={false}
        />
      </ShareHeader>
    );
  }
}

const AdmitPage = props => {
  const { pathname, query } = props.router;
  const { admitCards } = props;
  let detailsOf = [];
  detailsOf = admitCards.filter(post => (query.id === post.key ? post : false));

  return pathname === "/admitCards" && !Object.keys(query).length ? (
    <AdmitCards admitCards={props.admitCards} />
  ) : detailsOf[0] ? (
    <SetDocumentTitle title={`${detailsOf[0].dept},${detailsOf[0].postName}`}>
      <DetailView {...detailsOf[0]} />
    </SetDocumentTitle>
  ) : (
    <p>nothing on admitcards' this page</p>
  );
};

AdmitPage.getInitialProps = async () => {
  return await getData("admitCards");
};
export default withRouter(AdmitPage);
