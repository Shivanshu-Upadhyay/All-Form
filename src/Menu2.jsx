import React from 'react';
import {NavLink} from 'react-router-dom';

const Menu2 = () => {
return(
<> 

<div className='text-center mb-4'><h4> More  Evaluation Form</h4></div>

<div className='menu '>
<NavLink exact activeClassName="active" to='/neuro'>Neuro</NavLink>
<NavLink to='/paediatric'>Paediatric</NavLink>
<NavLink to='/cardio'>Cardio-Pulmonary</NavLink>
<NavLink to='/antenatal'>Antenatal</NavLink>
<NavLink to='/postnatal'>Postnatal </NavLink>
</div>





</>
)
};

export default Menu2;