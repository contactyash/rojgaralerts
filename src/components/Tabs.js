import React from "react";
import database from "../firebase/firebase";
import Filters from "./Filters";
import VisiblePosts from "./VisiblePosts";
class Tabs extends React.PureComponent {
  state = {
    activeIndex: 0,
    tabs: ["latestPosts", "admitCards", "results"],
    latestPosts: [],
    admitCards: [],
    results: [],
    filterString: "",
    stateFilterString: ""
  };
  //since this is going to be only admin area we are loading data with live changes
  loadLiveData = () => {
    const { activeIndex, tabs } = this.state;
    const tabName = tabs[activeIndex];
    database.ref(tabName).on("value", snapshot => {
      const newContent = [];
      //this forEach is firebase specific,map will not work here
      snapshot.forEach(childSnapshot => {
        newContent.push({
          key: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      this.setState({ [tabName]: newContent });
    });
  };
  componentDidMount() {
    this.loadLiveData();
  }

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
  selectActiveTab(index) {
    this.setState({ activeIndex: index }, () => {
      const { tabs, activeIndex } = this.state;
      if (this.state[tabs[activeIndex]].length === 0) {
        this.loadLiveData();
      }
    });
  }
  renderTabNames() {
    const tabNames = ["Latests Govt Jobs", "Admit Cards", "Results"];
    return tabNames.map((el, i) => {
      const isActive = this.state.activeIndex === i;
      return (
        <div
          key={i}
          className={isActive ? "active-tab-name" : "tab-name"}
          onClick={() => this.selectActiveTab(i)}
        >
          <h2> {el}</h2>
        </div>
      );
    });
  }

  render() {
    const { tabs, filterString, stateFilterString, activeIndex } = this.state;
    const activeTabArr = this.state[tabs[activeIndex]];
    return (
      <div>
        <div className="tab-names">{this.renderTabNames()}</div>
        <Filters
          handleFilter={this.handleFilter}
          handleStateFilter={this.handleStateFilter}
        />
        <div className="tab-content">
          <VisiblePosts
            visiblePosts={activeTabArr}
            filterString={filterString}
            stateFilterString={stateFilterString}
          />
        </div>
      </div>
    );
  }
}
export default Tabs;
