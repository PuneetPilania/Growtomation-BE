import React, { Component, useState } from "react";
import "./createTicket.css";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useHistory } from "react-router-dom";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { createTkt } from "../../reducers/Home/actions";

function CreateTicket({ createTkt }) {
  const [subject, setSubject] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const history = useHistory();

  return (
    <div className="createTct__main">
      <h4>Create Ticket</h4>

      <TextField
        id="standard-basic"
        label="Enter Ticket Subject"
        variant="standard"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />

      <Button
        style={{
          marginTop: "20px",
        }}
        variant="contained"
        onClick={() => {
          if (subject) {
            createTkt("joy@gmail.com", subject, history);
            // setClientSecret(
            //   "pi_3OOHbpSJbAzAaGwa1Mc8Nz2B_secret_ZEQ15vSXQ0oBF9AgipWK5hk5J"
            // );
          }
        }}
      >
        Submit
      </Button>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({});

export default connect(mapStateToProps, { createTkt })(CreateTicket);
