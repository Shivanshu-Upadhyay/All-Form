import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import { Form, Field } from "react-final-form";
import KneeTable from './KneeTable'



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




function Knee() {
  const onSubmit = (formValues) => {
    console.log(formValues);
  };


  

  return (
    <div >
      <h3 className="text-center mt-3"> Knee Joint Evaluation</h3>

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
                    <Field name="surpro
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
                        <div className="fullw100">
                          <label className="">Limitations of ADLs</label>
                           
                          <input type="text" {...input} placeholder="" />
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







<div className='mb-3'> <h4><u>On Observation</u></h4>  </div>




<Grid container  spacing={2} className='mb-3'>
                <Grid item md={4} xs={12}>
                  <div className='fullw10'>
                    <label>Warmth</label>
                 <Field name="warmth" component="select">
              <option />
              <option value="wleft">Left</option>
              <option value="wright"> Right</option>
              <option value="wbilateral"> Bilateral</option>
             
                  </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div className='fullw10'>
                    <label>Swelling</label>
            <Field name="swelling" component="select">
              <option />
              <option value="sleft">Left</option>
              <option value="sright"> Right</option>
              <option value="sbilateral"> Bilateral</option>
             
            </Field>
                  </div>
                </Grid>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="SkinChanges">
                      {({ input }) => (
                        <div className='fullw10'>
                          <label className="">Skin Changes</label>
                           
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
                    <Field name="MuscleAtophy">
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
                          <label className="">Muscle Tightness</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="PatellarTracking">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Patellar Tracking</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
               </Grid>



<div className='mb-3'> <h4><u>On Palpation</u></h4>  </div>




<Grid container  spacing={2} className='mb-3'>
                <Grid item md={4} xs={12}>
                  <div className='fullw10'>
                    <label>Tenderness</label>
                 <Field name="tendesness" component="select">
              <option />
              <option value="teleft">Left</option>
              <option value="teight"> Right</option>
              <option value="teilateral"> Bilateral</option>
             
                  </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div className='fullw10'>
                    <label>Crepitus</label>
            <Field name="Crepitus" component="select">
              <option />
              <option value="crleft">Left</option>
              <option value="cright"> Right</option>
              <option value="crbilateral"> Bilateral</option>
             
            </Field>
                  </div>
                </Grid>
<Grid item md={4} xs={12}>
                  <div className='fullw10'>
                    <label>Stiffness</label>
            <Field name="Siffness" component="select">
              <option />
              <option value="sileft">Left</option>
              <option value="siright"> Right</option>
              <option value="sibilateral"> Bilateral</option>
             
            </Field>
                  </div>
                </Grid>
               </Grid>



<Grid container  spacing={2} className='mb-3'>
                <Grid item md={4} xs={12}>
                  <div className='fullw10'>
                    <label>Locking</label>
                 <Field name="Locking" component="select">
              <option />
              <option value="loleft">Left</option>
              <option value="loight"> Right</option>
              <option value="loilateral"> Bilateral</option>
             
                  </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div className='fullw10'>
                    <label>Giving Away</label>
            <Field name="GivingAway" component="select">
              <option />
              <option value="gileft">Left</option>
              <option value="giight"> Right</option>
              <option value="gibilateral"> Bilateral</option>
             
            </Field>
                  </div>
                </Grid>

               </Grid>



<div className='mb-3'> <h4><u>Pain Evaluation</u></h4>  </div>


{/* ++++++++++++++++++++++++++++++++= */}

  
<Grid container  spacing={2} className='mb-3'>
                <Grid item md={12} xs={12}>
                  <div>
                    <label>VAS Score- </label>
            <Field name="VASScore" component="select">
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
              <option value="Other"> Others</option>
             
            </Field>
                  </div>
                </Grid>

               </Grid>



<Grid container  spacing={2} className='mb-3'>
                <Grid item md={6} xs={12}>
                  <div className='fullw10'>
                    <label>Aggravating Factors</label>
                 <Field name="AggravatingFactors" component="select">
              <option />
              <option value="CoWalk">Walk</option>
              <option value="Up/Down Stairs"> Up/Down Stairs</option>
              <option value="Sports">Sports</option>
              <option value="Stand"> Stand</option>
              <option value="Sit To Stand">Sit To Stand</option>
              <option value="Any Activity"> Any Activity</option>
              <option value="Others1"> Others</option>
             
             
                  </Field>
                  </div>
                </Grid>

                <Grid item md={6} xs={12}>
                  <div className='fullw10'>
                    <label>Relieving Factors</label>
            <Field name="RelievingFactors" component="select">
              <option />
              <option value="Rest">Rest</option>
              <option value="Positioning"> Positioning</option>
              <option value="Heat Therapy"> Heat Therapy</option>
               <option value="Icing">Icing</option>
              <option value="Medicines"> Medicines</option>
             
              <option value="Other2"> Others</option>
             
            </Field>
                  </div>
                </Grid>

               </Grid>














{/* +++++++++++++++++++Table1+++++++++++++++++++++++++++ */}
     
  

  <div className='mb-5'></div>
       <Grid container className='mb-3'>
          <Grid item xs={12}>

              <div>
               <KneeTable />
                  </div>
          </Grid>
           </Grid>

              
             

{/* +++++++++++++++++++EndTable+++++++++++++++++++++++++++ */}




<div className='mb-3'> <h4><u>Special Test</u></h4>  </div>











<Grid container  spacing={2} className=''>
                <Grid item md={4} xs={12}>
                  
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <h6 className=''>Left</h6>
                  </div>
                </Grid>
<Grid item md={4} xs={12}>
                  <div>
                  <h6 className='text-center'>Right</h6>
                  </div>
                </Grid>
               </Grid>






  <Grid container  spacing={2} className='mb-3'>
                <Grid item md={8} xs={12}>
                  <div>
                    <Field name="AnteriosDrawesTest">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Anterios Drawer Test</label>

                          <input type="text" {...input} placeholder="" className='newinput'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="AnterioDrawesTest2">
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
                <Grid item md={8} xs={12}>
                  <div>
                    <Field name="PosteriorDrawerTest">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Posterior Drawer Test</label>

                          <input type="text" {...input} placeholder="" className='newinput'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="PosteriorDrawerTest2">
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
                <Grid item md={8} xs={12}>
                  <div>
                    <Field name="McMurraysTest">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Mc Murrays Test</label>

                          <input type="text" {...input} placeholder="" className='newinput'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="McMurraysTest2">
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
                <Grid item md={8} xs={12}>
                  <div>
                    <Field name="VarusStressTest88">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Varus Stress Test</label>

                          <input type="text" {...input} placeholder="" className='newinput'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
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
                <Grid item md={8} xs={12}>
                  <div>
                    <Field name="ValgusStressTest">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Valgus Stress Test</label>

                          <input type="text" {...input} placeholder="" className='newinput'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="ValgusStressTest2">
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
                <Grid item md={8} xs={12}>
                  <div>
                    <Field name="LachmanTest">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Lachman Test</label>

                          <input type="text" {...input} placeholder="" className='newinput'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="LachmanTest3">
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
                <Grid item md={8} xs={12}>
                  <div>
                    <Field name="PivotShift">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Pivot Shift</label>

                          <input type="text" {...input} placeholder="" className='newinput'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="PivotShift4">
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
                <Grid item md={8} xs={12}>
                  <div>
                    <Field name="PopliteolTest">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Popliteal Test</label>

                          <input type="text" {...input} placeholder="" className='newinput'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="PopliteolTest5">
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
                <Grid item md={8} xs={12}>
                  <div>
                    <Field name="PatellarGlide">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Patellar Glide</label>

                          <input type="text" {...input} placeholder="" className='newinput'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="PatellarGlide4">
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
                    <Field name="Investigation">
                      {({ input }) => (
                        <div className="">
                          <label className="widthsame bold">Investigation</label>
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
export default Knee;