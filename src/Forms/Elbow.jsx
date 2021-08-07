import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import { Form, Field } from "react-final-form";

import SaveIcon from '@material-ui/icons/Save';

import ElbowTable from './ElbowTable'



import {
  Typography,
  Paper,
  Checkbox,
  Link,
  Grid,
  Button,
  RadioGroup,
  FormLabel,
  FormGroup,
  FormControl,
  FormControlLabel,
} from "@material-ui/core";
import { TextField, Checked, Radio, Select } from "final-form-material-ui";
import NewSlider from "./NewSlider";


function Elbow() {
  const onSubmit = (formValues) => {
    console.log(formValues);
  };


  

  return (
    <div >
      <h3 className="text-center mt-3"> Elbow/Wrist Evaluation</h3>

      <Form onSubmit={onSubmit}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit} noValidate>
            <Paper style={{ padding: 25}}>
              <Grid  container  spacing={2}>
                <Grid item md={8} xs={12}>
                  <div>
                    <Field name="dateofassessment">
                      {({ input }) => (
                        <div className="mb-3 fullw10">
                          <label className=" ">Date Of Assessment</label>
                          <input type="date" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                  <Grid item md={4} xs={12}>
                  <div>
                    <Field name="patientid">
                      {({ input }) => (
                        <div className="cardio fullw10">
                          <label>Patient ID</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
              </Grid>


               <Grid container  spacing={2} className='mb-2'>
                <Grid item md={3} xs={12}>
                  <div>
                    <Field name="name">
                      {({ input }) => (
                        <div className="upname fullw10 ">
                          <label className="name">Name</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={2} xs={12}>
                  <div>
                    <Field name="age">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="age">Age</label>
                           
                          <input type="text" {...input} placeholder="" className='w50'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
                <Grid item md={3} xs={12}>
                  <div className="">
                    <label className='d-block'>Gender</label>

                     <label className='p-1 bold1'>
      M <Field name="Gender" type="radio" value="M" component="input" />
          </label>
                    
                      <label className='p-1 bold1'>
      F <Field name="Gender" type="radio" value="F" component="input" />
          </label>
                   
                     <label className='p-1 bold1'>
      Other <Field name="Gender" type="radio" value="O" component="input" />
          </label>
                  </div>
                </Grid>

                  <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Occupation">
                      {({ input }) => (
                        <div className="upname fullw10">
                          <label className="name">Occupation</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

               </Grid>

            


           <Grid container className='mb-3'>

          <Grid item xs={12}>

              <div>
                    <Field name="address">
                      {({ input }) => (
                        <div className="fullw100 ">
                          <label className="name">Address</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
          </Grid>
           </Grid>





  <Grid container  spacing={2} className='mb-3'>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="dateofadmission">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" ">Date Of Admission</label>
                          <input type="date" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="DateofSurgery">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Date of Surgery</label>
                           
                          <input type="date" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="ward">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Ward</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
               </Grid>






            <Grid container  className='mb-3'>

             <Grid item md={6} xs={12}>

              <div>
                    <Field name="chiefcomplaints">
                      {({ input }) => (
                        <div className="fullw10  ">
                          <label className="">Chief Complaints</label>
                         <textarea
                            className="wnew"
                            
                            {...input}
                          ></textarea>
                        </div>
                      )}
                    </Field>
                  </div>

           </Grid>



              <Grid item md={6} xs={12}>

              <div>
                    <Field name="sur/pro
                    ">
                      {({ input }) => (
                        <div className="fullw10  ">
                          <label className="name">Surgery/Procedure</label>
                         <textarea
                            className="wnew"
                            
                            {...input}
                          ></textarea>
                        </div>
                      )}
                    </Field>
                  </div>

           </Grid>

           </Grid>



<div className='mb-3'> <h4><u>Mechanism Of Pain</u></h4>  </div>



     <Grid item md={12} xs={12}>
                  <div className='mb-3'>
                    <Field name="LimitationsofADLs">
                      {({ input }) => (
                        <div className="">
                          <label className="">Limitations of ADLs</label>
                           
                          <input type="text" {...input} placeholder="" className='fullw100'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

  <Grid container  spacing={2} className='mb-3'>
                <Grid item md={4} xs={12}>
                  <div className='fullw10'>
                    <label>Pain Onset</label>
                 <Field name="painonset" component="select">
              <option />
              <option value="graduol">Gradual</option>
              <option value="sudden"> Sudden</option>
             
                  </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div className='fullw10'>
                    <label>Injury</label>
            <Field name="injury" component="select">
              <option />
              <option value="Traumatic">Traumatic</option>
              <option value="Atraumatic"> Atraumatic</option>
             
            </Field>
                  </div>
                </Grid>
                
               </Grid>




                    


<div className='mb-3'> <h4><u>Examination</u></h4>  </div>




<Grid container  spacing={2} className='mb-3'>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Warmth">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Warmth</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

               

                
                <Grid item md={4} xs={12}>
                      <div>
                    <Field name="Swelling">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Swelling</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>



                 <Grid item md={4} xs={12}>
                   <div>
                    <Field name="Stiffness">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Stiffness</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>



               </Grid>



<Grid container  spacing={2} className='mb-3'>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Alignment3">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" ">Alignment</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

               <Grid item md={4} xs={12}>
                  <div>
                    <Field name="MuscleTightness">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" ">Muscle Tightness</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>


                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Contracture/Deformition">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" ">Contracture/Deformity</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>


               </Grid>






<div className='mb-3'> <h4><u>Pain Assessment</u></h4>  </div>


{/* +++++++++++++++ SLIDER+++++++++++++++++= */}






<Grid container  spacing={2} className='mb-3'>
                <Grid item md={12} xs={12}>
                  <div>
                    <label>VAS Score- </label>
            <Field name="VasScore" component="select">
              <option />
              <option value="1">1</option>
              <option value="2"> 2</option>
              <option value="3"> 3</option>
              <option value="4"> 4</option>
              <option value="5"> 5</option>
              <option value="6"> 6</option>
              <option value="7"> 7</option>
              <option value="8"> 8</option>
              <option value="9"> 9</option>
              <option value="10"> 10</option>
             
            </Field>
                  </div>
                </Grid>
                 </Grid>


{/* ++++++++++++++++++++++++++++++++= */}





  <Grid container  spacing={2} className='mb-3'>
                <Grid item md={6} xs={12}>
                  <div>
                    <Field name="durationofpain">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" ">Duration Of Pain</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={6} xs={12}>
                  <div>
                    <Field name="SiteOfPain">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Site Of Pain</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
                
               </Grid>





<Grid container  spacing={2} className='mb-3'>
                <Grid item md={6} xs={12}>
                  <div className='fullw10'>
                    <label>Pain Type</label>
                 <Field name="Pain Type" component="select">
              <option />
              <option value="Constant">Constant</option>
              <option value="Internittent"> Intermittent</option>
             
             
                  </Field>
                  </div>
                </Grid>

                <Grid item md={6} xs={12}>
                  <div className='fullw10'>
                    <label>Nature Of Pain</label>
            <Field name="Nature Of Pain" component="select">
              <option />
              <option value="Dull">Dull Ache</option>
              <option value="Sharp"> Sharp Shooting</option>
              <option value="Throbbing"> Throbbing</option>
               <option value="Radiating">Radiating</option>
              <option value="Moving"> Moving</option>
              <option value="Static"> Static</option>
              <option value="Other"> Other</option>
             
            </Field>
                  </div>
                </Grid>

               </Grid>





<div className='mb-3'> <h4><u>Neck</u></h4>  </div>


<Grid container  spacing={2} className='mb-3'>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Stiffness22">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" ">Stiffness</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

               <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Pain">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" ">Pain</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>


                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Radiation">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" ">Radiation</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>


               </Grid>






<Grid container  spacing={2} className='mb-3'>
                <Grid item md={6} xs={12}>
                  <div>
                    <Field name="AggravatingFactor">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" ">Aggravating Factor</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

               <Grid item md={6} xs={12}>
                  <div>
                    <Field name="RelievingFactors">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" ">Relieving Factors</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

               </Grid>





<div className='mb-3'> <h4><u>Neurological</u></h4>  </div>

<Grid container  spacing={2} className='mb-3'>
                <Grid item md={12} xs={12}>
                  <div>
                    <Field name="Tingling/Numbness">
                      {({ input }) => (
                        <div className="fullw100">
                          <label className=" ">Tingling/Numbness</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

               

               </Grid>













{/* +++++++++++++++++++Table1+++++++++++++++++++++++++++ */}
     
  <div className='mb-5'></div>



           <Grid container className='mb-3'>
          <Grid item xs={12}>

              <div>
               <ElbowTable />
                  </div>
          </Grid>
           </Grid>




              
             

{/* +++++++++++++++++++EndTable+++++++++++++++++++++++++++ */}










             
<div className='mb-3'> <h4><u>Special Tests</u></h4>  </div>

<Grid container  spacing={2} className=''>
                <Grid item md={4} xs={4}>
                  <div>
                  
                  </div>
                   <div>
                  <h6 className=''> <u>Elbow</u> </h6>
                  </div>
                </Grid>

                <Grid item md={4} xs={4}>
                  <div>
                    <h6 className=''>Left</h6>
                  </div>
                </Grid>
                 <Grid item md={4} xs={4}>
                  <div>
                  <h6 className='text-center'>Right</h6>
                  </div>
                </Grid>
               </Grid>






  <Grid container  spacing={2} className='mb-3'>
                <Grid item md={8} xs={8}>
                  <div>
                    <Field name="TinelSign">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Tinel's Sign</label>

                          <input type="text" {...input} placeholder="" className='newinput'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={4}>
                  <div>
                    <Field name="TinelSignTest2">
                      {({ input }) => (
                        <div >
                          

                           
                          <input type="text" {...input} placeholder="" className='newinput ml-5'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
               
               </Grid>




  <Grid container  spacing={2} className='mb-3'>
                <Grid item md={8} xs={8}>
                  <div>
                    <Field name="MillsTest">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Mills' Test</label>

                          <input type="text" {...input} placeholder="" className='newinput'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={4}>
                  <div>
                    <Field name="MillsTestTest2">
                      {({ input }) => (
                        <div >
                          

                           
                          <input type="text" {...input} placeholder="" className='newinput ml-5'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
               
               </Grid>




  <Grid container  spacing={2} className='mb-3'>
                <Grid item md={8} xs={8}>
                  <div>
                    <Field name="GolferElbowTest">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Golfer's Elbow Test</label>

                          <input type="text" {...input} placeholder="" className='newinput'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={4}>
                  <div>
                    <Field name="GolferElbowTest2">
                      {({ input }) => (
                        <div >
                          

                           
                          <input type="text" {...input} placeholder="" className='newinput ml-5'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
               
               </Grid>




  <Grid container  spacing={2} className='mb-3'>
                <Grid item md={8} xs={8}>
                  <div>
                    <Field name="VarusStressTest">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Varus Stress Test</label>

                          <input type="text" {...input} placeholder="" className='newinput'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={4}>
                  <div>
                    <Field name="VarusStressTest1">
                      {({ input }) => (
                        <div >
                          

                           
                          <input type="text" {...input} placeholder="" className='newinput ml-5'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
               
               </Grid>




  <Grid container  spacing={2} className='mb-3'>
                <Grid item md={8} xs={8}>
                  <div>
                    <Field name="ValgusStress9Test">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Valgus Stress Test</label>

                          <input type="text" {...input} placeholder="" className='newinput'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={4}>
                  <div>
                    <Field name="ValgurStressTest2">
                      {({ input }) => (
                        <div >
                          

                           
                          <input type="text" {...input} placeholder="" className='newinput ml-5'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
               
               </Grid>







<Grid container  spacing={2} className=''>
                <Grid item md={4} xs={4}>
                  
                   <div>
                  <h6 className=''> <u>Wrist</u> </h6>
                  </div>
                </Grid>

                
               </Grid>

                 
            





  <Grid container  spacing={2} className='mb-3'>
                <Grid item md={8} xs={8}>
                  <div>
                    <Field name="TinelSign">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Tinel's Sign</label>

                          <input type="text" {...input} placeholder="" className='newinput'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={4} className=''>
                  <div >
                    <Field name="TinelSign3">
                      {({ input }) => (
                        <div >
                          

                           
                          <input type="text" {...input} placeholder="" className='newinput ml-5'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
               
               </Grid>





  <Grid container  spacing={2} className='mb-3'>
                <Grid item md={8} xs={8}>
                  <div>
                    <Field name="PhalenTest">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Phalen's Test</label>

                          <input type="text" {...input} placeholder="" className='newinput'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={4} className=''>
                  <div >
                    <Field name="PhalenTest3">
                      {({ input }) => (
                        <div >
                          

                           
                          <input type="text" {...input} placeholder="" className='newinput ml-5'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
               
               </Grid>





  <Grid container  spacing={2} className='mb-3'>
                <Grid item md={8} xs={8}>
                  <div>
                    <Field name="FinkelsteinTest">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Finkelstein's Test</label>

                          <input type="text" {...input} placeholder="" className='newinput'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={4} className=''>
                  <div >
                    <Field name="FinkelsteinTest3">
                      {({ input }) => (
                        <div >
                          

                           
                          <input type="text" {...input} placeholder="" className='newinput ml-5'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
               
               </Grid>






  
               







         


         
               <Grid container  className='mb-3' spacing={2}>
                 <Grid item md={12} xs={12}>
                    <div>
                    <Field name="inverstigation">
                      {({ input }) => (
                        <div className="">
                          <label className="widthsame bold">Inverstigation</label>
                          <input type="text" {...input} placeholder="" className='lastw'/>
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

                   <Grid item md={12} xs={12}>
                    <div>
                    <Field name="diagnosis">
                      {({ input }) => (
                        <div className=" ">
                          <label className="widthsame bold">Diagnosis</label>
                          <input type="text" {...input} placeholder="" className='lastw' />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>


                 <Grid item md={12} xs={12}>
                    <div>
                    <Field name="TREATMENTGOAL">
                      {({ input }) => (
                        <div className="">
                          <label className="widthsame bold">Treatment Goal</label>
                          <input type="text" {...input} placeholder="" className='lastw'/>
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>


               <Grid item md={12} xs={12}>
                    <div>
                    <Field name="TreatmentPLAN">
                      {({ input }) => (
                        <div className="">
                          <label className="widthsame bold">Treatment Plan</label>
                          <input type="text" {...input} placeholder="" className='lastw'/>
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>


            
                    
                
         </Grid>

                         


                       <div className='text-center'>  <Button
                            variant="contained"
                             color="primary"
                              size="small"
                               type='submit'
                               style={{backgroundColor:'#2185d0',textTransform:"capitalize"}} >
                                   Save
                                </Button></div>








                            
            </Paper>
          </form>
        )}
      </Form>
    </div>
  );
}
export default Elbow;