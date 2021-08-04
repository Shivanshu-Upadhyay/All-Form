import React from 'react';
import {NavLink} from 'react-router-dom';

const Menu2 = () => {
return(
<> 

<div className='text-center mb-4'><h4><u> MORE  EVALUATION FORM</u></h4></div>

<div className='menu '>
<NavLink exact activeClassName="active" to='/neuro'>NEURO</NavLink>
<NavLink to='/paediatric'>PAEDIATRIC</NavLink>
<NavLink to='/cardio'>CARDIO-PULMONARY</NavLink>
<NavLink to='/antenatal'>ANTENATAL</NavLink>
<NavLink to='/postnatal'>POSTNATAL </NavLink>
</div>





</>
)
};

export default Menu2;