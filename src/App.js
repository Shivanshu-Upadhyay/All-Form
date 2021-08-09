import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from './Nav'
import Ankle from './Forms/Ankle';
import Elbow from './Forms/Elbow';
import Hip from './Forms/Hip';
import Knee from './Forms/Knee';
import Neuro from './Forms/Neurological';
import Paediatric from './Forms/Paediatric';
import PostNatal from './Forms/PostNatal';
import Cardio from './Forms/Cardio';
import Shoulder from './Forms/Shoulder'; 
import AntiNatal from './Forms/AntiNatal';



 function App()  {
    return (
      <>

      
        <Router>
        <div>
          <Switch>
            <Route exact path ="/ankleform" component ={Ankle}/>
            <Route exact path ="/cardioform" component ={Cardio}/>
            <Route exact path ="/elbowform" component ={Elbow}/>
            <Route exact path ="/hipform" component ={Hip}/>
            <Route exact path ="/kneeform" component ={Knee}/>
            <Route exact path ="/neuroform" component ={Neuro}/>
            <Route exact path ="/paediatricform" component ={Paediatric}/>
            <Route exact path ="/postnatalform" component ={PostNatal}/>
            <Route exact path ="/shoulderform" component ={Shoulder}/>
            <Route exact path ="/antenatalform" component ={AntiNatal}/>
           
            <Nav/>
            
            
          </Switch>
        </div>
      </Router>
      </>
    )
    
}
export default App;
