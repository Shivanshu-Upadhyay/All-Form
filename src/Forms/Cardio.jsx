import React from "react";
import "./App.css";
import { Form, Field } from "react-final-form";



import { Paper, Checkbox, Grid, FormControlLabel } from "@material-ui/core";

function Cardio(props) {

  
  const onSubmit = (formValues) => {
    console.log(formValues);

   
  };
  const initialValues = { date: new Date().toISOString().substr(0, 10) };

  return (
    <div className="ssss">
      <h3>
        <u>CARDIO-PULMONARY EVALUTION</u>
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
                        <div className="cardio4">
                          <label className="ass">Date Of Assessment-</label>
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
                        <div className="cardio">
                          <label>Patient ID-</label>
                          <input type="number" {...input} placeholder="" />
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
                        <div className="cardio">
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
                        <div className="cardio1">
                          <label className="age">Age</label>

                          <input type="number" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
                <Grid item xs={3}>

               
                  <div className="ww">
                  <label>Gender-</label>

<label className='p-1 bold1'>
M:<Field name="gender" type="radio" value="M" component="input" />
</label>

 <label className='p-1 bold1'>
F:<Field name="gender" type="radio" value="F" component="input" />
</label>

<label className='p-1 bold1'>
O:<Field name="gender" type="radio" value="O" component="input" />
</label>

                
               

              
             
               
                  </div>
                </Grid>
                <Grid item xs={3}>
                  <div className="qq">
                    <Field name="occupation">
                      {({ input }) => (
                        <div className="cardio">
                          <label>Occupation-</label>
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
                  <div className="www">
                    <Field name="ward">
                      {({ input }) => (
                        <div className="cardio5">
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
                      <Grid item xs={3}>

                      <div>
            <label>Personal Medical History</label>
            <div className="xy">
              <label className='pr-5'>
                <Field
                  name="personalhistory"
                  component="input"
                  type="checkbox"
                  value="Smoking"
                />
                Smoking
              </label>
              <label className='pl-4'>
                <Field
                  name="personalhistory"
                  component="input"
                  type="checkbox"
                  value="Tobacco"
                />
                Tobacco
              </label>
              </div>
              <div className="xy">
              <label className='pr-5'>
                <Field
                  name="personalhistory"
                  component="input"
                  type="checkbox"
                  value="Alcohol"
                />
                Alcohol
              </label>
              <label className= 'pl-5'>
                <Field
                  name="personalhistory"
                  component="input"
                  type="checkbox"
                  value="Allergy"
                />
                Allergy
              </label>
            </div>
          </div>


                  
                        {/* <FormControlLabel
                          value="smoking"
                          control={
                            <Checkbox style={{ transform: "scale(1)" }} />
                          }
                          label="Smoking"
                          labelPlacement="start"
                        />
                        <FormControlLabel
                          value="alcohol"
                          control={<Checkbox style={{ width: "42px" }} />}
                          label="Alcohol"
                          labelPlacement="start"
                        />
                      </Grid>
                      <Grid item xs={3}>
                        <FormControlLabel
                          value="tobacco"
                          control={<Checkbox color="primary" />}
                          label="Tobacco"
                          labelPlacement="start"
                        />

                        <FormControlLabel
                          value="allergy"
                          control={<Checkbox style={{ width: "42px" }} />}
                          label="Allergy"
                          labelPlacement="start"
                        /> */}


                      </Grid>
                    </Grid>


                  </div>
                </Grid>

                <Grid item xs={12}>
                  <Field name="bodychart">
                    {({ input }) => (
                      <div  className="field2">
                        <label className="viral">Body Chart</label>
                        <textarea
                        
                          className="viral27"
                          row="3"
                  
                          {...input}
                        ></textarea>
                      </div>
                    )}
                  </Field>
                </Grid>
              </Grid>
            </Paper>

            <h3>
              <u>VITAL SIGNS</u>
            </h3>

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
            <h3>
              <u>SIGNS OF RESPIRATORY DISTRESS</u>
            </h3>
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
                        <div className="pp">
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
                        <div className="pp">
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
                        <div className="pp">
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
                        <div className="field2">
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
                        <div className="pp">
                          <label>Trachial Position</label>

                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                  <br />
                  <div>
                    <Field name="heartposition">
                      {({ input }) => (
                        <div className="pppp">
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
                        <div className="ppp">
                          <label>Mediastinal Position</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
              </Grid>
            </Paper>

            <h3>
              <u>ON PALPATION</u>
            </h3>

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
                          <label className="name">On Percusion</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
              </Grid>
            </Paper>

            <h3>
              <u>ON AUSCULTATION</u>
            </h3>

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

            <h2>
              <u>EXAMINATION</u>
            </h2>

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
                          <label className="name">Musculo-Skeletald </label>
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
                          <label className="name">UltraSound Scan</label>
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
            </Paper>

            <h3>
              <u>PHYSIO TREATMENT</u>
            </h3>

            <Grid container alignItems="flex-start" spacing={1}>
              <Grid item xs={6}>
                <div>
                  <Field name="treatementgoal">
                    {({ input }) => (
                      <div className="field">
                        <label> Treatement Goal--</label>
                        <input type="text" {...input} placeholder="" />
                      </div>
                    )}
                  </Field>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div>
                  <Field name="treatementplan">
                    {({ input }) => (
                      <div className="field">
                        <label>Treatement Plan--</label>
                        <input type="text" {...input} placeholder="" />
                      </div>
                    )}
                  </Field>
                </div>
              </Grid>
            </Grid>
            <br />
            <div className ="mb-5"style={{ textAlign: "center" }}>
              <button className="uiibutton">Save</button>
            </div>
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

