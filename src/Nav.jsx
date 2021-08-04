import React from 'react';
import {Route, Switch } from 'react-router-dom';
import Hip2 from './Hip2';
import Knee2 from './Knee2';
import Shoulder2 from './Shoulder2';
import Ankle2 from './Ankle2';
import Menu from './Menu';
import Menu2 from './Menu2';
import Neuro2 from './Neuro2';
import Paediatric2 from './Paediatric2';
import Cardio2 from './Cardio2';
import Antenatal2 from './Antenatal2';
import Postnatal2 from './Postnatal2';
import Elbow2 from './Elbow2';
import './index.css'



const Nav = () => {

return( 

          <>
          <div className='mb-3 mt-2'> <Menu  /></div>
              
          <Switch>

            <Route exact path='/'  component={Hip2}/>
            <Route  path='/knee'  component={Knee2} />
            <Route  path='/shoulder'  component={Shoulder2}/>
             <Route  path='/elbow'  component={Elbow2}/>
            <Route  path='/ankle'  component={Ankle2}/>
           
          </Switch>
          
             <br />

          <div className='mb-3 mt-2'> <Menu2  /></div>
                  <Switch>

            <Route exact path='/neuro'  component={Neuro2}/>
            <Route  path='/paediatric'  component={Paediatric2} />
            <Route  path='/cardio'  component={Cardio2}/>
            <Route  path='/antenatal'  component={Antenatal2}/>
            <Route  path='/postnatal'  component={Postnatal2}/>
          </Switch>

           <br />

           
           

         </>
)
};

export default Nav;