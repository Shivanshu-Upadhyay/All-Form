import React, { useState } from "react";
import "./App.css";
import { Form, Field } from "react-final-form";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Slider from "@material-ui/core/Slider";
import Table from "react-bootstrap/Table";

import { Paper, Grid } from "@material-ui/core";


function PostNatal() {
  const onSubmit = (formValues) => {
    console.log(formValues);
  };
  const [Natal4, setNatal4] = React.useState({
    c1: {},
    c2: {},
  });

  const [value, setValue] = useState(20);
  const changeValue = (event, value) => {
    setValue(value);
  };
  const getText = (value) => "${value}";

  return (
    <div>
      <h3>
        <u>POST NATAL EVALUATION</u>
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
                        <div className="cardio4">
                          <label className="ass"> Assessment Date-</label>
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
                        <div className="cardiop">
                          <label className="age">Age</label>

                          <input type="number" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
                <Grid item xs={3}>
                  <div className="wws">
                    <label className="sr">Marrital Status</label>
                    <Field className ="marrital" component ="select">
                        <option></option>
                        <option value="married">Married</option>
                        <option value="single">Single</option>
                        </Field>
                  </div>
                </Grid>
                <Grid item xs={3}>
                  <div className="qq">
                    <Field name="occu">
                      {({ input }) => (
                        <div className="cardio">
                          <label>Occupation-</label>
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
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>

                  <br />
                </Grid>
                <Grid item xs={4}>
                  <div>
                    <Field name="weight">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Weight</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>

                  <br />
                </Grid>

                <Grid item xs={4}>
                  <div className="www">
                    <Field name="ward">
                      {({ input }) => (
                        <div className="cardio5">
                          <label className="ward">BMI-</label>
                          <input type="number" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item xs={12}>
                  <div>
                    <Field name="addres">
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
              <br />

              <h3>
                <u>CHEIF COMPLAINTS</u>
              </h3>

              <Grid container alignItems="flex-start" spacing={2}>
                <Grid item xs={4}>
                  <Field name="naus">
                    {({ input }) => (
                      <div className="cardio">
                        <label className="name">Nausea/Vomatingt</label>
                        <input type="text" {...input} placeholder="" />
                      </div>
                    )}
                  </Field>
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}>
                  <Field name="api">
                    {({ input }) => (
                      <div className="cardio">
                        <label className="name">Headche,Epigastic Pain</label>
                        <input type="text" {...input} placeholder="" />
                      </div>
                    )}
                  </Field>
                </Grid>
              </Grid>

              <Grid container alignItems="flex-start" spacing={2}>
                <Grid item xs={4}>
                  <Field name="swellll">
                    {({ input }) => (
                      <div className="cardio">
                        <label className="name">Swelling</label>
                        <input type="text" {...input} placeholder="" />
                      </div>
                    )}
                  </Field>
                </Grid>

                <Grid item xs={4}>
                  <Field name="mussulos">
                    {({ input }) => (
                      <div className="cardio">
                        <label className="name">Mussuloskeltal Problems</label>
                        <input type="text" {...input} placeholder="" />
                      </div>
                    )}
                  </Field>
                </Grid>
                <Grid item xs={4}>
                  <div>
                    <Field name="disc">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Discomfort</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
              </Grid>
              <h3>
                <u>PRESENT MEDICAL HISTORY</u>
              </h3>

              <Grid container alignItems="flex-start" spacing={2}>
                <Grid item xs={4}>
                  <Field name="premh">
                    {({ input }) => (
                      <div className="cardio">
                        <label className="name">Present Medical History</label>
                        <input type="text" {...input} placeholder="" />
                      </div>
                    )}
                  </Field>
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}>
                  <Field name="rele">
                    {({ input }) => (
                      <div className="cardio">
                        <label className="name">Relevant Past History</label>
                        <input type="text" {...input} placeholder="" />
                      </div>
                    )}
                  </Field>
                </Grid>
              </Grid>

              <Grid container alignItems="flex-start" spacing={2}>
                <Grid item xs={4}>
                  <Field name="tobb">
                    {({ input }) => (
                      <div className="cardio">
                        <label className="name">Type Of Birth</label>
                        <input type="text" {...input} placeholder="" />
                      </div>
                    )}
                  </Field>
                </Grid>

                <Grid item xs={4}>
                  <Field name="det">
                    {({ input }) => (
                      <div className="cardio">
                        <label className="name">Date</label>
                        <input type="date" {...input} placeholder="" />
                      </div>
                    )}
                  </Field>
                </Grid>
                <Grid item xs={4}>
                  <Field name="blogroup">
                    {({ input }) => (
                      <div className="cardio">
                        <label className="name">Blood Group</label>
                        <input type="text" {...input} placeholder="" />
                      </div>
                    )}
                  </Field>
                </Grid>
                <br />

                <Grid container alignItems="flex-start" spacing={2}>
                  <Grid item xs={4}>
                    <Field name="gravida">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Gravida</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                    <br />
                    <div className="wwsl">
                      <label className="sr6">Feedings</label>
                      <select className="kk9">
                        <option></option>
                        <option value="ectomorph">Breast</option>
                        <option value="endomorph">Artificial</option>
                      </select>
                    </div>
                  </Grid>
                  <br />

                  <Grid item xs={4}>
                    <Field name="para">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Para</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </Grid>
                  <br />
                  <Grid item xs={4}>
                    <Field name="anyc">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Any Complications</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>

            {/* page 2 */}
            <h3>
              <u>AFTER PAIN</u>
            </h3>

            <Paper style={{ padding: 50 }}>
              <Grid container alignItems="flex-start" spacing={2}>
                <Grid item xs={4}>
                  <div>
                    <Field name="Appt">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Loss Of Appetite</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>

                  <br />
                  <div>
                    <Field name="Posture">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">
                            History of Genito Urinary System
                          </label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>

                  <br />
                  <div>
                    <Field name="hemo">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Burning Micturition</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div>
                    <Field name="constipa">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Constipation </label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>

                  <br />
                  <div>
                    <Field name="inco">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Incontinence</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>

                  <br />
                  <div>
                    <Field name="polu">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Polyuria</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item xs={4}>
                  <div>
                    <Field name="innn">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">
                            History Of Gastro/Intestinal System
                          </label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>

                  <br />
                  <div>
                    <Field name="prol">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Prolapse</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
              </Grid>
              <h3>
                <u>Associated Medical History Condition</u>
              </h3>
              <Grid container alignItems="flex-start" spacing={2}>
                <Grid item xs={4}>
                  <div className="text-center">
                    <div class="field">
                      <label className="yes">
                        {" "}
                        <h5>Any History Of TB</h5>{" "}
                      </label>
                      <ButtonGroup color="primary">
                        <Button
                          onClick={() => {
                            setNatal4({
                              ...Natal4,
                              c1: { ...Natal4.c1, 1: 1 },
                            });
                          }}
                          variant={
                            Natal4.c1["1"] === 1 ? "contained" : "outlined"
                          }
                        >
                          YES
                        </Button>
                        <Button
                          onClick={() => {
                            setNatal4({
                              ...Natal4,
                              c1: { ...Natal4.c1, 1: 2 },
                            });
                          }}
                          variant={
                            Natal4.c1["1"] === 2 ? "contained" : "outlined"
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
                        {" "}
                        <h5>Seizures</h5>{" "}
                      </label>
                      <ButtonGroup color="primary">
                        <Button
                          onClick={() => {
                            setNatal4({
                              ...Natal4,
                              c1: { ...Natal4.c1, 2: 2 },
                            });
                          }}
                          variant={
                            Natal4.c1["2"] === 2 ? "contained" : "outlined"
                          }
                        >
                          YES
                        </Button>
                        <Button
                          onClick={() => {
                            setNatal4({
                              ...Natal4,
                              c1: { ...Natal4.c1, 2: 3 },
                            });
                          }}
                          variant={
                            Natal4.c1["2"] === 3 ? "contained" : "outlined"
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
                        {" "}
                        <h5>Blood Pressure</h5>{" "}
                      </label>
                      <ButtonGroup color="primary">
                        <Button
                          onClick={() => {
                            setNatal4({
                              ...Natal4,
                              c1: { ...Natal4.c1, 3: 3 },
                            });
                          }}
                          variant={
                            Natal4.c1["3"] === 3 ? "contained" : "outlined"
                          }
                        >
                          YES
                        </Button>
                        <Button
                          onClick={() => {
                            setNatal4({
                              ...Natal4,
                              c1: { ...Natal4.c1, 3: 4 },
                            });
                          }}
                          variant={
                            Natal4.c1["3"] === 4 ? "contained" : "outlined"
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
                        {" "}
                        <h5>Anaemia</h5>{" "}
                      </label>
                      <ButtonGroup color="primary">
                        <Button
                          onClick={() => {
                            setNatal4({
                              ...Natal4,
                              c1: { ...Natal4.c1, 4: 4 },
                            });
                          }}
                          variant={
                            Natal4.c1["4"] === 4 ? "contained" : "outlined"
                          }
                        >
                          YES
                        </Button>
                        <Button
                          onClick={() => {
                            setNatal4({
                              ...Natal4,
                              c1: { ...Natal4.c1, 4: 5 },
                            });
                          }}
                          variant={
                            Natal4.c1["4"] === 5 ? "contained" : "outlined"
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
                        {" "}
                        <h5>RH Incompatibility</h5>{" "}
                      </label>
                      <ButtonGroup color="primary">
                        <Button
                          onClick={() => {
                            setNatal4({
                              ...Natal4,
                              c1: { ...Natal4.c1, 7: 7 },
                            });
                          }}
                          variant={
                            Natal4.c1["7"] === 7 ? "contained" : "outlined"
                          }
                        >
                          YES
                        </Button>
                        <Button
                          onClick={() => {
                            setNatal4({
                              ...Natal4,
                              c1: { ...Natal4.c1, 7: 8 },
                            });
                          }}
                          variant={
                            Natal4.c1["7"] === 8 ? "contained" : "outlined"
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
                        {" "}
                        <h5>History Of Musculo-skeletal Problem</h5>{" "}
                      </label>
                      <ButtonGroup color="primary">
                        <Button
                          onClick={() => {
                            setNatal4({
                              ...Natal4,
                              c1: { ...Natal4.c1, 8: 8 },
                            });
                          }}
                          variant={
                            Natal4.c1["8"] === 8 ? "contained" : "outlined"
                          }
                        >
                          YES
                        </Button>
                        <Button
                          onClick={() => {
                            setNatal4({
                              ...Natal4,
                              c1: { ...Natal4.c1, 8: 9 },
                            });
                          }}
                          variant={
                            Natal4.c1["8"] === 9 ? "contained" : "outlined"
                          }
                        >
                          NO
                        </Button>
                      </ButtonGroup>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Paper>

            <Paper style={{ padding: 50 }}>
              <Grid container alignItems="flex-start" spacing={2}>
                <Grid item xs={4}>
                  <div>
                    <Field name="entema">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Cardiac Problems</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>

                  <br />
                  <div>
                    <Field name="autoimm">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Auto Immune Disorders</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>

                  <br />
                  <div>
                    <Field name="diab">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Diabetes</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>

                  <br />
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
                </Grid>
                <Grid item xs={4}>
                  <div>
                    <Field name="asthmma">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Bronchical Asthma</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>

                  <br />
                  <div>
                    <Field name="familyy">
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
                    <Field name="smokkki">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Smoking/Alcohol</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>

                  <br />
                  <div>
                    <Field name="sleepinghaaa">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Sleeping Habits</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item xs={4}>
                  <div>
                    <Field name="hypes">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Hyper/Hypothyroidism</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>

                  <br />
                  <div>
                    <Field name="surgical">
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
                    <Field name="coxgen">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Congenital Defects</label>
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
              </Grid>
              </Paper>

            
              <Paper style={{ padding: 50 }}>
                <Grid container alignItems="flex-start" spacing={2}>
                  <Grid item xs={12}>
                    <Field name="bodychart">
                      {({ input }) => (
                        <div className="field2">
                          <label>
                            <h3>Body Chart</h3>
                          </label>
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

              <h3>OBSTERIC HISTORY</h3>
              <br />
              <br />
              <Table striped bordered hover>
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
                      <Field name="a">
                        {({ input }) => (
                          <input type="number" {...input} placeholder="" />
                        )}
                      </Field>
                    </th>
                    <th>
                      <Field name="b">
                        {({ input }) => (
                          <input type="text" {...input} placeholder="" />
                        )}
                      </Field>
                    </th>
                    <th>
                      <Field name="c">
                        {({ input }) => (
                          <input type="text" {...input} placeholder="" />
                        )}
                      </Field>
                    </th>
                    <th>
                      <Field name="d">
                        {({ input }) => (
                          <input type="text" {...input} placeholder="" />
                        )}
                      </Field>
                    </th>
                    <th>
                      <Field name="e">
                        {({ input }) => (
                          <input type="text" {...input} placeholder="" />
                        )}
                      </Field>
                    </th>
                    <th>
                      <Field name="f">
                        {({ input }) => (
                          <input type="text" {...input} placeholder="" />
                        )}
                      </Field>
                    </th>
                    <th>
                      <Field name="g">
                        {({ input }) => (
                          <input type="Number" {...input} placeholder="" />
                        )}
                      </Field>
                    </th>
                  </tr>

                  <tr>
                    <th scope="row">2.</th>
                    <th>
                      <Field name="h">
                        {({ input }) => (
                          <input type="Number" {...input} placeholder="" />
                        )}
                      </Field>
                    </th>
                    <th>
                      <Field name="i">
                        {({ input }) => (
                          <input type="text" {...input} placeholder="" />
                        )}
                      </Field>
                    </th>
                    <th>
                      <Field name="j">
                        {({ input }) => (
                          <input type="text" {...input} placeholder="" />
                        )}
                      </Field>
                    </th>
                    <th>
                      <Field name="k">
                        {({ input }) => (
                          <input type="text" {...input} placeholder="" />
                        )}
                      </Field>
                    </th>
                    <th>
                      <Field name="l">
                        {({ input }) => (
                          <input type="text" {...input} placeholder="" />
                        )}
                      </Field>
                    </th>
                    <th>
                      <Field name="m">
                        {({ input }) => (
                          <input type="text" {...input} placeholder="" />
                        )}
                      </Field>
                    </th>
                    <th>
                      <Field name="n">
                        {({ input }) => (
                          <input type="Number" {...input} placeholder="" />
                        )}
                      </Field>
                    </th>
                  </tr>
                  <tr>
                    <th scope="row">3.</th>

                    <th>
                      <Field name="o">
                        {({ input }) => (
                          <input type="Number" {...input} placeholder="" />
                        )}
                      </Field>
                    </th>
                    <th>
                      <Field name="p">
                        {({ input }) => (
                          <input type="text" {...input} placeholder="" />
                        )}
                      </Field>
                    </th>
                    <th>
                      <Field name="q">
                        {({ input }) => (
                          <input type="text" {...input} placeholder="" />
                        )}
                      </Field>
                    </th>
                    <th>
                      <Field name="r">
                        {({ input }) => (
                          <input type="text" {...input} placeholder="" />
                        )}
                      </Field>
                    </th>
                    <th>
                      <Field name="s">
                        {({ input }) => (
                          <input type="text" {...input} placeholder="" />
                        )}
                      </Field>
                    </th>
                    <th>
                      <Field name="t">
                        {({ input }) => (
                          <input type="text" {...input} placeholder="" />
                        )}
                      </Field>
                    </th>
                    <th>
                      <Field name="u">
                        {({ input }) => (
                          <input type="Number" {...input} placeholder="" />
                        )}
                      </Field>
                    </th>
                  </tr>

                  <tr>
                    <th scope="row">4.</th>
                    <th>
                      <Field name="v">
                        {({ input }) => (
                          <input type="Number" {...input} placeholder="" />
                        )}
                      </Field>
                    </th>
                    <th>
                      <Field name="w">
                        {({ input }) => (
                          <input type="text" {...input} placeholder="" />
                        )}
                      </Field>
                    </th>
                    <th>
                      <Field name="x">
                        {({ input }) => (
                          <input type="text" {...input} placeholder="" />
                        )}
                      </Field>
                    </th>
                    <th>
                      <Field name="y">
                        {({ input }) => (
                          <input type="text" {...input} placeholder="" />
                        )}
                      </Field>
                    </th>
                    <th>
                      <Field name="z">
                        {({ input }) => (
                          <input type="text" {...input} placeholder="" />
                        )}
                      </Field>
                    </th>
                    <th>
                      <Field name="aa">
                        {({ input }) => (
                          <input type="text" {...input} placeholder="" />
                        )}
                      </Field>
                    </th>
                    <th>
                      <Field name="bb">
                        {({ input }) => (
                          <input type="Number" {...input} placeholder="" />
                        )}
                      </Field>
                    </th>
                  </tr>
                  <tr>
                    <th scope="row">5.</th>
                    <th>
                      <Field name="cc">
                        {({ input }) => (
                          <input type="Number" {...input} placeholder="" />
                        )}
                      </Field>
                    </th>
                    <th>
                      <Field name="dd">
                        {({ input }) => (
                          <input type="text" {...input} placeholder="" />
                        )}
                      </Field>
                    </th>
                    <th>
                      <Field name="ee">
                        {({ input }) => (
                          <input type="text" {...input} placeholder="" />
                        )}
                      </Field>
                    </th>
                    <th>
                      <Field name="ff">
                        {({ input }) => (
                          <input type="text" {...input} placeholder="" />
                        )}
                      </Field>
                    </th>
                    <th>
                      <Field name="gg">
                        {({ input }) => (
                          <input type="text" {...input} placeholder="" />
                        )}
                      </Field>
                    </th>
                    <th>
                      <Field name="hh">
                        {({ input }) => (
                          <input type="text" {...input} placeholder="" />
                        )}
                      </Field>
                    </th>
                    <th>
                      <Field name="ii">
                        {({ input }) => (
                          <input type="Number" {...input} placeholder="" />
                        )}
                      </Field>
                    </th>
                  </tr>
                  <tr>
                    <th scope="row">6.</th>
                    <th>
                      <Field name="jj">
                        {({ input }) => (
                          <input type="Number" {...input} placeholder="" />
                        )}
                      </Field>
                    </th>
                    <th>
                      <Field name="kk">
                        {({ input }) => (
                          <input type="text" {...input} placeholder="" />
                        )}
                      </Field>
                    </th>
                    <th>
                      <Field name="ll">
                        {({ input }) => (
                          <input type="text" {...input} placeholder="" />
                        )}
                      </Field>
                    </th>
                    <th>
                      <Field name="mm">
                        {({ input }) => (
                          <input type="text" {...input} placeholder="" />
                        )}
                      </Field>
                    </th>
                    <th>
                      <Field name="nn">
                        {({ input }) => (
                          <input type="text" {...input} placeholder="" />
                        )}
                      </Field>
                    </th>
                    <th>
                      <Field name="oo">
                        {({ input }) => (
                          <input type="text" {...input} placeholder="" />
                        )}
                      </Field>
                    </th>
                    <th>
                      <Field name="pp">
                        {({ input }) => (
                          <input type="Number" {...input} placeholder="" />
                        )}
                      </Field>
                    </th>
                  </tr>
                  <tr>
                    <th scope="row">7.</th>
                    <th>
                      <Field name="qq">
                        {({ input }) => (
                          <input type="Number" {...input} placeholder="" />
                        )}
                      </Field>
                    </th>
                    <th>
                      <Field name="rr">
                        {({ input }) => (
                          <input type="text" {...input} placeholder="" />
                        )}
                      </Field>
                    </th>
                    <th>
                      <Field name="ss">
                        {({ input }) => (
                          <input type="text" {...input} placeholder="" />
                        )}
                      </Field>
                    </th>
                    <th>
                      <Field name="tt">
                        {({ input }) => (
                          <input type="text" {...input} placeholder="" />
                        )}
                      </Field>
                    </th>
                    <th>
                      <Field name="uu">
                        {({ input }) => (
                          <input type="text" {...input} placeholder="" />
                        )}
                      </Field>
                    </th>
                    <th>
                      <Field name="vv">
                        {({ input }) => (
                          <input type="text" {...input} placeholder="" />
                        )}
                      </Field>
                    </th>
                    <th>
                      <Field name="ww">
                        {({ input }) => (
                          <input type="Number" {...input} placeholder="" />
                        )}
                      </Field>
                    </th>
                  </tr>
                  <tr>
                    <th scope="row">8.</th>
                    <th>
                      <Field name="xx">
                        {({ input }) => (
                          <input type="Number" {...input} placeholder="" />
                        )}
                      </Field>
                    </th>
                    <th>
                      <Field name="yy">
                        {({ input }) => (
                          <input type="text" {...input} placeholder="" />
                        )}
                      </Field>
                    </th>
                    <th>
                      <Field name="zz">
                        {({ input }) => (
                          <input type="text" {...input} placeholder="" />
                        )}
                      </Field>
                    </th>
                    <th>
                      <Field name="aaa">
                        {({ input }) => (
                          <input type="text" {...input} placeholder="" />
                        )}
                      </Field>
                    </th>
                    <th>
                      <Field name="bbb">
                        {({ input }) => (
                          <input type="text" {...input} placeholder="" />
                        )}
                      </Field>
                    </th>
                    <th>
                      <Field name="ccc">
                        {({ input }) => (
                          <input type="text" {...input} placeholder="" />
                        )}
                      </Field>
                    </th>
                    <th>
                      <Field name="ddd">
                        {({ input }) => (
                          <input type="Number" {...input} placeholder="" />
                        )}
                      </Field>
                    </th>
                  </tr>
                </thead>
              </Table>
            
             

              <h3>
                <u>PAIN ASSESSMENT</u>
              </h3>

              <Paper style={{ padding: 50 }}>
                <Grid container alignItems="flex-start" spacing={2}>
                  <Grid item xs={3}>
                    <Field name="painonset">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Pain Onset</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </Grid>{" "}
                  <Grid item xs={3}>
                    <Field name="duration">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Duration</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </Grid>
                  <Grid item xs={3}>
                    <Field name="Pain Type">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Pain Type</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </Grid>
                  <Grid item xs={3}>
                    <Field name="siteofpain">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Site Of Pain</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </Grid>
                  <Grid container alignItems="flex-start" spacing={2}>
                    <Grid item xs={3}>
                      <Field name="aggging">
                        {({ input }) => (
                          <div className="cardio">
                            <label className="name">Aggravating Factors</label>
                            <input type="text" {...input} placeholder="" />
                          </div>
                        )}
                      </Field>
                      <br />
                      <Field name="nightpain">
                        {({ input }) => (
                          <div className="cardio">
                            <label className="name">Night Pain</label>
                            <input type="text" {...input} placeholder="" />
                          </div>
                        )}
                      </Field>
                    </Grid>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={3}>
                      <Field name="rele">
                        {({ input }) => (
                          <div className="cardio">
                            <label className="name">Relieving Factors</label>
                            <input type="text" {...input} placeholder="" />
                          </div>
                        )}
                      </Field>
                    </Grid>
                  </Grid>
                  <Grid container alignItems="flex-start" spacing={1}>
                    <Grid item xs={12}>
                      <label className="cc">INTENSITY OF PAIN</label>
                      <Slider
                        style={{ width: 240, marginTop: 15, marginLeft: 400 }}
                        min={0}
                        max={10}
                        defaultValue={10}
                        step={1}
                        marks
                        getAriaValueText={getText}
                        valueLabelDisplay="auto"
                        value={value}
                        onChange={changeValue}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                </Paper>

                <h3>
                  <u>OBSERVATION</u>
                </h3>

                <Paper style={{ padding: 50 }}>
                  <Grid container alignItems="flex-start" spacing={2}>
                    <Grid item xs={4}>
                      <div>
                        <Field name="entema">
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
                        <Field name="Posture">
                          {({ input }) => (
                            <div className="cardio">
                              <label className="name">Posture</label>
                              <input type="text" {...input} placeholder="" />
                            </div>
                          )}
                        </Field>
                      </div>

                      <br />
                      <div>
                        <Field name="hemo">
                          {({ input }) => (
                            <div className="cardio">
                              <label className="name">Hemorroids</label>
                              <input type="text" {...input} placeholder="" />
                            </div>
                          )}
                        </Field>
                      </div>

                      <br />
                      <div>
                        <Field name="Lochia">
                          {({ input }) => (
                            <div className="cardio">
                              <label className="name">Lochia</label>
                              <input type="text" {...input} placeholder="" />
                            </div>
                          )}
                        </Field>
                      </div>
                    </Grid>
                    <Grid item xs={4}>
                      <div>
                        <Field name="trophic">
                          {({ input }) => (
                            <div className="cardio">
                              <label className="name">Trophic Chnanges </label>
                              <input type="text" {...input} placeholder="" />
                            </div>
                          )}
                        </Field>
                      </div>

                      <br />
                      <div>
                        <label>General Body Condition</label>
                        <select className="kk">
                          <option></option>
                          <option value="ectomorph">Ectomorph</option>
                          <option value="endomorph">Endomorph</option>
                          <option value="mesomorph">Mesomorch</option>
                        </select>
                      </div>

                      <br />
                      <div>
                        <Field name="typesof">
                          {({ input }) => (
                            <div className="cardio">
                              <label className="name">Type Of Episiotomy</label>
                              <input type="text" {...input} placeholder="" />
                            </div>
                          )}
                        </Field>
                      </div>

                      <br />
                      <div>
                        <Field name="vulvar">
                          {({ input }) => (
                            <div className="cardio">
                              <label className="name">Vulvar Haematoma</label>
                              <input type="text" {...input} placeholder="" />
                            </div>
                          )}
                        </Field>
                      </div>
                    </Grid>
                    <Grid item xs={4}>
                      <div>
                        <Field name="discoloration">
                          {({ input }) => (
                            <div className="cardio">
                              <label className="name">Discoloration</label>
                              <input type="text" {...input} placeholder="" />
                            </div>
                          )}
                        </Field>
                      </div>

                      <br />
                      <div>
                        <Field name="Gait">
                          {({ input }) => (
                            <div className="cardio">
                              <label className="name">Gait</label>
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
                              <label className="name">Urine Distension</label>
                              <input type="text" {...input} placeholder="" />
                            </div>
                          )}
                        </Field>
                      </div>

                      <br />
                      <div>
                        <Field name="af">
                          {({ input }) => (
                            <div className="cardio">
                              <label className="name">Perineum</label>
                              <input type="text" {...input} placeholder="" />
                            </div>
                          )}
                        </Field>
                      </div>
                    </Grid>
                  </Grid>
                  <h3>
                    <u>ON PALPATION</u>
                  </h3>
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
                      <Field name="swelling">
                        {({ input }) => (
                          <div className="cardio">
                            <label className="name">Swelling</label>
                            <input type="text" {...input} placeholder="" />
                          </div>
                        )}
                      </Field>
                    </Grid>
                    <Grid item xs={4}>
                      <div>
                        <Field name="temp">
                          {({ input }) => (
                            <div className="cardio">
                              <label className="name">Temperature</label>
                              <input type="text" {...input} placeholder="" />
                            </div>
                          )}
                        </Field>
                      </div>
                    </Grid>
                  </Grid>
                </Paper>

                <h3>
                  <u>ON EXAMINATION</u>
                </h3>
                <br />
                <h4> VITALS</h4>

                <Paper style={{ padding: 50 }}>
                  <Grid container alignItems="flex-start" spacing={2}>
                    <Grid item xs={4}>
                      <Field name="respiratoryrate">
                        {({ input }) => (
                          <div className="cardio">
                            <label className="name">Respiratory Rate</label>
                            <input type="text" {...input} placeholder="" />
                          </div>
                        )}
                      </Field>
                      <br />
                      <Field name="abdomen">
                        {({ input }) => (
                          <div className="cardio">
                            <label className="name">Abdomen</label>
                            <input type="text" {...input} placeholder="" />
                          </div>
                        )}
                      </Field>
                    </Grid>

                    <Grid item xs={4}>
                      <Field name="bp">
                        {({ input }) => (
                          <div className="cardio">
                            <label className="name">BP</label>
                            <input type="text" {...input} placeholder="" />
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
                              <input type="text" {...input} placeholder="" />
                            </div>
                          )}
                        </Field>
                      </div>
                    </Grid>
                  </Grid>
                  <h4>CHEST EXAMINATION</h4>
                  <Grid container alignItems="flex-start" spacing={2}>
                    <Grid item xs={4}>
                      <Field name="pattern">
                        {({ input }) => (
                          <div className="cardio">
                            <label className="name">Pattern Of Breathing</label>
                            <input type="text" {...input} placeholder="" />
                          </div>
                        )}
                      </Field>
                    </Grid>

                    <Grid item xs={4}>
                      <Field name="chest">
                        {({ input }) => (
                          <div className="cardio">
                            <label className="name">Chest Expansion</label>
                            <input type="text" {...input} placeholder="" />
                          </div>
                        )}
                      </Field>
                    </Grid>
                    <Grid item xs={4}>
                      <div>
                        <Field name="auscullation">
                          {({ input }) => (
                            <div className="cardio">
                              <label className="name">Auscultation</label>
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
                    <Grid item xs={4}>
                      <Field name="rom">
                        {({ input }) => (
                          <div className="cardio">
                            <label className="name">Range Of Motion</label>
                            <input type="text" {...input} placeholder="" />
                          </div>
                        )}
                      </Field>
                    </Grid>
                  </Grid>
                </Paper>
                <h4>EDEMA EVALUATION</h4>

                <Paper style={{ padding: 50 }}>
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
                      <Field name="volumetic">
                        {({ input }) => (
                          <div className="cardio">
                            <label className="name">Volumetic</label>
                            <input type="text" {...input} placeholder="" />
                          </div>
                        )}
                      </Field>
                    </Grid>
                    <Grid item xs={4}>
                      <div>
                        <Field name="pitting">
                          {({ input }) => (
                            <div className="cardio">
                              <label className="name">
                                Pitting/Non Pitting
                              </label>
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
                    <Grid item xs={4}>
                      <div>
                        <Field name="musssssl">
                          {({ input }) => (
                            <div className="cardio">
                              <label className="name">Muscle Strength</label>
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

                  <Grid item xs={4}>
                    <Field name="deep">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Deep Tendon Reflexes</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </Grid>
                  <h4>BREAST EXAMINATION</h4>

                  <Grid container alignItems="flex-start" spacing={2}>
                    <Grid item xs={4}>
                      <Field name="size">
                        {({ input }) => (
                          <div className="cardio">
                            <label className="name">Size</label>
                            <input type="text" {...input} placeholder="" />
                          </div>
                        )}
                      </Field>
                    </Grid>

                    <Grid item xs={4}>
                      <Field name="volumetic">
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
                </Paper>

                <h3>INFANT FEEDING</h3>

                <Paper style={{ padding: 50 }}>
                  <Grid container alignItems="flex-start" spacing={2}>
                    <Grid item xs={4}>
                      <Field name="type">
                        {({ input }) => (
                          <div className="cardio">
                            <label className="name">Type</label>
                            <input type="text" {...input} placeholder="" />
                          </div>
                        )}
                      </Field>
                    </Grid>

                    <Grid item xs={4}>
                      <Field name="frequency">
                        {({ input }) => (
                          <div className="cardio">
                            <label className="name">Frequency</label>
                            <input type="text" {...input} placeholder="" />
                          </div>
                        )}
                      </Field>
                    </Grid>
                    <Grid item xs={4}>
                      <div>
                        <Field name="engo">
                          {({ input }) => (
                            <div className="cardio">
                              <label className="name">Breast Engorgement</label>
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
                    <Grid item xs={4}>
                      <Field name="nipp">
                        {({ input }) => (
                          <div className="cardio">
                            <label className="name">Nipple Soreness</label>
                            <input type="text" {...input} placeholder="" />
                          </div>
                        )}
                      </Field>
                    </Grid>
                  </Grid>
                  <br />
                  <br />
                  <br />
                  <Grid item xs={4}>
                    <Field name="sen">
                      {({ input }) => (
                        <div className="cardio">
                          <label className="name">Sensations</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </Grid>
                </Paper>

                <Paper style={{ padding: 50 }}>
                  <Grid container alignItems="flex-start" spacing={2}>
                    <Grid item xs={4}>
                      <Field name="type">
                        {({ input }) => (
                          <div className="cardio">
                            <label className="name">Varicose Veins</label>
                            <input type="text" {...input} placeholder="" />
                          </div>
                        )}
                      </Field>
                    </Grid>

                    <Grid item xs={4}>
                      <div>
                        <Field name="dvt">
                          {({ input }) => (
                            <div className="cardio">
                              <label className="name">DVT</label>
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
                    <Grid item xs={4}>
                      <div>
                        <Field name="sutureer">
                          {({ input }) => (
                            <div className="cardio">
                              <label className="name">Suture</label>
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
                  <Grid item xs={4}>
                    <div>
                      <Field name="sptest">
                        {({ input }) => (
                          <div className="cardio">
                            <label className="name">Special Test</label>
                            <input type="text" {...input} placeholder="" />
                          </div>
                        )}
                      </Field>
                    </div>
                  </Grid>
                </Paper>
                <h4></h4>

                <h3>FUNCTIONAL ASSESSMENT</h3>

                <Paper style={{ padding: 50 }}>
                  <Grid container alignItems="flex-start" spacing={2}>
                    <Grid item xs={4}>
                      <div>
                        <Field name="investigate">
                          {({ input }) => (
                            <div className="cardio">
                              <label className="name">INVESTIGATION</label>
                              <input type="text" {...input} placeholder="" />
                            </div>
                          )}
                        </Field>
                      </div>

                      <br />
                      <div>
                        <Field name="diagnosis">
                          {({ input }) => (
                            <div className="cardio">
                              <label className="name">DIAGNOSIS</label>
                              <input type="text" {...input} placeholder="" />
                            </div>
                          )}
                        </Field>
                      </div>
                    </Grid>

                    <Grid item xs={4}>
                      <Field name="treatementg">
                        {({ input }) => (
                          <div className="cardio">
                            <label className="name">TREATEMENT GOAL</label>
                            <input type="text" {...input} placeholder="" />
                          </div>
                        )}
                      </Field>

                      <br />
                      <div>
                        <Field name="tplan">
                          {({ input }) => (
                            <div className="cardio">
                              <label className="name">TREATEMENT PLAN</label>
                              <input type="text" {...input} placeholder="" />
                            </div>
                          )}
                        </Field>
                      </div>
                    </Grid>
                  </Grid>
                  <br />
                  <br />
                  <div style={{ textAlign: "center" }}>
                    <button className="uibutton">Save</button>
                  </div>
                </Paper>
             
            
          </form>
        )}
      </Form>
    </div>
  );
}

export default PostNatal;
