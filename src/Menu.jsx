import React from 'react';
import {NavLink} from 'react-router-dom';

const Menu = () => {
return(
<>

<div className='text-center mb-4'><h4><u> MUSCULD-SKELETAL EVALUATION</u></h4></div>

<div className='menu '>
<NavLink  exact to='/'>HIP</NavLink>
<NavLink to='/knee'>KNEE</NavLink>
<NavLink to='/shoulder'>SHOULDER</NavLink>
<NavLink to='/elbow'>ELBOW & WRIST </NavLink>
<NavLink to='/ankle'>ANKLE & FOOT </NavLink>

</div>

</>
)
};

export default Menu;