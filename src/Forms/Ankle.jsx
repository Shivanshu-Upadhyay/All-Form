import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import { Form, Field } from "react-final-form";

import SaveIcon from '@material-ui/icons/Save';

import AnkleTable from './AnkleTable'
import NewSlider from "./NewSlider";


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


function Ankle() {
  const onSubmit = (formValues) => {
    console.log(formValues);
  };


  

  return (
    <div  >
      <h3 className="text-center mt-3"> Ankle & Foot Evaluation</h3>

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
                        <div className="upname fullw10 ">
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
                  <div className='fullw10 mb-3'>
                    <Field name="LimitationsofADLs">
                      {({ input }) => (
                        <div className="">
                          <label className="">Limitations of ADLs</label>
                           
                          <input type="text" {...input} placeholder=""className='fullw100' />
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
                   <div className='fullw10'>
                    <label>Bruises</label>
            <Field name="Bruises" component="select">
              <option />
              <option value="bruleft">Left</option>
              <option value="bruright"> Right</option>
              <option value="brubilateral"> Bilateral</option>
             
            </Field>
                  </div>
                </Grid>
               </Grid>



<Grid container  spacing={2} className='mb-3'>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Tenderness">
                      {({ input }) => (
                        <div className='fullw10'>
                          <label className=" ">Tenderness</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div className='fullw10'>
                    <label>Proprioception</label>
            <Field name="Proprioception" component="select">
              <option />
              <option value="propleft">Left</option>
              <option value="propright"> Right</option>
              <option value="propbilateral"> Bilateral</option>
             
            </Field>
             <Field name="pro2" component="select" className='ml-2'>
              <option />
              <option value="normal">Normal</option>
              <option value="absent"> Absent</option>
              
             
            </Field>
                  </div>
                  
                </Grid>
                
               </Grid>






<div className='mb-3'> <h4><u>Pain Assessment</u></h4>  </div>


{/* ++++++++++++++++++++++++++++++++= */}



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
                        <div className='fullw10'>
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
                        <div className='fullw10'>
                          <label className="">Site Of Pain</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
                
               </Grid>





<Grid container  spacing={2} className='mb-2'>
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



<Grid container  spacing={2} className='mb-3'>
                <Grid item md={6} xs={12}>
                  <div className='fullw10'>
                    <label>Aggravating Factors</label>
                 <Field name="Aggravating Factors" component="select">
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
            <Field name="Relieving Factors" component="select">
              <option />
              <option value="Rest">Rest</option>
              <option value="Positioning"> Positioning</option>
              <option value="Heat Therapy"> Heat Therapy</option>
               <option value="Icing">Icing</option>
              <option value="Medicines"> Medicines</option>
             
              <option value="Other2"> Other</option>
             
            </Field>
                  </div>
                </Grid>

               </Grid>














{/* +++++++++++++++++++Table1+++++++++++++++++++++++++++ */}
     

  <div className='mb-5'></div>
       <Grid container className='mb-3'>
          <Grid item xs={12}>

              <div>
               <AnkleTable />
                  </div>
          </Grid>
           </Grid>




              
             

{/* +++++++++++++++++++EndTable+++++++++++++++++++++++++++ */}









<div className='mb-3'> <h4><u>Muscle Strength</u></h4>  </div>

<Grid container  spacing={2} className=''>
                <Grid item md={4} xs={12}>
                  <div>
                  <h6 className=''> <u>Movements</u> </h6>
                  </div>
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
                    <Field name="Dorsiflexors">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Dorsiflexors</label>

                          <input type="text" {...input} placeholder="" className='newinput'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="DorsiflexorsTest2">
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
                    <Field name="PlantarFlexors">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Plantar Flexors</label>

                          <input type="text" {...input} placeholder="" className='newinput'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="PlantarFlexorsTest2">
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
                    <Field name="Evestors">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Evertors</label>

                          <input type="text" {...input} placeholder="" className='newinput'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Evestors2">
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
                    <Field name="Invertors">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Invertors</label>

                          <input type="text" {...input} placeholder="" className='newinput'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Invertors1">
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
                    <Field name="FlexorDigiotorum">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Flexor Digitorum</label>

                          <input type="text" {...input} placeholder="" className='newinput'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="FlexorDigiotorum2">
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
                    <Field name="ExtensorDigitorum">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Extensor Digitorum</label>

                          <input type="text" {...input} placeholder="" className='newinput'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="ExtensorDigitorum3">
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
                    <Field name="EHL/EHB">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">EHL/EHB</label>

                          <input type="text" {...input} placeholder="" className='newinput'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="EHL/EHB4">
                      {({ input }) => (
                        <div >
                          

                           
                          <input type="text" {...input} placeholder="" className='newinput ml-5'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
               
               </Grid>




             
<div className='mb-3'> <h4><u>Special Tests</u></h4>  </div>

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
                    <Field name="AnteriorDrawerTest">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Anterior Drawer Test</label>

                          <input type="text" {...input} placeholder="" className='newinput'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="AnteriorDrawerTestTest2">
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
                    <Field name="InversionTalarTiltTest">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Inversion Talar Tilt Test</label>

                          <input type="text" {...input} placeholder="" className='newinput'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="InversionTalarTiltTestTest2">
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
                    <Field name="EversionTalarTiltTest">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Eversion  Talar Tilt Test</label>

                          <input type="text" {...input} placeholder="" className='newinput'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="EversionTalariltTest2">
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
                    <Field name="SqueezeTest">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Squeeze Test</label>

                          <input type="text" {...input} placeholder="" className='newinput'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="SqueezeTest1">
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
                    <Field name="ThompsonTest">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Thompson Test</label>

                          <input type="text" {...input} placeholder="" className='newinput'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="ThompsonTest2">
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
                    <Field name="VarusMTP">
                      {({ input }) => (
                        <div className="">

                          <label className=" wsame ">Varus/Valgus Stress Testing Of MTP</label>

                          <input type="text" {...input} placeholder="" className='newinput'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12} className='mt-4'>
                  <div >
                    <Field name="VarusVolguTP3">
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
                    <Field name="Treatment PLAN">
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
                               style={{backgroundColor:'#2185d0',textTransform:"capitalize"}}  >
                                   Save
                                </Button></div>








                            
            </Paper>
          </form>
        )}
      </Form>
    </div>
  );
}
export default Ankle;