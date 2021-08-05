import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Form, Field } from "react-final-form";
import { Link } from "react-router-dom";
import { Paper, Grid, Button } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import Tables from "./Table";


function Hip2() {
  return (
    <div>
      <Paper style={{ padding: 30 }}>
        <Link
          to="/hipform"    className="button4"
          style={{ textDecoration: "none" }}
          target={"_blank"}>
         
        <span> Add New Hip Evaluation Form</span>
          
        
        </Link>

        <Tables />
      </Paper>
    </div>
  );
}
export default Hip2;
