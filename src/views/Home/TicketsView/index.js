import SearchBar from "../../../components/SearchBar";
import "./ticketView.css";
import Box from "@mui/material/Box";
import { fetchTickets } from "../../../reducers/Home/actions";

import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { useEffect } from "react";
import { getTickets } from "../../../reducers/Home/selectors";

function TicketsView({ fetchTickets, tickets }) {
  useEffect(() => {
    fetchTickets("joy@gmail.com");
  }, []);

  const { data, loading } = tickets;
  return (
    <div className="projectsView__main">
      <p className="active_project_name">Active Tickets</p>
      <SearchBar />
      {!loading &&
        data.map((tkt) => {
          return (
            <Box className="box">
              <div className="active_project_main">
                <div className="active_project_submain">
                  <p>{tkt.properties.subject}</p>
                  <p>Status: {tkt.properties.hs_pipeline_stage}</p>
                </div>
                <p>ID: {tkt.id}</p>
              </div>
              <div className="a_project_desc">
                <p>{tkt.createdAt}</p>
              </div>
            </Box>
          );
        })}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  tickets: getTickets(),
});

export default connect(mapStateToProps, { fetchTickets })(TicketsView);
