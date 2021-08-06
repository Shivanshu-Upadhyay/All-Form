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


function Postnatal2() {
 
  return (
    <div >
 

     
            <Paper style={{ padding: 30}}>
    
<div className='text-right'>

                  
 <Link
          to="/postnatalform"    className="button4"
          style={{ textDecoration: "none" }}
          >
         
        <span>   Add New Form</span>
               
        </Link>
 
</div>

{/* ++++++++++++++++++++++++++TABLE+++++++++++++++++++++++++++++++==== */}
       <Tables />
{/* ++++++++++++++++++++++++++TABLE+++++++++++++++++++++++++++++++==== */}

      
                            
            </Paper>
         
    </div>
  );
}
export default Postnatal2;