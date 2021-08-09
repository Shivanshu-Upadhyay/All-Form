import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import { Form, Field } from "react-final-form";

import SaveIcon from '@material-ui/icons/Save';

import Table1 from './Table1'
import Table2 from './Table2'
import Table3 from './Table3'
import Table4 from './Table4'
import Table5 from './Table5'
import Table6 from './Table6'
import Table7 from './Table7'
import Table8 from './Table8'


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

function Paediatric() {
  const onSubmit = (formValues) => {
    console.log(formValues);
  };

  return (
    <div >
      <h3 className="text-center"> Paediatric Evaluation</h3>

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
                        <div className="fullw10">
                          <label>Patient ID</label>
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
                    <Field name="name">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Name</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="age">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="age">Age</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
                <Grid item md={4} xs={12}>
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
               </Grid>

              <Grid container  spacing={2} className='mb-3'>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="dateofbirth">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" ">Date Of Birth</label>
                          <input type="date" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="birthweight">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="age">Birth Weight</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="headciscumfesence">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="age">Head Circumference</label>
                           
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

            <Grid container  className='mb-3'>

             <Grid item xs={12}>

              <div>
                    <Field name="chiefcomplaints">
                      {({ input }) => (
                        <div className="fullw100 ">
                          <label className="name">Chief Complaints</label>
                         <textarea
                            className=""
                            
                            {...input}
                          ></textarea>
                        </div>
                      )}
                    </Field>
                  </div>

           </Grid>
           </Grid>


              <h4 className='m-2 text-capitalize'> <u >History</u></h4>

               <Grid container  className='mb-3' spacing={2}>
                 <Grid item md={3} xs={12}>
                    <div>
                    <Field name="Prenatal">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Prenatal</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

                   <Grid item md={3} xs={12}>
                    <div>
                    <Field name="natal">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Natal</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>


                 <Grid item md={3} xs={12}>
                    <div>
                    <Field name="postnatal">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Postnatal</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>


              <Grid item md={3} xs={12}>
                    <div>
                    <Field name="familyhistory">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Family History</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

         </Grid>

                     <h4 className='m-2 '> <u >Observation</u></h4>

               <Grid container  className='mb-3' spacing={2}>
                 <Grid item md={4} xs={12}>
                    <div>
                    <Field name="supine">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Supine</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

                   <Grid item md={4} xs={12}>
                    <div>
                    <Field name="prone">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Prone</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>


                 <Grid item md={4} xs={12}>
                    <div>
                    <Field name="sitting">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Sitting</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

         </Grid>





                <h4 className='m-2 '> <u >Milestones</u></h4>

               <Grid container  className='mb-3' spacing={2}>
                 <Grid item md={4} xs={12}>
                    <div>
                    <Field name="socialsmile">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Social Smile</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

                   <Grid item md={4} xs={12}>
                    <div>
                    <Field name="followwitheyes">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Follow with eyes</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>


                 <Grid item md={4} xs={12}>
                    <div>
                    <Field name="headholding">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Head Holding</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

         </Grid>
                
                 <Grid container  className='mb-3' spacing={2}>
                 <Grid item md={4} xs={12}>
                    <div>
                    <Field name="rollover">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Roll over</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

                   <Grid item md={4} xs={12}>
                    <div>
                    <Field name="sittingwith">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Sitting '(with support)'</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>


                 <Grid item md={4} xs={12}>
                    <div>
                    <Field name="sittingwithout">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Sitting '(without support)'</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

         </Grid>

               <Grid container  className='mb-3' spacing={2}>
                 <Grid item md={4} xs={12}>
                    <div>
                    <Field name="crawling">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Crawling</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

                   <Grid item md={4} xs={12}>
                    <div>
                    <Field name="standing">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Standing</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>


                 <Grid item md={4} xs={12}>
                    <div>
                    <Field name="walkingwith">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Walking '(with support)'</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>


              <Grid item md={4} xs={12}>
                    <div>
                    <Field name="walkioutsupport">
                      {({ input }) => (
                        <div className=" ">
                          <label className="name">Walking '(without support)'</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

         </Grid>

 

                

                     <h4 className='m-2 '> <u >Reflex evaluation</u></h4>
                        <p>Neonatal reflexes</p>
               <Grid container  className='mb-3' spacing={2}>
                 <Grid item md={3} xs={12}>
                    <div>
                    <Field name="sucking">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Sucking</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

                   <Grid item md={3} xs={12}>
                    <div>
                    <Field name="rooting">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Rooting</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>


                 <Grid item md={3} xs={12}>
                    <div>
                    <Field name="swallowing">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Swallowing</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

                <Grid item md={3} xs={12}>
                    <div>
                    <Field name="upperlimb">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Upper limb placing</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

         </Grid>

{/* +++++++++++++++++++Table1+++++++++++++++++++++++++++ */}
     
  <h4 className='m-2 '> <u >Development Reflexes</u></h4>



           <Grid container className='mb-3'>
          <Grid item xs={12}>

              <div>
               <Table1 />
                  </div>
          </Grid>
           </Grid>




              
             

{/* +++++++++++++++++++EndTable+++++++++++++++++++++++++++ */}





         
{/* +++++++++++++++++++Table2+++++++++++++++++++++++++++ */}

             <Grid container className='mb-3'>
          <Grid item xs={12}>

              <div>
               <Table2 />
                  </div>
          </Grid>
           </Grid>



{/* +++++++++++++++++++EndTable+++++++++++++++++++++++++++ */}
   


         



{/* +++++++++++++++++++Table3+++++++++++++++++++++++++++ */}



 <Grid container className='mb-3'>
          <Grid item xs={12}>

              <div>
               <Table3 />
                  </div>
          </Grid>
           </Grid>




{/* +++++++++++++++++++EndTable+++++++++++++++++++++++++++ */}



<h4 className='m-2 '> <u >Examination</u></h4>

 <Grid container  className='mb-3' spacing={2}>
                 <Grid item md={4} xs={12}>
                    <div>
                    <Field name="Highescostical">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Higher Cortical Function</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

                   <Grid item md={4} xs={12}>
                    <div>
                    <Field name="Isurrounding">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Intergration with Surroundings</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>


                 <Grid item md={4} xs={12}>
                    <div>
                    <Field name="speech">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Speech</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

         </Grid>



 <Grid container  className='mb-3' spacing={2}>
                 <Grid item md={4} xs={12}>
                    <div>
                    <Field name="vision">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Vision</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

                   <Grid item md={4} xs={12}>
                    <div>
                    <Field name="hearing">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Hearing</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>


                 <Grid item md={4} xs={12}>
                    <div>
                    <Field name="orientation">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Orientation</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

         </Grid>




 <Grid container  className='mb-3' spacing={2}>
                 <Grid item md={4} xs={12}>
                    <div>
                    <Field name="Cognitive">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Cognitive Function</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

                   <Grid item md={4} xs={12}>
                    <div>
                    <Field name="overall">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Overall Activity</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>


                 <Grid item md={4} xs={12}>
                    <div>
                    <Field name="handedness">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Handedness</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

               <Grid item md={4} xs={12}>
                    <div>
                    <Field name="carnialnerve">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Carnial Nerve Examination</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

         </Grid>




            
                     <h4 className='m-2 '> <u >Physical Examination</u></h4>
                        
               <Grid container  className='mb-3' spacing={2}>
                 <Grid item md={3} xs={12}>
                    <div>
                    <Field name="height">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Height</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

                   <Grid item md={3} xs={12}>
                    <div>
                    <Field name="weight">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Weight</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>


                 <Grid item md={3} xs={12}>
                    <div>
                    <Field name="chestciseumfesence">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Chest Circumference</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

                <Grid item md={3} xs={12}>
                    <div>
                    <Field name="headcircumference">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Head Circumference</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

         </Grid>



{/* +++++++++++++++++++Table4+++++++++++++++++++++++++++ */}

 <Grid container className='mb-3'>
          <Grid item xs={12}>

              <div>
               <Table4 />
                  </div>
          </Grid>
           </Grid>



{/* +++++++++++++++++++EndTable+++++++++++++++++++++++++++ */}





         
{/* +++++++++++++++++++<Table5>+++++++++++++++++++++++++++ */}

 <Grid container className='mb-3'>
          <Grid item xs={12}>

              <div>
               <Table5 />
                  </div>
          </Grid>
           </Grid>



{/* +++++++++++++++++++EndTable+++++++++++++++++++++++++++ */}
   


         



{/* +++++++++++++++++++Table6+++++++++++++++++++++++++++ */}

                <Grid container className='mb-3'>
          <Grid item xs={12}>

              <div>
               <Table6 />
                  </div>
          </Grid>
           </Grid>



{/* +++++++++++++++++++EndTable+++++++++++++++++++++++++++ */}



   <h4 className='m-2 '> <u >Tendon Reflex</u></h4>
                        
               <Grid container  className='mb-3' spacing={2}>
                 <Grid item md={3} xs={12}>
                    <div>
                    <Field name="biceps">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Biceps</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

                   <Grid item md={3} xs={12}>
                    <div>
                    <Field name="tricops">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Triceps</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>


                 <Grid item md={3} xs={12}>
                    <div>
                    <Field name="knee">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Knee</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

                <Grid item md={3} xs={12}>
                    <div>
                    <Field name="ankle">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Ankle</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

         </Grid>


           

   <h4 className='m-2 '> <u >Respiratory Status</u></h4>
                        
               <Grid container  className='mb-3' spacing={2}>
                 <Grid item md={6} xs={12}>
                    <div>
                    <Field name="patterbseathing">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Pattern of Breathing</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

                   <Grid item md={6} xs={12}>
                    <div>
                    <Field name="Endusance">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Endurance</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>
              

         </Grid>




                 <h4 className='m-2 '> <u >Sensory Examination</u></h4>
                        
               <Grid container  className='mb-3' spacing={2}>
                 <Grid item md={4} xs={12}>
                    <div>
                    <Field name="deep">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Deep</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

                   <Grid item md={4} xs={12}>
                    <div>
                    <Field name="supesficial">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Superficial</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>


                 <Grid item md={4} xs={12}>
                    <div>
                    <Field name="combinedcostical">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Combined Cortical Sensation</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

                
         </Grid>





  <h4 className='m-2 '> <u >Motor Assessment</u></h4>
                        
               <Grid container  className='mb-3' spacing={2}>
                 <Grid item md={4} xs={12}>
                    <div>
                    <Field name="activerom">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Active ROM</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

                   <Grid item md={4} xs={12}>
                    <div>
                    <Field name="passiverow">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Passive ROM</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>


                 <Grid item md={4} xs={12}>
                    <div>
                    <Field name="muselepower">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Muscle Power</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

                
         </Grid>






                        
               <Grid container  className='mb-3' spacing={2}>
                 <Grid item md={4} xs={12}>
                    <div>
                    <Field name="muscletone">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Muscle Tone</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

                   <Grid item md={4} xs={12}>
                    <div>
                    <Field name="deformity">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Deformity</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>


                 <Grid item md={4} xs={12}>
                    <div>
                    <Field name="coutsactuse">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Contracture</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

                
         </Grid>

                         



{/* +++++++++++++++++++Table7+++++++++++++++++++++++++++ */}


         <Grid container className='mb-3'>
          <Grid item xs={12}>

              <div>
               <Table7 />
                  </div>
          </Grid>
           </Grid>


{/* +++++++++++++++++++EndTable+++++++++++++++++++++++++++ */}





         
{/* +++++++++++++++++++Table8+++++++++++++++++++++++++++ */}
          

           <Grid container className='mb-3'>
          <Grid item xs={12}>

              <div>
               <Table8 />
                  </div>
          </Grid>
           </Grid>


{/* +++++++++++++++++++EndTable+++++++++++++++++++++++++++ */}
   





   <h4 className='m-2 '> <u >Posture Assessment</u></h4>
                        
               <Grid container  className='mb-3' spacing={2}>
                 <Grid item md={3} xs={12}>
                    <div>
                    <Field name="posture">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Posture</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

                   <Grid item md={3} xs={12}>
                    <div>
                    <Field name="CoOrdination">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Co-Ordination </label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>


                 <Grid item md={3} xs={12}>
                    <div>
                    <Field name="gait">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Gait</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

                <Grid item md={3} xs={12}>
                    <div>
                    <Field name="balance">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Balance</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

         </Grid>




   <h4 className='m-2 '> <u >Sitting Balance</u></h4>
                        
               <Grid container  className='mb-3' spacing={2}>
                 <Grid item md={6} xs={12}>
                    <div>
                    <Field name="static">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Static</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

                   <Grid item md={6} xs={12}>
                    <div>
                    <Field name="dynanic">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Dynamic</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

         </Grid>



                        
               <Grid container  className='mb-3' spacing={2}>
                 <Grid item md={12} xs={12}>
                    <div>
                    <Field name="standingbalance">
                      {({ input }) => (
                        <div className=" ">
                          <label className="name">Standing Balance</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>
               
         </Grid>





   
                        
               <Grid container  className='mb-3' spacing={2}>
                 <Grid item md={12} xs={12}>
                    <div>
                    <Field name="bolwercontrol">
                      {({ input }) => (
                        <div className=" ">
                          <label className="name">Bladder or Bowel Control</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>
               
         </Grid>







   <h4 className='m-2 '> <u > Functional Assessment</u></h4>

   <h6 className='p-2'><u>Sphincters</u></h6>
                        
               <Grid container  className='mb-3' spacing={2}>
                 <Grid item md={6} xs={12}>
                    <div>
                    <Field name="bladdes">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Bladder Management</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

                   <Grid item md={6} xs={12}>
                    <div>
                    <Field name="bowelmanagement">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Bowel Management</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

         </Grid>

<h6 className='p-2 '><u>Self Care</u></h6>

         
               <Grid container  className='mb-3' spacing={2}>
                 <Grid item md={4} xs={12}>
                    <div>
                    <Field name="eating">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Eating</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

                   <Grid item md={4} xs={12}>
                    <div>
                    <Field name="bathing">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Bathing</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>


                 <Grid item md={4} xs={12}>
                    <div>
                    <Field name="grooning">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Grooming</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

                
         </Grid>

                         

         
               <Grid container  className='mb-3' spacing={2}>
                 <Grid item md={4} xs={12}>
                    <div>
                    <Field name="toileting">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Toileting</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

                   <Grid item md={4} xs={12}>
                    <div>
                    <Field name="dressingupper">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Dressing-Upper Body</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>


                 <Grid item md={4} xs={12}>
                    <div>
                    <Field name="dressinglower">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Dressing-Lower Body</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

                
         </Grid>

                         


<h4 className='m-2 '><u>Communication</u></h4>


         
               <Grid container  className='mb-3' spacing={2}>
                 <Grid item md={6} xs={12}>
                    <div>
                    <Field name="expression">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Expression</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

                   <Grid item md={6} xs={12}>
                    <div>
                    <Field name="compsehension">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Comprehension</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

                
         </Grid>

                         


<h4 className='m-2 '><u>Mobility</u></h4>
         
               <Grid container  className='mb-3' spacing={2}>
                 <Grid item md={4} xs={12}>
                    <div>
                    <Field name="tronsfes">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Transfers Chair</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

                   <Grid item md={4} xs={12}>
                    <div>
                    <Field name="tronsfes">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Transfers Toilet</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>


                 <Grid item md={4} xs={12}>
                    <div>
                    <Field name="transfestab">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Transfers Tab</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

                
         </Grid>

                         



<h4 className='m-2 '><u>Locomotion</u></h4>

         
               <Grid container  className='mb-3' spacing={2}>
                 <Grid item md={4} xs={12}>
                    <div>
                    <Field name="crowlswalk">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Crawls/walk/Wheelchair</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

                   <Grid item md={4} xs={12}>
                    <div>
                    <Field name="stairs">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Stairs</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>


                      
         </Grid>

                         


<h4 className='m-2 '><u> Social Cognition</u></h4>
         
               <Grid container  className='mb-3' spacing={2}>
                 <Grid item md={4} xs={12}>
                    <div>
                    <Field name="socialinteraction">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Social Interaction</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

                   <Grid item md={4} xs={12}>
                    <div>
                    <Field name="problemsolving">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Problem Solving</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>


                 <Grid item md={4} xs={12}>
                    <div>
                    <Field name="memory">
                      {({ input }) => (
                        <div className="fullw10 ">
                          <label className="name">Memory</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

                
         </Grid>

                         



    <div className='mb-4'> <h4 ><u>Present Medication</u></h4> </div>

         
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
                    <Field name="clinicalimpression">
                      {({ input }) => (
                        <div className="">
                          <label className="widthsame bold">Clinical Impression</label>
                          <input type="text" {...input} placeholder="" className='lastw'/>
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>


               <Grid item md={12} xs={12}>
                    <div>
                    <Field name="Treatmentgoal">
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
                    <Field name="Treatmentplan">
                      {({ input }) => (
                        <div className="">
                          <label className="widthsame bold">Treatment Plan</label>
                          <input type="text" {...input} placeholder="" className='lastw' />
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
export default Paediatric;