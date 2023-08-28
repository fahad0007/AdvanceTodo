import React, { useEffect } from 'react'
import { useState } from 'react'
import  './Travel.scss'
import world from '../../images/world.svg'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import blur from '../../images/blur.svg'
import checked from '../../images/checked.svg'
import delete1 from '../../images/delete1.svg'
import no_data_logo from '../../images/no_data_logo.avif'
import DeleteToast from '../deleteToast/DeleteToast'




const getTravelData = ()=>{
  let travelList = JSON.parse(localStorage.getItem('travelData')) 
  return travelList
}
function Travel() {
  const [recieveTravelData, setRecieveTravelData] = useState(getTravelData())
  const travelLength = recieveTravelData && recieveTravelData.length
  const [isChecked, setIsChecked] = useState([])
  const [isTravelEmpty, setisTravelEmpty] = useState(true)
  const [isDelete, setIsDelete] = useState(false)


  const handleCheck = (title)=>{
    if(isChecked.includes(title)){
      setIsChecked(isChecked.filter(t=>t!==title))
    }
    else{
      setIsChecked([...isChecked,title])
    }
  }
  useEffect(()=>{
  if(travelLength>0){
 setisTravelEmpty(false)
  }
  },[])

  const handleDelete = (id)=>{
    console.log(id,'id')
    const updateTravelData =  recieveTravelData.filter((elem)=>{
        return(elem.id!==id)
      })
      setRecieveTravelData(updateTravelData)
      localStorage.setItem('travelData',JSON.stringify(updateTravelData))
      setIsDelete(true)
      setTimeout(()=>{
        setIsDelete(false)
      },1500)
      // console.log(recieveWorkData,'recieve Work Data in Delete Function')

      const receiveAllData = JSON.parse(localStorage.getItem('allData'))

      const updateAllData = receiveAllData.filter((elem)=>{
         return(elem.id!==id)
       })
       setRecieveTravelData(updateAllData)
       setRecieveTravelData(updateTravelData)
    }

  return (
    <div className='travel'>
      <Navbar title='Travel' logo={world}/>  
      <div className="main_contents">
      {
        isTravelEmpty ? <img src={no_data_logo} className='empty_logo'alt="no_data_logo" /> :
        recieveTravelData &&  recieveTravelData.map((item)=>{
            return(
              <div className="contents" key={item.id}>
                <div className="left">
              <img src={blur} alt="group" className='blur_logo' />
              <h4 className='description' style={{textDecoration: isChecked.includes(item.travelItem) ? 'line-through' : 'none' }}>{item.travelItem}</h4>
                </div>
                <div className="right">
              <img src={checked} alt="checked" className='checked_logo' onClick={()=>handleCheck(item.travelItem)} />
              <img src={delete1} alt="delete"  className='delete_logo' onClick={()=>handleDelete(item.id)} />
                </div>
            </div>
            )
          })
        }
        {
  isDelete ?     <div className="delete_toast_div">
  <DeleteToast />
</div> : ''
}
      </div>
      <Footer pageName = 'Travel'/>
    </div>
  )
}

export default Travel
