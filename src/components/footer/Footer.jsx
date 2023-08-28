// import React from 'react'
// import './Footer.scss'
// import { useNavigate } from 'react-router-dom'
// import plus from '../../images/plus.svg'

// function Footer() {
//   const navigate = useNavigate()

//   return (
    
//          <div className='main-all-div'> 
//          <div className="inner">
//             <div className='horizontal_line'></div>
//           <div className='plus-div'>
//               <img src={plus} onClick={()=>{navigate('/create')}} alt="plus_logo" className='plus_logo' />
//           </div>
//          </div>
//         </div>

//   )
// }

// export default Footer
// {state:{pageName:pageName}}

import React from 'react'
import "./Footer.scss"
import plus from '../../images/plus.svg'
import { useNavigate } from 'react-router-dom'

function Footer  ({pageName,recieveWorkData})  {
    const navigate = useNavigate();
    // console.log(pageName,'pageName in footer')
    console.log(recieveWorkData,'recieveWorkData in footer')

  return (
    <div className='footer_pageall'>
        <div className='plus_cont' onClick={()=>navigate('/create',{state:{pageName:pageName,recieveWorkData:recieveWorkData}})}>  
          <img src={plus} alt="plus" />
        </div>
      </div>
  )
}

export default Footer
