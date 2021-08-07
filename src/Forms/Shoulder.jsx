import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import { Form, Field } from "react-final-form";

import SaveIcon from '@material-ui/icons/Save';

import ShoulderTable from './ShoulderTable';



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


function Shoulder() {
  const onSubmit = (formValues) => {
    console.log(formValues);
  };



  return (
    <div >
      <h3 className="text-center mt-3"> Shoulder Evaluation</h3>

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
                        <div className="upname fullw10">
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
                        <div className="fullw100 fullw10">
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

  <Grid container  spacing={2} className='mb-3'>
            <Grid item md={12} xs={12}>
                  <div>
                    <Field name="LimitationsofADLs">
                      {({ input }) => (
                        <div className='fullw10'>
                          <label className="">Limitations of ADLs</label>
                           
                          <input type="text" {...input} placeholder="" className='fullw100'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
 
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
                  <div className='fullw10'>
                    <label>Warmth</label>
                 <Field name="warmth" component="select">
              <option />
              <option value="wleft">L</option>
              <option value="wright"> R</option>
              <option value="wbilateral"> B/L</option>
             
                  </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div className='fullw10'>
                    <label>Swelling</label>
            <Field name="swelling" component="select">
              <option />
              <option value="sleft">L</option>
              <option value="sright"> R</option>
              <option value="sbilateral"> B/L</option>
             
            </Field>
                  </div>
                </Grid>
                <Grid item md={4} xs={12}>
                   <div className='fullw10'>
                    <label>Stiffness</label>
            <Field name="Stiffness" component="select">
              <option />
              <option value="bruleft">Left</option>
              <option value="bruright"> Right</option>
              <option value="brubilateral"> B/L</option>
             
            </Field>
                  </div>
                </Grid>
               </Grid>



<Grid container  spacing={2} className='mb-3'>



  <Grid item md={4} xs={12}>
                  <div className='fullw10'>
                    <label>Clicking Sound</label>
            <Field name="Clicking Sound" component="select">
              <option />
              <option value="propleft">Left</option>
              <option value="propright"> Right</option>
              <option value="propbilateral"> Bilateral</option>
             
            </Field>
                  </div>
                </Grid>




                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Alignment">
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
                  <div className='fullw10'>
                    <label>Winging</label>
            <Field name="Winging" component="select">
              <option />
              <option value="propleft">Left</option>
              <option value="propright"> Right</option>
              <option value="propbilateral"> Bilateral</option>
             
            </Field>
                  </div>
                </Grid>

               </Grid>




<Grid container  spacing={2} className='mb-3'>
                <Grid item md={4} xs={12}>
                  <div className='fullw10'>
                    <Field name="MuscleAtophy-">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" ">Muscle Atrophy</label>
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
                    <Field name="ContractureDeformities">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" ">Contracture/Deformities</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>


               </Grid>








<div className='mb-3'> <h4><u> Pain Evaluation </u></h4>  </div>


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
                 <Field name="PainType" component="select">
              <option />
              <option value="Constant">Constant</option>
              <option value="Internittent"> Intermittent</option>
             
             
                  </Field>
                  </div>
                </Grid>


  <Grid item md={6} xs={12}>
                  <div className='fullw10'>
                    <label>Nature Of Pain</label>
            <Field name="NatureOfPain" component="select">
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
                    <Field name="STiffness3-">
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
                    <Field name="Pain12">
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
                <Grid item md={12} xs={12}>
                  <div>
                    <Field name="AggravatingFactors">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" ">Aggravating Factors</label>
                          <input type="text" {...input} placeholder="" className='w50' />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

              
               </Grid>


<Grid container  spacing={2} className='mb-2'>
 <Grid item md={12} xs={12}>
                  <div>
                    <Field name="Relieving Factor">
                      {({ input }) => (
                        <div className='fullw10'>
                          <label className=" ">Relieving Factor</label>
                          <input type="text" {...input} placeholder="" className='w50'/>
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
               <ShoulderTable />
                  </div>
          </Grid>
           </Grid>




              
             

{/* +++++++++++++++++++EndTable+++++++++++++++++++++++++++ */}










             
<div className='mb-3'> <h4><u>Special Tests</u></h4>  </div>

<Grid container  spacing={2} className=''>
                <Grid item md={4} xs={4}>
                  
                 <div>
                   <h6>Rotator Cuff Testing</h6>
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
                    <Field name="SupraspinatusTest">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Supraspinatus Test</label>

                          <input type="text" {...input} placeholder="" className='newinput'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={4}>
                  <div>
                    <Field name="SupraspinatusTest1">
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
                    <Field name="InfraspinatusTest">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Infraspinatus Test</label>

                          <input type="text" {...input} placeholder="" className='newinput'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={4}>
                  <div>
                    <Field name="InfraspinatuTest2 ">
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
                    <Field name="DropArmTest ">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Drop Arm Test</label>

                          <input type="text" {...input} placeholder="" className='newinput'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={4}>
                  <div>
                    <Field name="DropArmTest2">
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
                    <Field name="SubscapularisTest">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Subscapularis Test</label>

                          <input type="text" {...input} placeholder="" className='newinput'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={4}>
                  <div>
                    <Field name="SubscapularisTest1">
                      {({ input }) => (
                        <div >
                          

                           
                          <input type="text" {...input} placeholder="" className='newinput ml-5'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
               
               </Grid>


<div><h5 className='mb-4 mt-3'> Impingement </h5></div>

  <Grid container  spacing={2} className='mb-3'>
                <Grid item md={8} xs={8}>
                  <div>
                    <Field name="HawkinsKennedyTest">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Hawkins-Kennedy Test</label>

                          <input type="text" {...input} placeholder="" className='newinput'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={4}>
                  <div>
                    <Field name="Hawkins3KennedyTest">
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
                    <Field name="PainfulArc">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Painful Arc-</label>

                          <input type="text" {...input} placeholder="" className='newinput'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={4}>
                  <div>
                    <Field name="Painful4Arc ">
                      {({ input }) => (
                        <div >
                          

                           
                          <input type="text" {...input} placeholder="" className='newinput ml-5'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
               
               </Grid>




<div><h5 className='mb-4 mt-3'> Stability Tests </h5></div>

  <Grid container  spacing={2} className='mb-3'>
                <Grid item md={8} xs={8}>
                  <div>
                    <Field name="SulcusSign">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Sulcus Sign</label>

                          <input type="text" {...input} placeholder="" className='newinput'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={4}>
                  <div>
                    <Field name="Sulcus4Sign">
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
                    <Field name="ApprehensionTest">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Apprehension Test</label>

                          <input type="text" {...input} placeholder="" className='newinput'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={4}>
                  <div>
                    <Field name="ApprehensionTest7 ">
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
                          <label className="widthsame bold">Diagnosis-</label>
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
                          <label className="widthsame bold"> Treatment Goal</label>
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
                                  style={{backgroundColor:'#2185d0',textTransform:"capitalize"}}>
                                   Save
                                </Button></div>








                            
            </Paper>
          </form>
        )}
      </Form>
    </div>
  );
}
export default Shoulder;