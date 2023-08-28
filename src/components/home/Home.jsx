import React, { useEffect } from 'react'
import { useState } from 'react'
import './Home.scss'
import house from '../../images/house.svg'
import Navbar from '../navbar/Navbar'
import blur from '../../images/blur.svg'
import checked from '../../images/checked.svg'
import delete1 from '../../images/delete1.svg'
import Footer from '../footer/Footer'
import no_data_logo from '../../images/no_data_logo.avif'
import DeleteToast from '../deleteToast/DeleteToast'


function Home() {

  const getHomeData = ()=>{
    let homeList = JSON.parse(localStorage.getItem('homeData')) 
    return homeList
  }
  
  const [recieveHomeData, setRecieveHomeData] = useState(getHomeData())
  const homeLength = recieveHomeData && recieveHomeData.length
  const [isChecked, setIsChecked] = useState([])
  const [isHomeEmpty, setIsHomeEmpty] = useState(true)
  const [isDelete, setIsDelete] = useState(false)

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
if(homeLength>0){
  setIsHomeEmpty(false)
}
  },[])

  const handleDelete = (id)=>{
    console.log(id,'id')
    const updateHomeData =  recieveHomeData.filter((elem)=>{
        return(elem.id!==id)
      })
      setRecieveHomeData(updateHomeData)
      localStorage.setItem('homeData',JSON.stringify(updateHomeData))
     setIsDelete(true)
      setTimeout(()=>{
        setIsDelete(false)
      },1500)
     

      const receiveAllData = JSON.parse(localStorage.getItem('allData'))
      const updateAllData = receiveAllData.filter((elem)=>{
         return(elem.id!==id)
       })
       setRecieveHomeData(updateAllData)
       setRecieveHomeData(updateHomeData)

    }

  return (
    <div className='home'>
      <Navbar title='Home' logo={house} />
      <div className="main_contents">
      {
        isHomeEmpty ? <img src={no_data_logo} className='empty_logo' alt="no_data_logo" /> :
        recieveHomeData &&  recieveHomeData.map((item)=>{
            return(
              <div className="contents" key={item.id}>
                <div className="left">
              <img src={blur} alt="group" className='blur_logo' />
              <h4 className='description' style={{textDecoration: isChecked.includes(item.homeItem) ? 'line-through' : 'none' }}>{item.homeItem}</h4>
                </div>
                <div className="right">
              <img src={checked} alt="checked" className='checked_logo' onClick={()=>handleCheck(item.homeItem)} />
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
   
      <Footer pageName = 'Home'/>
        
    </div>
  )
}

export default Home
