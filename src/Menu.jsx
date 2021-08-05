import React from 'react';
import {NavLink} from 'react-router-dom';

const Menu = () => {
return(
<>

<div className='text-center mb-4'><h4> Musculd-Skeletal Evaluation</h4></div>

<div className='menu '>
<NavLink  exact to='/'>Hip</NavLink>
<NavLink to='/knee'>Knee</NavLink>
<NavLink to='/shoulder'>Shoulder</NavLink>
<NavLink to='/elbow'>Elbow & Wrist </NavLink>
<NavLink to='/ankle'>Ankle & Foot </NavLink>

</div>

</>
)
};

export default Menu;