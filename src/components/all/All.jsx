import React, { useEffect } from 'react'
import { useState } from 'react'
import './All.scss'
import clipboard from '../../images/clipboard.svg'
import blur from '../../images/blur.svg'
import checked from '../../images/checked.svg'
import delete1 from '../../images/delete1.svg'
import { useNavigate } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import no_data_logo from '../../images/no_data_logo.avif'
import DeleteToast from '../deleteToast/DeleteToast'

function All() {
    const getAllData = ()=>{
      let allList =localStorage.getItem('allData');
      if (allList) {
        return JSON.parse(localStorage.getItem("allData"))
      }else{
        return []
      }
    }
  
  const [isChecked, setIsChecked] = useState([])
  const [isAllEmpty, setIsAllEmpty] = useState(true)
  const [isDelete, setIsDelete] = useState(false)

  const [recieveAllDataState, setRecieveAllDataState] = useState(getAllData())
  

    const recieveWorkData = JSON.parse(localStorage.getItem('workData'))
    const recieveShoppingData = JSON.parse(localStorage.getItem('shoppingData'))
    const recieveTravelData = JSON.parse(localStorage.getItem('travelData'))
    const recieveStudyData = JSON.parse(localStorage.getItem('studyData'))
    const recieveHomeData = JSON.parse(localStorage.getItem('homeData'))

      const recieveAllData = [...recieveWorkData,...recieveShoppingData,...recieveStudyData,...recieveTravelData,...recieveHomeData] 

      useEffect(()=>{
        setRecieveAllDataState(recieveAllData)
      },[])

      useEffect(()=>{
  localStorage.setItem('allData',JSON.stringify(recieveAllData))
      },[recieveAllDataState || recieveAllData])

      
      const AllLength = recieveAllData && recieveAllData.length

    console.log(recieveAllDataState,'All Data State')
  const navigate = useNavigate()

  const handleCheck = (title)=>{
    if(isChecked.includes(title)){
      setIsChecked(isChecked.filter(t=>t!==title))
    }
    else{
      setIsChecked([...isChecked,title])
    }
  }

  useEffect(()=>{
if(AllLength>0){
  setIsAllEmpty(false)
}
  },[])

  const HandleDelete = (id)=>{
    console.log(id,'iddddd')
    const updateAllData =  recieveAllDataState.filter((elem)=>{
        return(elem.id!==id)
      })

 
        setRecieveAllDataState(updateAllData)
        localStorage.setItem('allData',JSON.stringify(updateAllData))
    
     
       setIsDelete(true)
        setTimeout(()=>{
            setIsDelete(false)
          },1500)
        console.log(recieveWorkData,'recieve Work Data in Delete Function')
        
        const updateWorkData =  recieveWorkData.filter((elem)=>{
          return(elem.id!==id)
        })
        localStorage.setItem('workData',JSON.stringify(updateWorkData))

        const updateShoppingData =  recieveShoppingData.filter((elem)=>{
          return(elem.id!==id)
        })
        localStorage.setItem('shoppingData',JSON.stringify(updateShoppingData))

        const updateTravelData =  recieveTravelData.filter((elem)=>{
          return(elem.id!==id)
        })
        localStorage.setItem('travelData',JSON.stringify(updateTravelData))

        const updateStudyData =  recieveStudyData.filter((elem)=>{
          return(elem.id!==id)
        })
        localStorage.setItem('studyData',JSON.stringify(updateStudyData))

        const updateHomeData =  recieveHomeData.filter((elem)=>{
          return(elem.id!==id)
        })
        localStorage.setItem('homeData',JSON.stringify(updateHomeData))

       
      
    }
  return (
    <div className='all'>
      <Navbar title='ALL TASK' logo={clipboard} />
      <div className="main_contents">
      {
        isAllEmpty ? <img src={no_data_logo} className='empty_logo' alt="no_data_logo" /> :
        recieveAllDataState &&  recieveAllDataState.map((item)=>{
            return(
              <div className="contents" key={item.id}>
                <div className="left">
              <img src={blur} alt="group" className='blur_logo' />
              <h4 className='description' style={{textDecoration: isChecked.includes(item.allMessage) ? 'line-through' : 'none' }}>{item.allMessage}</h4>
                </div>
                <div className="right">
              <img src={checked} alt="checked" className='checked_logo' onClick={()=>handleCheck(item.allMessage)} />
              <img src={delete1} alt="delete"  className='delete_logo'  onClick={()=>HandleDelete(item.id)}  />
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
      <div className="footer">
      <Footer pageName = 'All' />
      </div>
    </div>
  )
}

export default All
