import React from 'react'
import './Work.scss'
import Navbar from '../navbar/Navbar'
import briefcase from '../../images/briefcase.svg'
import Footer from '../footer/Footer'
import { useEffect } from 'react'
import { useState } from 'react'
import blur from '../../images/blur.svg'
import checked from '../../images/checked.svg'
import delete1 from '../../images/delete1.svg'
import no_data_logo from '../../images/no_data_logo.avif'
import DeleteToast from '../deleteToast/DeleteToast'

const getWorkData = ()=>{
  let workList = JSON.parse(localStorage.getItem('workData')) 
  return workList
}

function Work() {
  const [recieveWorkData, setRecieveWorkData] = useState(getWorkData())
   const workLength = recieveWorkData && recieveWorkData.length
  const [isChecked, setIsChecked] = useState([])
  const [isWorkEmpty, setIsWorkEmpty] = useState(true)
  const [isDelete, setIsDelete] = useState(false)

  const [updateWorkData, setUpdateWorkData] = useState(null)
//   useEffect(() => {
//   setRecieveWorkData( JSON.parse(localStorage.getItem('workData') || []))
// console.log(recieveWorkData,'Data in Work Component')
//   }, [])



useEffect(()=>{
if(workLength>0){
  setIsWorkEmpty(false)
}
},[])
  const handleCheck = (title)=>{
    // console.log(title,'work item in handle check')

    if(isChecked.includes(title)){
      setIsChecked(isChecked.filter(t=>t!==title))
    }
    else{
      setIsChecked([...isChecked,title])
    }
  }

  const handleDelete = (id)=>{
  console.log(id,'id')
  const updateWorkData =  recieveWorkData.filter((elem)=>{
      return(elem.id!==id)
    })
    setRecieveWorkData(updateWorkData)
    localStorage.setItem('workData',JSON.stringify(updateWorkData))
    setIsDelete(true)
    setTimeout(()=>{
      setIsDelete(false)
    },1500)

    const receiveAllData = JSON.parse(localStorage.getItem('allData'))

   const updateAllData = receiveAllData.filter((elem)=>{
      return(elem.id!==id)
    })
    setRecieveWorkData(updateAllData)
    setRecieveWorkData(updateWorkData)
  }
  return (
    <div className='work'>
      <Navbar title='Work' logo={briefcase}/>    
      <div className="main_contents">
        {
          isWorkEmpty ? <img className='empty_logo' src={no_data_logo} alt="no_data_logo"  /> :
        recieveWorkData &&  recieveWorkData.map((item)=>{
            return(
              <div className="contents" key={item.id}>
                <div className="left">
              <img src={blur} alt="group" className='blur_logo' />
              <h4 className='description' style={{textDecoration: isChecked.includes(item.workItem) ? 'line-through' : 'none' }}>{item.workItem}</h4>
                </div>
                <div className="right">
              <img src={checked} alt="checked" className='checked_logo' onClick={()=>handleCheck(item.workItem)} />
              <img src={delete1} onClick={()=>handleDelete(item.id)} alt="delete"  className='delete_logo' />
                </div>
            </div>
            )
          })
        }
      {/* <div className="contents">
          <img src={blur} alt="group" className='blur_logo' />
          <h4 className='description'>Complete a coloring book page using various</h4>
          <img src={checked} alt="checked" className='checked_logo' />
          <img src={delete1} alt="delete"  className='delete_logo' />
        </div> */}
      
      {
  isDelete ?     <div className="delete_toast_div">
  <DeleteToast />
</div> : ''
}
      </div>
      <Footer pageName = 'Work' recieveWorkData={recieveWorkData}/>
    </div>
  )
}

export default Work
