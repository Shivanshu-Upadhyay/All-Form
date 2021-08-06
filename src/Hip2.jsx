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
    <div className='text-right'>
      <Paper style={{ padding: 30 }}>
      <div>
        <Link
          to="/hipform"    className="button4 "
          style={{ textDecoration: "none" }}
          >
         
        <span> Add New Form</span>
          
        
        </Link>
        </div>

        <Tables />
      </Paper>
    </div>
  );
}
export default Hip2;
