import React from "react";
import "./App.css";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import { Form, Field } from "react-final-form";


import { Button } from "@material-ui/core";

import { Paper, Checkbox, Grid, FormControlLabel } from "@material-ui/core";

function Cardio(props) {

  
  const onSubmit = (formValues) => {
    console.log(formValues);

   
  };
  const initialValues = { date: new Date().toISOString().substr(0, 10) };

  return (
    <div className="">
      <h3 className='text-center mt-3'>
        <u>Cardio-Pulmonary Evaluation</u>
      </h3>

      <Form onSubmit={onSubmit} initialValues={initialValues}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit} noValidate>
            <Paper style={{ padding: 50 }}>
              <Grid container alignItems="flex-start" spacing={2}>
                <Grid item xs={8}>
                  <div>
                    <Field name="date">
                      {({ input }) => (
                        <div className="cardio4 fullw10">
                          <label className="ass">Date Of Assessment</label>
                          <input type="date" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
                <Grid item xs={4}>
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

              <Grid container alignItems="flex-start" spacing={2}>
                <Grid item xs={3}>
                  <div>
                    <Field name="name">
                      {({ input }) => (
                        <div className="cardio fullw10">
                          <label className="name">Name</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item xs={3}>
                  <div>
                    <Field name="age">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="age">Age</label>

                          <input type="text" {...input} placeholder="" />
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
                <Grid item xs={3}>
                  <div className="">
                    <Field name="occupation">
                      {({ input }) => (
                        <div className="cardio fullw10">
                          <label>Occupation</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <div>
                    <Field name="address">
                      {({ input }) => (
                        <div className="cardio2">
                          <label className="age">Address</label>

                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item xs={4}>
                  <div>
                    <Field name="admissiondate">
                      {({ input }) => (
                        <div className="cardio5">
                          <label>Date Of Addmission</label>
                          <input type="date" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div>
                    <Field name="dateofsurgery">
                      {({ input }) => (
                        <div className="cardiok">
                          <label>Date Of Surgery</label>
                          <input type="date" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div className="">
                    <Field name="ward">
                      {({ input }) => (
                        <div className="cardio5 fullw10">
                          <label className="ward">Ward</label>
                          <input type="number" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div>
                    <Field name="chief">
                      {({ input }) => (
                        <div className="field2">
                          <label className="viral">Chief Complaint</label>
                          <textarea
                            className="viral2"
                            row="3"
                            {...input}
                          ></textarea>
                        </div>
                      )}
                    </Field>
                  </div>
                  <br />
                  <div>
                    <Field name="presentmedicalhistory">
                      {({ input }) => (
                        <div className="field2">
                          <label className="viral">
                            Present Medical History
                          </label>
                          <textarea
                            className="viral2"
                            row="3"
                            {...input}
                          ></textarea>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div>
                    <Field name="pastmedicalhistory">
                      {({ input }) => (
                        <div className="field2">
                          <label className="viral">Past Medical History</label>
                          <textarea
                            className="viral2"
                            row="3"
                            {...input}
                          ></textarea>
                        </div>
                      )}
                    </Field>
                    <br />

                    {/* <label>Personal History</label> */}
                    <Grid container alignItems="flex-start" spacing={2}>
                      <Grid item xs={6}>

                      <div>
            <label className='mb-5'>Personal Medical History</label>
            <div className=''>
              <label className='mr-5'>
                <Field
                  name="personalhistory"
                  component="input"
                  type="checkbox"
                  value="Smoking"
                className='mr-3'/>
                Smoking
              </label>
              <label className='ml-4'>
                <Field
                  name="personalhistory"
                  component="input"
                  type="checkbox"
                  value="Tobacco"
                className='mr-3'/>
                Tobacco
              </label>
              </div>
              <div >
              <label className='mr-5'>
                <Field
                  name="personalhistory"
                  component="input"
                  type="checkbox"
                  value="Alcohol"
                className='mr-3'/>
                Alcohol
              </label>
              <label className= 'ml-4'>
                <Field
                  name="personalhistory"
                  component="input"
                  type="checkbox"
                  value="Allergy"
                className='mr-3'/>
                Allergy
              </label>
            </div>
          </div>


                  
                       


                      </Grid>
                    </Grid>


                  </div>
                </Grid>


              </Grid>
            </Paper>

            <h4 className='ml-4'>
              <u>Vital Signs</u>
            </h4>

            <Paper style={{ padding: 50 }}>
              <Grid container alignItems="flex-start" spacing={2}>
                <Grid item xs={4}>
                  <Field name="heartrate">
                    {({ input }) => (
                      <div className="cardio">
                        <label className="name">Heart Rate</label>
                        <input type="number" {...input} placeholder="" />
                      </div>
                    )}
                  </Field>

                  <br />
                  <div>
                    <Field name="spo">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">SpO2</label>
                          <input type="number" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                  <br />
                  <div>
                    <Field name="clubbing">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Clubbing</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                  <br />
                  <div>
                    <Field name="cynosis">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Cyanosis</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                  <br />
                  <div>
                    <Field name="bodybuilt">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Body Built</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item xs={4}>
                  <div>
                    <Field name="bloodpre">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Blood Pressure</label>
                          <input type="number" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                  <br />
                  <div>
                    <Field name="conscounus">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Consciousness</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                  <br />
                  <div>
                    <Field name="coloroflimb">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Color Of Limb</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                  <br />
                  <div>
                    <Field name="speech">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Speech</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                  <br />
                  <div>
                    <Field name="facial">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Facial Expression</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                  <br />
                </Grid>
                <Grid item xs={4}>
                  <div>
                    <Field name="respiratoryrate">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Respiratory Rate</label>
                          <input type="number" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                  <br />
                  <div>
                    <Field name="bodytemperature">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Body Temperature</label>
                          <input type="number" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                  <br />
                  <div>
                    <Field name="edema">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Edema</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                  <br />
                  <div>
                    <Field name="dyspnoea">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Dyspnoea</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>

                  <br />
                  <div>
                    <Field name="external">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">External Appliances</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
              </Grid>

              <br />
              <br />
              <br />
            </Paper>
            <h4 className='ml-4'>
              <u>Signs Of Respiratory Distress</u>
            </h4>
            <br />

            <Paper style={{ padding: 50 }}>
              <Grid container alignItems="flex-start" spacing={1}>
                <Grid item xs={4}>
                  <div>
                    <Field name="nasal">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Nasal Flaring</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                  <br />
                  <div>
                    <Field name="cavity">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Thoracic Cavity</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                  <br />
                  <div>
                    <Field name="chestde">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Chest Deformity</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div>
                    <Field name="accessorymus">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Accessory Muscle</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>

                  <br />
                  <div>
                    <Field name="spacing">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">
                            Spacing Of Intercoastal
                          </label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                  <br />
                  <div>
                    <Field name="breathing">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Breathing Type</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div>
                    <Field name="shoulder">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Shoulder</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                  <br />
                  <div>
                    <Field name="trachea">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Trachea</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                  <br />
                  <div>
                    <Field name="moving">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Moving/Unmoving Chest</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
              </Grid>
            </Paper>

            <Paper style={{ padding: 50 }}>
              <Grid container alignItems="flex-start" spacing={2}>
                <Grid item xs={6}>
                  <div>
                    <Field name="assessment">
                      {({ input }) => (
                        <div className="field2">
                          <label className="viral">
                            Assessment Of Anterior Thoracic Expansion
                          </label>
                          <textarea
                            className="viral2"
                            row="3"
                            {...input}
                          ></textarea>
                        </div>
                      )}
                    </Field>
                  </div>

                  <br />

                  <div>
                    <Field name="upperlobe">
                      {({ input }) => (
                        <div className=" fullw10">
                          <label>Upper Lobe</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                  <br />
                  <div>
                    <Field name="middlelobe">
                      {({ input }) => (
                        <div className=" fullw10">
                          <label>Middle Lobe</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                  <br />
                  <div>
                    <Field name="lowerlobe">
                      {({ input }) => (
                        <div className=" fullw10">
                          <label>Lower Lobe</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item xs={6}>
                  <div>
                    <Field name="aopte">
                      {({ input }) => (
                        <div className="field2 fullw10">
                          <label className="viral">
                            Assessment Of Posterior Thoracic Expansion
                          </label>
                          <textarea
                            className="viral2"
                            row="3"
                            {...input}
                          ></textarea>
                        </div>
                      )}
                    </Field>
                  </div>
                  <br />

                  <div>
                    <Field name="trachialposition">
                      {({ input }) => (
                        <div className="fullw10">
                          <label>Tracheal Position</label>

                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                  <br />
                  <div>
                    <Field name="heartposition">
                      {({ input }) => (
                        <div className=" fullw10">
                          <label>Heart Position</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                  <br />

                  <div>
                    <Field name="mediastinalposition">
                      {({ input }) => (
                        <div className=" fullw10">
                          <label>Mediastinal Position</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
              </Grid>
            </Paper>

            <h4 className='ml-4'>
              <u>On Palpation</u>
            </h4>

            <Paper style={{ padding: 50 }}>
              <Grid container alignItems="flex-start" spacing={2}>
                <Grid item xs={4}>
                  <div>
                    <Field name="tenderness">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Tenderness</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                  <br />
                  <div>
                    <Field name="diaphragmatic">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Diaphragmatic Exertion</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item xs={4}>
                  <div>
                    <Field name="fremitus">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Fremitus</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                  <br />
                  <div>
                    <Field name="xiphoid">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Xiphoid Level</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div>
                    <Field name="accessorymuscles">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Accessory Muscles</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                  <br />
                  <div>
                    <Field name="onpercusion">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">On Percussion</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
              </Grid>
            </Paper>

            <h4 className='ml-4'>
              <u>On Auscultation</u>
            </h4>

            <Paper style={{ padding: 50 }}>
              <Grid container alignItems="flex-start" spacing={1}>
                <Grid item xs={4}>
                  <div>
                    <Field name="breathsound">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Breath Sounds</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div>
                    <Field name="abnormalbreath">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Abnormal Breath Sounds</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div>
                    <Field name="heartsound">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Heart Sounds</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
              </Grid>
            </Paper>

            <h4 className='ml-4'>
              <u>Examination</u>
            </h4>

            <Paper style={{ padding: 50 }}>
              <Grid container alignItems="flex-start" spacing={2}>
                <Grid item xs={4}>
                  <div>
                    <Field name="integumentary">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Integumentary System</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>

                  <br />
                  <div>
                    <Field name="posturalassessment">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Postural Assessment</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>

                  <br />
                  <div>
                    <Field name="assesscoordinate">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">
                            Assess Co-ordinated Movement
                          </label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>

                  <br />
                  <div>
                    <Field name="sputum">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Sputum Examination</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>

                  <br />
                  <div>
                    <Field name="bloodexam">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Blood Examination</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>

                  <br />
                  <div>
                    <Field name="chestxray">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Chest X-ray</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>

                  <br />
                  <div>
                    <Field name="stresstest">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Stress Test</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>

                  <br />
                  <div>
                    <Field name="agiogram">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Angiogram</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div>
                    <Field name="musulo">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Musculo-skeletal </label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>

                  <br />
                  <div>
                    <Field name="neurosystem">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Neurological System</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>

                  <br />
                  <div>
                    <Field name="assessbalance">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Assess Balance</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>

                  <br />
                  <div>
                    <Field name="coughtype">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Cough Type</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>

                  <br />
                  <div>
                    <Field name="abgreport">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">ABG Report</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>

                  <br />
                  <div>
                    <Field name="pft">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">PFT</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>

                  <br />
                  <div>
                    <Field name="echocardiogram">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">2-D Echo Cardiogram</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>

                  <br />
                  <div>
                    <Field name="ultrasound">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Ultrasound Scan</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div>
                    <Field name="any">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Any Deformity</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>

                  <br />
                  <div>
                    <Field name="incision">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Incision/Sear</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>

                  <br />
                  <div>
                    <Field name="assess">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Assess Equilibrium</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>

                  <br />
                  <div>
                    <Field name="aggravating">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Aggravating Factors</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>

                  <br />
                  <div>
                    <Field name="ecgreport">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">ECG Report</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>

                  <br />
                  <div>
                    <Field name="ctscan">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">CT Scan</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>

                  <br />
                  <div>
                    <Field name="mriscan">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">MRI Scan</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>

                  <br />
                  <div>
                    <Field name="provisional">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Provisional Diagnosis</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
              </Grid>


<h4 className='m-3'>
              <u>Physio Treatment</u>
            </h4>
               <Grid container  className='mb-3 ' spacing={2}>
              

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

               
            <br />
            <div className='text-center mb-3'>  <Button
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


const mapStateToProps = (state) => {
  return {
    // consultant:state.auth.user.name,
    cardioexamData: state.cardioexamData,
  };
};

export default Cardio;

