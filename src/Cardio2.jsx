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


function Cardio2() {
  

  return (
    <div >
 

      
            <Paper style={{ padding: 30}}>
     

        <Link
          to="/cardioform"    className="button4"
          style={{ textDecoration: "none" }}
          target={"_blank"}>
         
        <span> ADD NEW CARDIO-PULMONARY EVALUATION FORM</span>
          
        
        </Link>

{/* ++++++++++++++++++++++++++TABLE+++++++++++++++++++++++++++++++==== */}
       <Tables />
{/* ++++++++++++++++++++++++++TABLE+++++++++++++++++++++++++++++++==== */}

      
                            
            </Paper>
         
    </div>
  );
}
export default Cardio2;