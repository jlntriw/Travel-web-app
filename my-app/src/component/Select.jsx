import React from 'react' 

import Sikarim from '../Assets/sikarim.jpg' ;
import candi1 from '../Assets/candi.jpg';
import candi2 from '../Assets/candi2.jpg';
import sikidang from '../Assets/sikidang.jpg';
import sikunir from '../Assets/sikunir.jpg';
import telaga from '../Assets/telaga.jpg';
import SelectsCard from './SelectCards';
function Select() {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:gird-cols-2 lg:grid-cols-3 gap-4'>
    <SelectsCard bg={Sikarim} text='sikarim' />
    <SelectsCard bg={candi1} text='Arjuna' />
    <SelectsCard bg={candi2} text='Arjuna' />
    <SelectsCard bg={sikidang} text='sikidang' />
    <SelectsCard bg={telaga} text='telaga warna' />
    <SelectsCard bg={sikunir} text='sikunir' />
    </div>
  )
}

export default Select