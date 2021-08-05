import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import { Form, Field } from "react-final-form";
import { Link } from "react-router-dom";

import {
  
  Paper,
  Grid,
  Button,
  
} from "@material-ui/core";

import Tables from "./Table";


function Ankle2() {

  return (
    <div >
 

      
            <Paper style={{ padding: 30}}>
      <Link
          to="/ankleform"    className="button4"
          style={{ textDecoration: "none" }}
          >
         
        <span> ADD NEW ANKLE EVALUATION FORM</span>
          
        
        </Link>

       

{/* ++++++++++++++++++++++++++TABLE+++++++++++++++++++++++++++++++==== */}
       <Tables />
{/* ++++++++++++++++++++++++++TABLE+++++++++++++++++++++++++++++++==== */}

      
                            
            </Paper>
          
    </div>
  );
}
export default Ankle2;