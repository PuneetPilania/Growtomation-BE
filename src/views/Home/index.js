import React, { Component } from "react";
import { connect } from "react-redux";
import { func } from "prop-types";
import { createStructuredSelector } from "reselect";

import HomeView from "./HomeView";
import TicketsView from "./TicketsView";

class Home extends Component {
  render() {
    return (
      <div>
        <HomeView />
        <TicketsView />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({});

export default connect(mapStateToProps, {})(Home);
