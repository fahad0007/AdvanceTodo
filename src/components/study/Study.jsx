import React, { useEffect } from 'react'
import { useState } from 'react'
import './Study.scss'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import book from '../../images/book.svg'
import blur from '../../images/blur.svg'
import checked from '../../images/checked.svg'
import delete1 from '../../images/delete1.svg'
import no_data_logo from '../../images/no_data_logo.avif'
import DeleteToast from '../deleteToast/DeleteToast'



const getStudyData = ()=>{
  let studyList = JSON.parse(localStorage.getItem('studyData')) 
  return studyList
}
function Study() {
  const [recieveStudyData, setRecieveStudyData] = useState(getStudyData())
  const studyLength = recieveStudyData && recieveStudyData.length
  const [isChecked, setIsChecked] = useState([])
  const [isStudyEmpty, setisStudyEmpty] = useState(true)
  const [isDelete, setIsDelete] = useState(false)


  // const pageName ='study'

  const handleCheck = (title)=>{
    // console.log(title,'work item in handle check')

    if(isChecked.includes(title)){
      setIsChecked(isChecked.filter(t=>t!==title))
    }
    else{
      setIsChecked([...isChecked,title])
    }
  }


  useEffect(()=>{
if(studyLength>0){
  setisStudyEmpty(false)
}
  },[])

  const handleDelete = (id)=>{
    console.log(id,'id')
    const updateStudyData =  recieveStudyData.filter((elem)=>{
        return(elem.id!==id)
      })
      setRecieveStudyData(updateStudyData)
      localStorage.setItem('studyData',JSON.stringify(updateStudyData))
      setIsDelete(true)
      setTimeout(()=>{
        setIsDelete(false)
      },1500)
      // console.log(recieveWorkData,'recieve Work Data in Delete Function')

      const receiveAllData = JSON.parse(localStorage.getItem('allData'))

      const updateAllData = receiveAllData.filter((elem)=>{
         return(elem.id!==id)
       })
       setRecieveStudyData(updateAllData)
       setRecieveStudyData(updateStudyData)
    }
  return (
    <div className='study'>
      <Navbar title='Study' logo={book}/>
      <div className="main_contents">
      {
        isStudyEmpty ? <img src={no_data_logo} className='empty_logo' alt="no_data_logo" /> :
        recieveStudyData &&  recieveStudyData.map((item)=>{
            return(
              <div className="contents" key={item.id}>
                <div className="left">
              <img src={blur} alt="group" className='blur_logo' />
              <h4 className='description' style={{textDecoration: isChecked.includes(item.studyItem) ? 'line-through' : 'none' }}>{item.studyItem}</h4>
                </div>
                <div className="right">
              <img src={checked} alt="checked" className='checked_logo' onClick={()=>handleCheck(item.studyItem)} />
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
      <Footer pageName = 'Study' />
    </div>
  )
}

export default Study
