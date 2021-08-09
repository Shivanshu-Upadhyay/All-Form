import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import { Form, Field } from "react-final-form";

import SaveIcon from '@material-ui/icons/Save';



import {
  Paper,
  Grid,
  Button,
} from "@material-ui/core";




function Neuro() {
  const onSubmit = (formValues) => {
    console.log(formValues);
  };


  

  return (
    <div >
      <h3 className="text-center mt-3"> Neurological Evaluation</h3>

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



<div className='mb-3'> <h4><u>History Of Present Illness</u></h4>  </div>

<Grid container  spacing={2} className='mb-3'>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="OnsetDuration">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" ">Onset/Duration</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="MentalState">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Mental State</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="LOC">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">LOC</label>
                           
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
                    <Field name="Sleep">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" ">Sleep</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Convulsions">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Convulsions</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Headache">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Headache</label>
                           
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
                    <Field name="Movement">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" ">Movement</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="SpineterControl">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Sphincter Control</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Speech">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Speech</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
               </Grid>






<div className='mb-3'> <h4><u>History Of Past Illness</u></h4>  </div>




<Grid container  spacing={2} className='mb-3'>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="ModeofInjury">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" ">Mode of Injury</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="MedicalHistory">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Medical History</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="BirthHistory">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Birth History</label>
                           
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
                    <Field name="DevelopmentalHistory">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" ">Developmental History</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="PersonalHistory">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Personal History</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="FamilyHistory">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Family History</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
               </Grid>





<div className='mb-3'> <h4><u>Observation</u></h4>  </div>



<Grid container  spacing={2} className='mb-3'>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Posture">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" ">Posture</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="BodyBuilt">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Body Built</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="ExternalAppliances">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">External Appliances</label>
                           
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
                    <Field name="AttitudeofLimbs">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" ">Attitude of Limbs</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="InvoluntoryMovements">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Involuntary Movements</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="ModeOfAmbulation">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Mode Of Ambulation</label>
                           
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
                    <Field name="TrophicalChanges">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" ">Trophical Changes</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div className="fullw10">
                    <label>Muscle Tone</label>
                 <Field name="MuscleTone" component="select">
              <option />
              <option value="teleft">Atonic</option>
              <option value="teight"> Flaccid</option>
              <option value="teilateral"> Spastive</option>
              <option value="teilateral"> Rigid</option>
             
                  </Field>
                  </div>
                </Grid>
               
               </Grid>



<Grid container  spacing={2} className='mb-3'>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="TypeofBreathing">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" ">Type of Breathing</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

               <Grid item md={4} xs={12}>
                  <div>
                    <Field name="SymmetryofChest Expansion">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" ">Symmetry of Chest Expansion</label>
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
                  <div>
                    <Field name="Swelling">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" ">Swelling</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Temperature">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Temperature</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="SiteofPain">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Site of Pain</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
               </Grid>









<div className='mb-3'> <h4><u>On Examination</u></h4>  </div>
<div className='mb-3'> <h5>1.LOC According to Glascow Coma Scale</h5>  </div>
<div className='mb-3'> <h6>(A) Eye Opening</h6>  </div>
<Grid container  spacing={4} className='mb-3'>
                <Grid item md={6} xs={12}>
                   <div>
                    <Field name="Spontoneous">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Spontaneous</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={6} xs={12}>
                   <div>
                    <Field name="ToSpeech">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">To Speech</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

               </Grid>



<Grid container  spacing={4} className='mb-3'>
                <Grid item md={6} xs={12}>
                 <div>
                    <Field name="ToPainfulStimilus">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">To Painful Stimilus</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={6} xs={12}>
                  <div>
                    <Field name="NoResponse">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">No Response</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

               </Grid>


<div className='mb-3'> <h6>(B) Motor Response</h6>  </div>
<Grid container  spacing={4} className='mb-3'>
                <Grid item md={6} xs={12}>
                   <div>
                    <Field name="Followsmotorcommonds">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Follows motor commands</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={6} xs={12}>
                   <div>
                    <Field name="Localizes">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Localizes</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

               </Grid>



<Grid container  spacing={4} className='mb-3'>
                <Grid item md={6} xs={12}>
                 <div>
                    <Field name="Withdraws">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Withdrawals</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={6} xs={12}>
                  <div>
                    <Field name="AbnorrmalFlexion">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Abnormal Flexion</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

               </Grid>


    <Grid container  spacing={4} className='mb-3'>
                <Grid item md={6} xs={12}>
                   <div>
                    <Field name="ExtensorResponse">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Extensor Response</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={6} xs={12}>
                   <div>
                    <Field name="NoResponse">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">No Response</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

               </Grid>



<div className='mb-3'> <h6>(c) Verbal Response</h6>  </div>
<Grid container  spacing={4} className='mb-3'>
                <Grid item md={6} xs={12}>
                   <div>
                    <Field name="Oriented">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Oriented</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={6} xs={12}>
                   <div>
                    <Field name="ConfusedConversation">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Confused Conversation</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

               </Grid>



<Grid container  spacing={4} className='mb-3'>
                <Grid item md={6} xs={12}>
                 <div>
                    <Field name="Inoppropriate">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Inappropriate</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={6} xs={12}>
                  <div>
                    <Field name="IncomprehensibleSounds">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Incomprehensible Sounds</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

               </Grid>


    <Grid container  spacing={4} className='mb-3'>
                <Grid item md={12} xs={12}>
                   <div>
                    <Field name="NoResponse">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">  No Response</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
       </Grid>




    <Grid container  spacing={4} className='mb-3'>
                <Grid item md={12} xs={12}>
                   <div>
                    <Field name="Memory">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="widt"> <b>2.</b>Memory</label>
                           
                          <input type="text" {...input} placeholder="" className='wid'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>              
               </Grid>






    <Grid container  spacing={4} className='mb-3'>
                <Grid item md={12} xs={12}>
                   <div>
                    <Field name="Attention">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="widt"> <b>3.</b>Attention</label>
                           
                          <input type="text" {...input} placeholder="" className='wid'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>              
               </Grid>


    <Grid container  spacing={4} className='mb-3'>
                <Grid item md={12} xs={12}>
                   <div>
                    <Field name="AbstractReosoning Thoughts">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="widt "> <b>4.</b> Abstract Reasoning Thoughts</label>
                           
                          <input type="text" {...input} placeholder="" className='wid'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

               

               </Grid>

    <Grid container  spacing={4} className='mb-3'>
                <Grid item md={12} xs={12}>
                   <div>
                    <Field name="JudgementCalculation">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="widt"> <b>5.</b>  Judgement/Calculation</label>
                           
                          <input type="text" {...input} placeholder="" className='wid' />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>              
               </Grid>



<div className='mb-3'> <h5> <b>6.</b> Cranial Nerve Examination</h5>  </div>





<Grid container  spacing={2} className='mb-3'>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Olfoctory">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" "><b>(i)</b> Olfactory</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Optic">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=""><b>(ii)</b> Optic</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Occulomotor">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=""> <b>(iii)</b>  Occulomotor</label>
                           
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
                    <Field name="Trochlear">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" "> <b>(iv)</b> Trochlear</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Abducens">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=""> <b>(v)</b> Abducens</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Trigeminal">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=""> <b>(vi)</b> Trigeminal</label>
                           
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
                    <Field name="Facial">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" "> <b>(vii)</b> Facial</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="VestibularCochlear">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=""> <b>(viii)</b> Vestibular Cochlear</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Glossopharyngeal">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=""> <b>(ix)</b> Glossopharyngeal</label>
                           
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
                    <Field name="Vagur">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" "> <b>(x)</b> Vagus</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="SpinalAccessory">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=""> <b>(xi)</b>  Spinal Accessory</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Hypoglossal">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=""> <b>(xii)</b> Hypoglossal</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
               </Grid>




<div className='mb-3'> <h5> <b>7.</b> Sensory Examination</h5>  </div>





    <Grid container  spacing={4} className='mb-3'>
                <Grid item md={12} xs={12}>
                   <div>
                    <Field name="Superfical(Touch/Pain/Temperature/Pressure)">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="widt">Superfical(Touch/Pain/Temperature/Pressure)</label>
                           
                          <input type="text" {...input} placeholder="" className='wid'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>              
               </Grid>


    <Grid container  spacing={4} className='mb-3'>
                <Grid item md={12} xs={12}>
                   <div>
                    <Field name="Deep(Joint movement sense/Joint Position sense/vibration)">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="widt ">  Deep(Joint movement sense/Joint Position sense/vibration)</label>
                           
                          <input type="text" {...input} placeholder="" className='wid'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

               

               </Grid>

    <Grid container  spacing={4} className='mb-3'>
                <Grid item md={12} xs={12}>
                   <div>
                    <Field name="Cortical(Tactile localization/2-point discrimination/stereognosis/barognosis/graphesthesia/person)">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="widt">   Cortical(Tactile localization/2-point discrimination /stereognosis /barognosis/graphesthesia/person)</label>
                           
                          <input type="text" {...input} placeholder="" className='wid' />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>              
               </Grid>




<div className='mb-3'> <h5> <b>8.</b> Sensory Examination</h5>  </div>



<Grid container  spacing={2} className='mb-3'>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Intoct">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" "> Intact</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Decreased">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Decreased</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Exaggerated">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Exaggerated</label>
                           
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
                    <Field name="Inaccurate">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" "> Inaccurate</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Absent">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Absent</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Inconsistent">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Inconsistent</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
               </Grid>




<div className='mb-3'> <h5> <b>9.</b> Motor Assessment </h5>  </div>



<Grid container  spacing={2} className='mb-3'>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="MusclePower">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" "> Muscle Power</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Rom-Active/Passive">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">ROM-Active/Passive</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="MuscleGirth">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Muscle Girth</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
               </Grid>






<div className='mb-3'> <h5> <b>10.</b> Deep Tendon Reflexes</h5>  </div>



<Grid container  spacing={2} className='mb-3'>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Biceps">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" "> Biceps(C<sub>5</sub> ,C<sub>6</sub>)</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Triceps">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Triceps(C<sub>7</sub> ,C<sub>8</sub>)</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Patellor">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Patellar(L<sub>2</sub> ,L<sub>3</sub> ,L<sub>4</sub>)</label>
                           
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
                    <Field name="Hamstrings">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" "> Hamstrings(L<sub>5</sub> ,S<sub>1</sub> ,S<sub>2</sub>)</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Ankle">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Ankle(S<sub>1</sub> ,S<sub>2</sub> )</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
              
               </Grid>






<div className='mb-3'> <h5> <b>11.</b> Superficial Reflexes</h5>  </div>





    <Grid container  spacing={4} className='mb-3'>
                <Grid item md={12} xs={12}>
                   <div>
                    <Field name="BabinskiSign">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="widt">Babinski Sign</label>
                           
                          <input type="text" {...input} placeholder="" className='wid'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>              
               </Grid>









<Grid container  spacing={2} className='mb-3'>
                <Grid item md={4} xs={12}>
                  <div className="fullw10">
                   <label> <b>12.</b>Involuntary Movement  </label>
                   <Field name="InvoluntoryMovement" component="select">
              <option />
              <option value="Intentionol Tremor">Intentional Tremor</option>
              <option value="Posturol Tremor"> Postural Tremor</option>
             <option value="Resting Tremor"> Resting Tremor</option>
             
                  </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="VoluntoryControl">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Voluntary Control</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
              
               </Grid>








<div className='mb-3'> <h5> <b>13.</b> Co-ordination Assessment</h5>  </div>




<Grid container  spacing={4} className='mb-3'>
                <Grid item md={6} xs={12}>
                   <div>
                    <Field name="Fingertofinger">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Finger to finger</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={6} xs={12}>
                   <div>
                    <Field name="FingertoNose">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Finger to Alternate nose</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

               </Grid>



<Grid container  spacing={4} className='mb-3'>
                <Grid item md={6} xs={12}>
                 <div>
                    <Field name="FingertoTherapist finger">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Finger to Therapist finger</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={6} xs={12}>
                  <div>
                    <Field name="Alternatenosetofinger">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Alternate nose to finger</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

               </Grid>


    <Grid container  spacing={4} className='mb-3'>
                <Grid item md={6} xs={12}>
                   <div>
                    <Field name="Fingeropposition">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Finger  opposition</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={6} xs={12}>
                   <div>
                    <Field name="MassGrarp">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Mass Grasp</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

               </Grid>


<Grid container  spacing={4} className='mb-3'>
                <Grid item md={6} xs={12}>
                   <div>
                    <Field name="Pronation/Supination">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Pronation/Supination</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={6} xs={12}>
                   <div>
                    <Field name="Topping(hand & foot)">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Tapping(hand & foot)</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

               </Grid>



<Grid container  spacing={4} className='mb-3'>
                <Grid item md={6} xs={12}>
                 <div>
                    <Field name="Alternateheel ">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Alternate heel to knee & heel to toe</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={6} xs={12}>
                  <div>
                    <Field name="Toetoexaminer">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Toe to examiner's finger</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

               </Grid>


    <Grid container  spacing={4} className='mb-3'>
                <Grid item md={6} xs={12}>
                   <div>
                    <Field name="HeelonSkin">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Heel on Skin</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={6} xs={12}>
                   <div>
                    <Field name="Drowingcircle">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Drawing a circle(hand & foot)</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

               </Grid>







<div className='mb-3'> <h5> <b>14.</b> Balance Assessment</h5>  </div>







<Grid container  spacing={4} className='mb-3'>
                <Grid item md={6} xs={12}>
                 <div>
                    <Field name="Static">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Static</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={6} xs={12}>
                  <div>
                    <Field name="Dynamic">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Dynamic</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

               </Grid>


    <Grid container  spacing={4} className='mb-3'>
                <Grid item md={6} xs={12}>
                   <div>
                    <Field name="BergBalancescale">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Berg Balance scale</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={6} xs={12}>
                   <div>
                    <Field name="functionalbalance grades">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">functional balance grades</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

               </Grid>






<div className='mb-3'> <h5> <b>15.</b> Respiratory Assessment</h5>  </div>




<Grid container  spacing={4} className='mb-3'>
                <Grid item md={6} xs={12}>
                   <div>
                    <Field name="Chestexpansion">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Chest expansion</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={6} xs={12}>
                   <div>
                    <Field name="TypeDepthPattern">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Type, Depth, Pattern</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

               </Grid>



<Grid container  spacing={4} className='mb-3'>
                <Grid item md={6} xs={12}>
                 <div>
                    <Field name="Ventilationmode">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Ventilation-mode</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={6} xs={12}>
                  <div>
                    <Field name="Auscultation">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Auscultation</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

               </Grid>


    <Grid container  spacing={4} className='mb-3'>
                <Grid item md={6} xs={12}>
                   <div>
                    <Field name="Percussion">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Percussion</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={6} xs={12}>
                   <div>
                    <Field name="PFT">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">PFT</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

               </Grid>





    <Grid container  spacing={4} className='mb-3'>
                <Grid item md={12} xs={12}>
                   <div>
                    <Field name="BladdBowerFunction">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="widt"> <b>16.</b> Bladder & Bower Function</label>
                           
                          <input type="text" {...input} placeholder="" className='wid'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>              
               </Grid>






    <Grid container  spacing={4} className='mb-3'>
                <Grid item md={12} xs={12}>
                   <div>
                    <Field name="GaitAssessment">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="widt"> <b>17.</b> Gait Assessment</label>
                           
                          <input type="text" {...input} placeholder="" className='wid'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>              
               </Grid>


    <Grid container  spacing={4} className='mb-3'>
                <Grid item md={12} xs={12}>
                   <div>
                    <Field name="ADLAssessment">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="widt "> <b>18.</b> ADL Assessment</label>
                           
                          <input type="text" {...input} placeholder="" className='wid'/>
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
export default Neuro;