import React from "react";

class Filters extends React.PureComponent {
  state = {
    isActive: true,
    isStateActive: true,
    isStateWiseFilter: false,
    activeIndex: "",
    activeStateIndex: "",
    tabNames: ["SSC", "BANK", "StateWise"],
    states: [
      "AP",
      "HP",
      "TS",
      "PN",
      "CG",
      "OD",
      "RJ",
      "HR",
      "GJ",
      "DL",
      "UP",
      "J&k",
      "MP",
      "WB",
      "AR",
      "BR",
      "CG",
      "JH",
      "KL",
      "KA",
      "MH"
    ]
  };
  selectActiveFilter(index) {
    this.setState(
      prev => {
        if (prev.activeIndex !== index) {
          return { activeIndex: index, isActive: true };
        } else {
          return { isActive: !prev.isActive, activeIndex: "" };
        }
      },
      //after this we call to handlefilter with string,if it is not index 2
      () => {
        if (index !== 2) {
          //is more state filter is active than reset them
          if (this.state.isStateWiseFilter) {
            this.setState(prev => ({
              isStateWiseFilter: !prev.isStateWiseFilter,
              isStateActive: false
            }));
          }
          this.props.handleFilter(this.state.tabNames[this.state.activeIndex]);
        } else {
          //on index 2 we show more filters instead calling handleFilter
          this.setState(prev => ({
            isStateWiseFilter: !prev.isStateWiseFilter,
            activeStateIndex: ""
          }));
          this.props.handleFilter(undefined);
        }
      }
    );
  }
  //call below function if statewise filter is on
  handleSelectState = index => {
    this.setState(
      prev => {
        if (prev.activeStateIndex !== index) {
          return { activeStateIndex: index, isStateActive: true };
        } else {
          return { isStateActive: !prev.isStateActive, activeStateIndex: "" };
        }
      },
      () => {
        const { states, activeStateIndex } = this.state;
        this.props.handleStateFilter(states[activeStateIndex]);
      }
    );
  };

  renderFilterNames() {
    return this.state.tabNames.map((el, i) => {
      const isActive = this.state.activeIndex === i;
      return (
        <div
          key={i}
          className={isActive ? "active-filter" : "filter"}
          onClick={() => {
            this.selectActiveFilter(i);
          }}
        >
          <p> {el}</p>
        </div>
      );
    });
  }
  renderStateNames() {
    return this.state.states.map((el, i) => {
      const isStateActive = this.state.activeStateIndex === i;
      return (
        <div
          key={i}
          className={isStateActive ? "active-filter" : "filter"}
          onClick={() => {
            this.handleSelectState(i);
          }}
        >
          {el}
        </div>
      );
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="filters">{this.renderFilterNames()}</div>
        <div className="state-list">
          {this.state.isStateWiseFilter ? this.renderStateNames() : null}
        </div>
      </React.Fragment>
    );
  }
}
export default Filters;
