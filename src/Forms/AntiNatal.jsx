import React, { useState } from "react";

import { connect } from "react-redux";
// import { addAntiNatalData } from "./antiNatalAction";


import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { Form, Field } from "react-final-form";
import Table from "react-bootstrap/Table";

import { Slider } from "@material-ui/core";
import { Paper, Grid } from "@material-ui/core";

function AntiNatal(props) {
  const onSubmit = (formValues) => {
    console.log(formValues);

    props.addAntiNatalData(formValues);
  };

  const [AntiNatalExam, setAntiNatalExam] = React.useState({
    c1: {},
    c2: {},
  });
  const [value, setValue] = useState(20);
  const changeValue = (event, value) => {
    setValue(value);
  };
  const getText = (value) => "${value}";

  return (
    <div >
      <h3 className='text-center mt-3'>
        <u>Anenatal Assessment</u>
      </h3>

      <Form onSubmit={onSubmit}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit} noValidate>
            <Paper style={{ padding: 50 }}>
              <Grid container alignItems="flex-start" spacing={2}>
                <Grid item xs={8}>
                  <div>
                    <Field name="dateofassessment">
                      {({ input }) => (
                        <div className="cardio4 fullw10">
                          <label className="ass"> Assessment Date</label>
                          <input type="date" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div>
                    <Field name="patientID">
                      {({ input }) => (
                        <div className="cardio fullw10">
                          <label>Patient ID</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid container  >
                  <Grid item xs={3} className='mb-3' >
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
                  <Grid item xs={3}>
                    <div className="">
                      <label className=" d-block">Marrital Status</label>
                      
                      <Field className ="d-block" component ="select">
                        <option></option>
                        <option value="married">Married</option>
                        <option value="single">Single</option>
                        </Field>
                      {/* </select> */}
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

                  <Grid item xs={4}>
                    <div>
                      <Field name="height">
                        {({ input }) => (
                          <div className="cardio">
                            <label className="name">Height</label>
                            <input type="number" {...input} placeholder="" />
                          </div>
                        )}
                      </Field>
                    </div>

                    
                  </Grid>
                  <Grid item xs={4}>
                    <div>
                      <Field name="weight">
                        {({ input }) => (
                          <div className="cardio fullw10">
                            <label className="">Weight</label>
                            <input type="number" {...input} placeholder="" />
                          </div>
                        )}
                      </Field>
                    </div>

                    <br />
                  </Grid>

                  <Grid item xs={4}>
                    <div className="">
                      <Field name="bmi">
                        {({ input }) => (
                          <div className="cardio fullw10">
                            <label className="">BMI</label>
                            <input type="number" {...input} placeholder="" />
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
                </Grid>
              </Grid>
              <br />
              <h4 className='m-3'>
                <u>Chief Complaints</u>
              </h4>

              <Grid container alignItems="flex-start" spacing={2}>
                <Grid item xs={4}>
                  <div>
                    <Field name="nausea">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Nausea/Vomiting</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>

                  <br />
                  <div>
                    <Field name="headache">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">
                            Headache/Epigastric pain
                          </label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>

                  <br />
                  <div>
                    <Field name="discomfort">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Discomfort</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div>
                    <Field name="periodofamenorrhoea">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Period Of Amenorrhoea </label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>

                  <br />
                  <div>
                    <Field name="swelling">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Swelling</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>

                  <br />
                  <div>
                    <Field name="musculoskeletal">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Musculoskeletal</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item xs={4}>
                  <div>
                    <Field name="cramps">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Cramps</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>

                  <br />
                  <div>
                    <Field name="frequencyofmicturition">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">
                            Frequency Of Micturition
                          </label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
              </Grid>
              <br />
              <h4 className='m-3'>
                <u>History Of Gastrointestinal System</u>
              </h4>
              <Grid container alignItems="flex-start" spacing={2}>
                <Grid item xs={4}>
                  <Field name="lossofappetite">
                    {({ input }) => (
                      <div className="cardio">
                        <label className="name">Loss Of Appetite</label>
                        <input type="text" {...input} placeholder="" />
                      </div>
                    )}
                  </Field>
                  <br />
                  <Field name="constipation">
                    {({ input }) => (
                      <div className="cardio">
                        <label className="name">Constipation</label>
                        <input type="text" {...input} placeholder="" />
                      </div>
                    )}
                  </Field>
                </Grid>

                <Grid item xs={4}>
                  <Field name="heartburn">
                    {({ input }) => (
                      <div className="cardio">
                        <label className="name">Heart Burn</label>
                        <input type="text" {...input} placeholder="" />
                      </div>
                    )}
                  </Field>
                </Grid>
                <Grid item xs={4}>
                  <div>
                    <Field name="lossofweight">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Loss Of Weight</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
              </Grid>
              <br />
              <h4 className='m-3'>
                <u>History Of Genitourinary System</u>
              </h4>
              <Grid container alignItems="flex-start" spacing={2}>
                <Grid item xs={4}>
                  <Field name="incontinence">
                    {({ input }) => (
                      <div className="cardio">
                        <label className="name">Incontinence</label>
                        <input type="text" {...input} placeholder="" />
                      </div>
                    )}
                  </Field>
                  <br />
                  <Field name="polyuria">
                    {({ input }) => (
                      <div className="cardio">
                        <label className="name">Polyuria</label>
                        <input type="text" {...input} placeholder="" />
                      </div>
                    )}
                  </Field>
                </Grid>

                <Grid item xs={4}>
                  <Field name="prolapse">
                    {({ input }) => (
                      <div className="cardio">
                        <label className="name">Prolapse</label>
                        <input type="text" {...input} placeholder="" />
                      </div>
                    )}
                  </Field>
                </Grid>
                <Grid item xs={4}>
                  <div>
                    <Field name="burningmicturition">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Burning Micturition</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
              </Grid>
              <br />
              <h4 className='m-3'>
                <u>History Of Cardio-Respiratory System</u>
              </h4>

              <Grid container alignItems="flex-start" spacing={2}>
                <Grid item xs={4}>
                  <div>
                    <Field name="cardiacproblem">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Cardiac Problem</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                  <br />
                  <div>
                    <Field name="historyoftb">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Any History Of TB</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item xs={4}>
                  <div>
                    <Field name="seizures">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Seizures</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                  <br />
                  <div>
                    <Field name="anaemia">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Anaemia</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div>
                    <Field name="bludpressure">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Blood Pressure</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                  <br />
                  <div>
                    <Field name="rhcompatibility">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Rh Compatibility</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
              </Grid>
              <br />
              <br />
              <Grid item xs={12}>
                <div>

                <h4 className='m-3'><u>History Of Musculoskeletal Problem</u> </h4>
                  <Field name="historyofmusculoskeletal">
                    {({ input }) => (
                      <div className="cardio2">
                        <label className="ages">
                          
                        </label>

                        <input type="text" {...input} placeholder="" />
                      </div>
                    )}
                  </Field>
                </div>
              </Grid>

              <h4 className='m-3'>
                <u>Associated Medical Conditions</u>
              </h4>
              <Grid container alignItems="flex-start" spacing={2}>
                <Grid item xs={4}>
                  <div className="text-center">
                    <div class="field">
                      <label className="yes">
                        <h5>Cardiac Problems</h5>
                      </label>
                      <ButtonGroup color="primary">
                        <Button
                          onClick={() => {
                            setAntiNatalExam({
                              ...AntiNatalExam,
                              c1: { ...AntiNatalExam.c1, 1: 1 },
                            });
                          }}
                          variant={
                            AntiNatalExam.c1["1"] === 1 ? "contained" : "outlined"
                          }
                        >
                          YES
                        </Button>
                        <Button
                          onClick={() => {
                            setAntiNatalExam({
                              ...AntiNatalExam,
                              c1: { ...AntiNatalExam.c1, 1: 2 },
                            });
                          }}
                          variant={
                            AntiNatalExam.c1["1"] === 2 ? "contained" : "outlined"
                          }
                        >
                          NO
                        </Button>
                      </ButtonGroup>
                    </div>
                  </div>
                </Grid>

                <Grid item xs={4}>
                  <div className="text-center1">
                    <div class="field">
                      <label className="yess d-block">
                        <h5>Asthma</h5>
                      </label>
                      <ButtonGroup color="primary">
                        <Button
                          onClick={() => {
                            setAntiNatalExam({
                              ...AntiNatalExam,
                              c1: { ...AntiNatalExam.c1, 5: 5 },
                            });
                          }}
                          variant={
                            AntiNatalExam.c1["5"] === 5 ? "contained" : "outlined"
                          }
                        >
                          YES
                        </Button>
                        <Button
                          onClick={() => {
                            setAntiNatalExam({
                              ...AntiNatalExam,
                              c1: { ...AntiNatalExam.c1, 5: 6 },
                            });
                          }}
                          variant={
                            AntiNatalExam.c1["5"] === 6 ? "contained" : "outlined"
                          }
                        >
                          NO
                        </Button>
                      </ButtonGroup>
                    </div>
                  </div>
                </Grid>

                <Grid item xs={4}>
                  <div className="text-center">
                    <div class="field">
                      <label className="yes">
                        <h5>Hyper Or Hypothyroidism</h5>
                      </label>
                      <ButtonGroup color="primary">
                        <Button
                          onClick={() => {
                            setAntiNatalExam({
                              ...AntiNatalExam,
                              c1: { ...AntiNatalExam.c1, 2: 2 },
                            });
                          }}
                          variant={
                            AntiNatalExam.c1["2"] === 2 ? "contained" : "outlined"
                          }
                        >
                          YES
                        </Button>
                        <Button
                          onClick={() => {
                            setAntiNatalExam({
                              ...AntiNatalExam,
                              c1: { ...AntiNatalExam.c1, 2: 3 },
                            });
                          }}
                          variant={
                            AntiNatalExam.c1["2"] === 3 ? "contained" : "outlined"
                          }
                        >
                          NO
                        </Button>
                      </ButtonGroup>
                    </div>
                  </div>
                </Grid>

                <Grid item xs={4}>
                  <div className="text-center">
                    <div class="field">
                      <label className="yes">
                        <h5>Auto Immune Disorders</h5>
                      </label>
                      <ButtonGroup color="primary">
                        <Button
                          onClick={() => {
                            setAntiNatalExam({
                              ...AntiNatalExam,
                              c1: { ...AntiNatalExam.c1, 3: 3 },
                            });
                          }}
                          variant={
                            AntiNatalExam.c1["3"] === 3 ? "contained" : "outlined"
                          }
                        >
                          YES
                        </Button>
                        <Button
                          onClick={() => {
                            setAntiNatalExam({
                              ...AntiNatalExam,
                              c1: { ...AntiNatalExam.c1, 3: 4 },
                            });
                          }}
                          variant={
                            AntiNatalExam.c1["3"] === 4 ? "contained" : "outlined"
                          }
                        >
                          NO
                        </Button>
                      </ButtonGroup>
                    </div>
                  </div>
                </Grid>

                <Grid item xs={4}>
                  <div className="text-center">
                    <div class="field">
                      <label className="yes">
                        <h5>Congenital Defects</h5>
                      </label>
                      <ButtonGroup color="primary">
                        <Button
                          onClick={() => {
                            setAntiNatalExam({
                              ...AntiNatalExam,
                              c1: { ...AntiNatalExam.c1, 4: 4 },
                            });
                          }}
                          variant={
                            AntiNatalExam.c1["4"] === 4 ? "contained" : "outlined"
                          }
                        >
                          YES
                        </Button>
                        <Button
                          onClick={() => {
                            setAntiNatalExam({
                              ...AntiNatalExam,
                              c1: { ...AntiNatalExam.c1, 4: 5 },
                            });
                          }}
                          variant={
                            AntiNatalExam.c1["4"] === 5 ? "contained" : "outlined"
                          }
                        >
                          NO
                        </Button>
                      </ButtonGroup>
                    </div>
                  </div>
                </Grid>

                <Grid item xs={4}>
                  <div className="text-center">
                    <div class="field">
                      <label className="yes">
                        <h5>Diabetes</h5>
                      </label>
                      <ButtonGroup color="primary">
                        <Button
                          onClick={() => {
                            setAntiNatalExam({
                              ...AntiNatalExam,
                              c1: { ...AntiNatalExam.c1, 6: 6 },
                            });
                          }}
                          variant={
                            AntiNatalExam.c1["6"] === 6 ? "contained" : "outlined"
                          }
                        >
                          YES
                        </Button>
                        <Button
                          onClick={() => {
                            setAntiNatalExam({
                              ...AntiNatalExam,
                              c1: { ...AntiNatalExam.c1, 6: 7 },
                            });
                          }}
                          variant={
                            AntiNatalExam.c1["6"] === 7 ? "contained" : "outlined"
                          }
                        >
                          NO
                        </Button>
                      </ButtonGroup>
                    </div>
                  </div>
                </Grid>
              </Grid>
              <br />
              <h4 className='m-3'>
                <u>Personal History</u>
              </h4>

              <Grid container alignItems="flex-start" spacing={1}>
                <Grid item xs={4}>
                  <div>
                    <Field name="surgicalhistory">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Surgical History</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                  <br />
                  <div>
                    <Field name="drughistory">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Drug History</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                  <br />
                  <div>
                    <Field name="depression">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Depression</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div>
                    <Field name="familyhistory">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Family History</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>

                  <br />
                  <div>
                    <Field name="smokingalcohol">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Smoking /Alcohol</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                  <br />
                  <div>
                    <Field name="anxiety">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Anxiety</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div>
                    <Field name="twins">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Twins</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                  <br />
                  <div>
                    <Field name="sleepinghabit">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Sleeping Habits</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                  <br />
                  <div>
                    <Field name="emotionaldisturbance">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Emotional Disturbance</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
                
              </Grid>
            </Paper>

            {/* strt page 2 */}

            
            
            <div className="tables container">
            <h4 className='m-3'>Obsteric History</h4>
            <Table striped bordered hover id='tableAnti'>
              <thead>
                 
                <tr>
                  <th>S.No</th>
                  <th>No Of Deliveries</th>
                  <th>Mode Of Delievery</th>
                  <th>Complications</th>
                  <th>1st Stage Labour</th>
                  <th>2nd Stage Labour</th>
                  <th>Baby Sex</th>
                  <th>Baby Weight</th>
                </tr>

                <tr>
                  <th scope="row">1.</th>

                  <th>
                    <Field name="noofdeliveries">
                      {({ input }) => (
                        <input type="number" {...input} placeholder="" />
                      )}
                    </Field>
                  </th>
                  <th>
                    <Field name="modeofdeliveries">
                      {({ input }) => (
                        <input type="text" {...input} placeholder="" />
                      )}
                    </Field>
                  </th>
                  <th>
                    <Field name="complication">
                      {({ input }) => (
                        <input type="text" {...input} placeholder="" />
                      )}
                    </Field>
                  </th>
                  <th>
                    <Field name="firstststagelabour">
                      {({ input }) => (
                        <input type="text" {...input} placeholder="" />
                      )}
                    </Field>
                  </th>
                  <th>
                    <Field name="secondstagelabour">
                      {({ input }) => (
                        <input type="text" {...input} placeholder="" />
                      )}
                    </Field>
                  </th>
                  <th>
                    <Field name="babysex">
                      {({ input }) => (
                        <input type="text" {...input} placeholder="" />
                      )}
                    </Field>
                  </th>
                  <th>
                    <Field name="babyweight">
                      {({ input }) => (
                        <input type="number" {...input} placeholder="" />
                      )}
                    </Field>
                  </th>
                </tr>




                <tr>
                  <th scope="row">2.</th>
                  <th>
                  <Field name="noofdeliveries1">
                      {({ input }) => (
                        <input type="number" {...input} placeholder="" />
                      )}
                    </Field>
                  </th>
                  <th>
                    <Field name="modeofdeliveries1">
                      {({ input }) => (
                        <input type="text" {...input} placeholder="" />
                      )}
                    </Field>
                  </th>
                  <th>
                    <Field name="complication1">
                      {({ input }) => (
                        <input type="text" {...input} placeholder="" />
                      )}
                    </Field>
                  </th>
                  <th>
                    <Field name="firstststagelabour1">
                      {({ input }) => (
                        <input type="text" {...input} placeholder="" />
                      )}
                    </Field>
                  </th>
                  <th>
                    <Field name="secondstagelabour1">
                      {({ input }) => (
                        <input type="text" {...input} placeholder="" />
                      )}
                    </Field>
                  </th>
                  <th>
                    <Field name="babysex1">
                      {({ input }) => (
                        <input type="text" {...input} placeholder="" />
                      )}
                    </Field>
                  </th>
                  <th>
                    <Field name="babyweight1">
                      {({ input }) => (
                        <input type="number" {...input} placeholder="" />
                      )}
                    </Field>


      

                  </th>
                </tr>




                <tr>
                  <th scope="row">3.</th>

                  <th>
                  <Field name="noofdeliveries2">
                      {({ input }) => (
                        <input type="number" {...input} placeholder="" />
                      )}
                    </Field>
                  </th>
                  <th>
                    <Field name="modeofdeliveries2">
                      {({ input }) => (
                        <input type="text" {...input} placeholder="" />
                      )}
                    </Field>
                  </th>
                  <th>
                    <Field name="complication2">
                      {({ input }) => (
                        <input type="text" {...input} placeholder="" />
                      )}
                    </Field>
                  </th>
                  <th>
                    <Field name="firstststagelabour2">
                      {({ input }) => (
                        <input type="text" {...input} placeholder="" />
                      )}
                    </Field>
                  </th>
                  <th>
                    <Field name="secondstagelabour2">
                      {({ input }) => (
                        <input type="text" {...input} placeholder="" />
                      )}
                    </Field>
                  </th>
                  <th>
                    <Field name="babysex2">
                      {({ input }) => (
                        <input type="text" {...input} placeholder="" />
                      )}
                    </Field>
                  </th>
                  <th>
                    <Field name="babyweight2">
                      {({ input }) => (
                        <input type="number" {...input} placeholder="" />
                      )}
                    </Field>
                  </th>
                </tr>

                <tr>
                  <th scope="row">4.</th>
                  <th>
                  <Field name="noofdeliveries3">
                      {({ input }) => (
                        <input type="number" {...input} placeholder="" />
                      )}
                    </Field>
                  </th>
                  <th>
                    <Field name="modeofdeliveries3">
                      {({ input }) => (
                        <input type="text" {...input} placeholder="" />
                      )}
                    </Field>
                  </th>
                  <th>
                    <Field name="complication3">
                      {({ input }) => (
                        <input type="text" {...input} placeholder="" />
                      )}
                    </Field>
                  </th>
                  <th>
                    <Field name="firstststagelabour3">
                      {({ input }) => (
                        <input type="text" {...input} placeholder="" />
                      )}
                    </Field>
                  </th>
                  <th>
                    <Field name="secondstagelabour3">
                      {({ input }) => (
                        <input type="text" {...input} placeholder="" />
                      )}
                    </Field>
                  </th>
                  <th>
                    <Field name="babysex3">
                      {({ input }) => (
                        <input type="text" {...input} placeholder="" />
                      )}
                    </Field>
                  </th>
                  <th>
                    <Field name="babyweight3">
                      {({ input }) => (
                        <input type="number" {...input} placeholder="" />
                      )}
                    </Field>
                  </th>
                </tr>
                <tr>
                  <th scope="row">5.</th>
                  <th>
                  <Field name="noofdeliveries4">
                      {({ input }) => (
                        <input type="number" {...input} placeholder="" />
                      )}
                    </Field>
                  </th>
                  <th>
                    <Field name="modeofdeliveries4">
                      {({ input }) => (
                        <input type="text" {...input} placeholder="" />
                      )}
                    </Field>
                  </th>
                  <th>
                    <Field name="complication4">
                      {({ input }) => (
                        <input type="text" {...input} placeholder="" />
                      )}
                    </Field>
                  </th>
                  <th>
                    <Field name="firstststagelabour4">
                      {({ input }) => (
                        <input type="text" {...input} placeholder="" />
                      )}
                    </Field>
                  </th>
                  <th>
                    <Field name="secondstagelabour4">
                      {({ input }) => (
                        <input type="text" {...input} placeholder="" />
                      )}
                    </Field>
                  </th>
                  <th>
                    <Field name="babysex4">
                      {({ input }) => (
                        <input type="text" {...input} placeholder="" />
                      )}
                    </Field>
                  </th>
                  <th>
                    <Field name="babyweight4">
                      {({ input }) => (
                        <input type="number" {...input} placeholder="" />
                      )}
                    </Field>
                  </th>
                </tr>
                <tr>
                  <th scope="row">6.</th>
                  <th>
                  <Field name="noofdeliveries5">
                      {({ input }) => (
                        <input type="number" {...input} placeholder="" />
                      )}
                    </Field>
                  </th>
                  <th>
                    <Field name="modeofdeliveries5">
                      {({ input }) => (
                        <input type="text" {...input} placeholder="" />
                      )}
                    </Field>
                  </th>
                  <th>
                    <Field name="complication5">
                      {({ input }) => (
                        <input type="text" {...input} placeholder="" />
                      )}
                    </Field>
                  </th>
                  <th>
                    <Field name="firstststagelabour5">
                      {({ input }) => (
                        <input type="text" {...input} placeholder="" />
                      )}
                    </Field>
                  </th>
                  <th>
                    <Field name="secondstagelabour5">
                      {({ input }) => (
                        <input type="text" {...input} placeholder="" />
                      )}
                    </Field>
                  </th>
                  <th>
                    <Field name="babysex5">
                      {({ input }) => (
                        <input type="text" {...input} placeholder="" />
                      )}
                    </Field>
                  </th>
                  <th>
                    <Field name="babyweight5">
                      {({ input }) => (
                        <input type="number" {...input} placeholder="" />
                      )}
                    </Field>
                  </th>
                 
                </tr>
                <tr>
                  <th scope="row">7.</th>
                  <th>
                  <Field name="noofdeliveries6">
                      {({ input }) => (
                        <input type="number" {...input} placeholder="" />
                      )}
                    </Field>
                  </th>
                  <th>
                    <Field name="modeofdeliveries6">
                      {({ input }) => (
                        <input type="text" {...input} placeholder="" />
                      )}
                    </Field>
                  </th>
                  <th>
                    <Field name="complication6">
                      {({ input }) => (
                        <input type="text" {...input} placeholder="" />
                      )}
                    </Field>
                  </th>
                  <th>
                    <Field name="firstststagelabour6">
                      {({ input }) => (
                        <input type="text" {...input} placeholder="" />
                      )}
                    </Field>
                  </th>
                  <th>
                    <Field name="secondstagelabour6">
                      {({ input }) => (
                        <input type="text" {...input} placeholder="" />
                      )}
                    </Field>
                  </th>
                  <th>
                    <Field name="babysex6">
                      {({ input }) => (
                        <input type="text" {...input} placeholder="" />
                      )}
                    </Field>
                  </th>
                  <th>
                    <Field name="babyweight6">
                      {({ input }) => (
                        <input type="number" {...input} placeholder="" />
                      )}
                    </Field>
                  </th>
                </tr>
                <tr>
                  <th scope="row">8.</th>
                  <th>
                  <Field name="noofdeliveries7">
                      {({ input }) => (
                        <input type="number" {...input} placeholder="" />
                      )}
                    </Field>
                  </th>
                  <th>
                    <Field name="modeofdeliveries7">
                      {({ input }) => (
                        <input type="text" {...input} placeholder="" />
                      )}
                    </Field>
                  </th>
                  <th>
                    <Field name="complication7">
                      {({ input }) => (
                        <input type="text" {...input} placeholder="" />
                      )}
                    </Field>
                  </th>
                  <th>
                    <Field name="firstststagelabour7">
                      {({ input }) => (
                        <input type="text" {...input} placeholder="" />
                      )}
                    </Field>
                  </th>
                  <th>
                    <Field name="secondstagelabour7">
                      {({ input }) => (
                        <input type="text" {...input} placeholder="" />
                      )}
                    </Field>
                  </th>
                  <th>
                    <Field name="babysex7">
                      {({ input }) => (
                        <input type="text" {...input} placeholder="" />
                      )}
                    </Field>
                  </th>
                  <th>
                    <Field name="babyweight7">
                      {({ input }) => (
                        <input type="number" {...input} placeholder="" />
                      )}
                    </Field>
                  </th>
                </tr>
              </thead>
            </Table>
   
            </div>

            <Paper style={{ padding: 50 }}>
              <Grid container alignItems="flex-start" spacing={2}>
                <Grid item xs={12}>
                  <div>
                    <Field name="menstrualhistory">
                      {({ input }) => (
                        <div className="cardio2">
                          <label className="age">Menstrual History</label>

                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
              </Grid>

              <br />
              <h4 className='m-3'>
                <u>Pain Assessment</u>
              </h4>

              <Grid container alignItems="flex-start" spacing={2}>
                <Grid item xs={4}>
                  <div>
                    <Field name="painonset">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Pain Onset</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                  <br />
                  <div>
                    <Field name="siteofpain">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Site Of Pain</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item xs={4}>
                  <div>
                    <Field name="duration">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Duration</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                  <br />
                  <div>
                    <Field name="aggravatingfactors">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Aggravating Factors</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div>
                    <Field name="paintype">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Pain Type</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                  <br />
                  <div>
                    <Field name="relievingfactor">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Relieving Factors</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
              </Grid>

             
              <Grid container alignItems="flex-start" spacing={2}>
                <Grid item xs={4}>
                  <Field name="nightpain">
                    {({ input }) => (
                      <div className="cardio">
                        <label className="name">Night Pain</label>
                        <input type="text" {...input} placeholder="" />
                      </div>
                    )}
                  </Field>
                </Grid>

                <Grid item xs={4}>
                  <Field name="irritabilitylevel">
                    {({ input }) => (
                      <div className="cardio">
                        <label className="name">Irritability Level</label>
                        <input type="text" {...input} placeholder="" />
                      </div>
                    )}
                  </Field>
                </Grid>
              </Grid>



<div className='m-3'> <h4><u>Intensity Of Pain</u></h4>  </div>


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



              
              <h4 className='m-3'>
                <u>Observation</u>
              </h4>

              <Grid container alignItems="flex-start" spacing={1}>
                <Grid item xs={4}>
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
                    <Field name="linearnigra">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Linea Nigra</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                  <br />
                  <div>
                    <Field name="conjuctiontongue">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Conjuction & Tongue</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div>
                    <Field name="trophicchange">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Trophic Changes</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>

                  <br />
                  <div>
                    <Field name="straiegravidarum">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Straie Gravidarum</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                  <br />
                  <div>
                    <Field name="posture">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Posture</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div>
                    <Field name="chloasma">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Chloasma</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                  <br />
                  <div>
                    <Field name="nailbed">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Nail Bed</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                  <br />
                  <div>
                    <Field name="gait">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Gait</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
              </Grid>

              <br />
              <br />
              <h4 className='m-3'>
                <u>On Palpation</u>
              </h4>
              <Grid container alignItems="flex-start" spacing={2}>
                <Grid item xs={4}>
                  <Field name="tenderness">
                    {({ input }) => (
                      <div className="cardio">
                        <label className="name">Tenderness</label>
                        <input type="text" {...input} placeholder="" />
                      </div>
                    )}
                  </Field>
                </Grid>

                <Grid item xs={4}>
                  <Field name="swellings">
                    {({ input }) => (
                      <div className="cardio">
                        <label className="name">Swelling</label>
                        <input type="text" {...input} placeholder="" />
                      </div>
                    )}
                  </Field>
                </Grid>
                <Grid item xs={4}>
                  <Field name="temperatures">
                    {({ input }) => (
                      <div className="cardio">
                        <label className="name">Temperature</label>
                        <input type="Number" {...input} placeholder="" />
                      </div>
                    )}
                  </Field>
                </Grid>
              </Grid>
              <br />
              <br />

              <h4 className='m-3'>
                <u> Examination</u>
              </h4>
              <br />
              <h5 className='m-3'> 1.Vitals</h5>

              <Grid container alignItems="flex-start" spacing={2}>
                <Grid item xs={4}>
                  <Field name="respiratoryrates">
                    {({ input }) => (
                      <div className="cardio">
                        <label className="name">Respiratory Rate</label>
                        <input type="number" {...input} placeholder="" />
                      </div>
                    )}
                  </Field>
                </Grid>

                <Grid item xs={4}>
                  <Field name="bp">
                    {({ input }) => (
                      <div className="cardio">
                        <label className="name">BP</label>
                        <input type="number" {...input} placeholder="" />
                      </div>
                    )}
                  </Field>
                </Grid>
                <Grid item xs={4}>
                  <div>
                    <Field name="pulse">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Pulse</label>
                          <input type="number" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
              </Grid>

              <br />
              <br />
              <h5 className='m-3'>2.Abdominal Girth</h5>

              <Grid container alignItems="flex-start" spacing={2}>
                <Grid item xs={4}>
                  <Field name="abdominalgirth">
                    {({ input }) => (
                      <div className="cardio">
                        <label className="name">Abdominal Girth</label>
                        <input type="text" {...input} placeholder="" />
                      </div>
                    )}
                  </Field>
                </Grid>
              </Grid>

              <br />
              <h5 className='m-3'>3.Edema Assessment</h5>

              <Grid container alignItems="flex-start" spacing={2}>
                <Grid item xs={4}>
                  <Field name="girth">
                    {({ input }) => (
                      <div className="cardio">
                        <label className="name">Girth</label>
                        <input type="text" {...input} placeholder="" />
                      </div>
                    )}
                  </Field>
                </Grid>

                <Grid item xs={4}>
                  <Field name="volumetrics">
                    {({ input }) => (
                      <div className="cardio">
                        <label className="name">Volumetric</label>
                        <input type="text" {...input} placeholder="" />
                      </div>
                    )}
                  </Field>
                </Grid>
                <Grid item xs={4}>
                  <div>
                    <Field name="pittting">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Pitting/Non Pitting</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
              </Grid>
              
              <Grid container alignItems="flex-start" spacing={2} className='mt-3 mb-3'>
                <Grid item xs={4}>
                  <Field name="rangeofmotion">
                    {({ input }) => (
                      <div className="cardio">
                        <label className="name">Range Of Motion</label>
                        <input type="text" {...input} placeholder="" />
                      </div>
                    )}
                  </Field>
                </Grid>
              
              
              
                <Grid item xs={4}>
                  <Field name="musclestrengths">
                    {({ input }) => (
                      <div className="cardio">
                        <label className="name">Muscle Strength</label>
                        <input type="text" {...input} placeholder="" />
                      </div>
                    )}
                  </Field>
                </Grid>
              
              
                <Grid item xs={4}>
                  <Field name="deeptendonreflex">
                    {({ input }) => (
                      <div className="cardio">
                        <label className="name">Deep Tendon Reflex</label>
                        <input type="text" {...input} placeholder="" />
                      </div>
                    )}
                  </Field>
                </Grid>
              
                <Grid item xs={4}>
                  <Field name="diastasisrecti">
                    {({ input }) => (
                      <div className="cardio">
                        <label className="name">
                          Diastasis Recti Assessment
                        </label>
                        <input type="text" {...input} placeholder="" />
                      </div>
                    )}
                  </Field>
                </Grid>
              </Grid>

              

              <h4 className='m-3'>
                <u>Breast Examination </u>
              </h4>
              <br />

              <Grid container alignItems="flex-start" spacing={2}>
                <Grid item xs={4}>
                  <Field name="sizes">
                    {({ input }) => (
                      <div className="cardio">
                        <label className="name">Size</label>
                        <input type="Number" {...input} placeholder="" />
                      </div>
                    )}
                  </Field>
                </Grid>

                <Grid item xs={4}>
                  <Field name="nipple">
                    {({ input }) => (
                      <div className="cardio">
                        <label className="name">Nipple</label>
                        <input type="text" {...input} placeholder="" />
                      </div>
                    )}
                  </Field>
                </Grid>
                <Grid item xs={4}>
                  <div>
                    <Field name="areola">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Areola</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
              </Grid>

              <br />
              
              

              <Grid container alignItems="flex-start" spacing={2}>
                <Grid item xs={4}>
                  <Field name="varicose">
                    {({ input }) => (
                      <div className="cardio">
                        <label className="name">Varicose</label>
                        <input type="text" {...input} placeholder="" />
                      </div>
                    )}
                  </Field>
                </Grid>

                <Grid item xs={4}>
                  <Field name="dvt">
                    {({ input }) => (
                      <div className="cardio">
                        <label className="name">DVT</label>
                        <input type="text" {...input} placeholder="" />
                      </div>
                    )}
                  </Field>
                </Grid>
              
                <Grid item xs={4}>
                  <Field name="incontineneceassessment">
                    {({ input }) => (
                      <div className="cardio">
                        <label className="name">Incontinence Assessment</label>
                        <input type="text" {...input} placeholder="" />
                      </div>
                    )}
                  </Field>
                </Grid>
              </Grid>

              <br />
              <br />
              <h4 className='m-3'>
                <u>Exercise Tolerance Testing </u>
              </h4>

              <Grid container alignItems="flex-start" spacing={2}>
                <Grid item xs={4}>
                  <Field name="walktest">
                    {({ input }) => (
                      <div className="cardio">
                        <label className="name">6-Minute Walk Test</label>
                        <input type="text" {...input} placeholder="" />
                      </div>
                    )}
                  </Field>
                </Grid>

                <Grid item xs={4}>
                  <div>
                    <Field name="steptest">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">3-Step Test</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
              </Grid>
              <br />
              
              <Grid container alignItems="flex-start" spacing={2}>
                <Grid item xs={4}>
                  <Field name="specialtest">
                    {({ input }) => (
                      <div className="cardio">
                        <label className="name">Special Test</label>
                        <input type="text" {...input} placeholder="" />
                      </div>
                    )}
                  </Field>
                </Grid>
              
                <Grid item xs={4}>
                  <Field name="functionalassessment">
                    {({ input }) => (
                      <div className="cardio">
                        <label className="name">Functional Assessment</label>
                        <input type="text" {...input} placeholder="" />
                      </div>
                    )}
                  </Field>
                </Grid>
              </Grid>
              <br />
              
             
              <Grid container alignItems="flex-start" spacing={2}>
                <Grid item xs={4}>
                  <Field name="fundalheight">
                    {({ input }) => (
                      <div className="cardio">
                        <label className="name">Fundal height</label>
                        <input type="text" {...input} placeholder="" />
                      </div>
                    )}
                  </Field>
                </Grid>
              
                <Grid item xs={4}>
                  <Field name="liepresentation">
                    {({ input }) => (
                      <div className="cardio">
                        <label className="name">Lie/Presentation</label>
                        <input type="text" {...input} placeholder="" />
                      </div>
                    )}
                  </Field>
                </Grid>
              </Grid>
              <br />

              <Grid container alignItems="flex-start" spacing={2}>

                <Grid item xs={12}>
                  <div>
                    <Field name="Investigations">
                      {({ input }) => (
                        <div className="cardio2">
                          <label className="agep">Investigations</label>

                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>


                <Grid item xs={12}>
                  <div>
                    <Field name="diagnosis">
                      {({ input }) => (
                        <div className="cardio2">
                          <label className="agep">Diagnosis</label>

                          <input type="text fullw100" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <div>
                    <Field name="treatmentgols">
                      {({ input }) => (
                        <div className="cardio2">
                          <label className="agep">Treatment Goals</label>

                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item xs={12}>
                  <div>
                    <Field name="treatmentplans">
                      {({ input }) => (
                        <div className="cardio2">
                          <label className="agep">Treatment Plans</label>

                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
              </Grid>
              <br />
              <br />
              
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


const mapStateToProps = (state) => {
  return {
    // consultant:state.auth.user.name,
    antinatalData: state.antinatalData,
  };
};

export default AntiNatal;

// connect(mapStateToProps, { addAntiNatalData })(
//   AntiNatal
// );

