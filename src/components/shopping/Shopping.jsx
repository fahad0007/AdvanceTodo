import React, { useEffect } from 'react'
import { useState } from 'react'
import './Shopping.scss'
import Navbar from '../navbar/Navbar'
import online_shopping from '../../images/online_shopping.svg'
import Footer from '../footer/Footer'
import List from '../list/List'
import blur from '../../images/blur.svg'
import checked from '../../images/checked.svg'
import delete1 from '../../images/delete1.svg'
import no_data_logo from '../../images/no_data_logo.avif'
import DeleteToast from '../deleteToast/DeleteToast'



const getShoppingData = ()=>{
  let shoppingList = JSON.parse(localStorage.getItem('shoppingData')) 
  return shoppingList
}

function Shopping() {
  const [receiveShoppingData, setReceiveShoppingData] = useState(getShoppingData())
  const shoppingLength = receiveShoppingData && receiveShoppingData.length

  const [isChecked, setIsChecked] = useState([])
  const [isShoppingEmpty, setisShoppingEmpty] = useState(true)
  const [isDelete, setIsDelete] = useState(false)

  const handleCheck = (title)=>{
    // console.log(title,'work item in handle check')

    if(isChecked.includes(title)){
      setIsChecked(isChecked.filter(elem=>elem!==title))
    }
    else{
      setIsChecked([...isChecked,title])
    }
  }

  console.log(receiveShoppingData,'receiveShoppingData in Shopping')

  useEffect(()=>{
if(shoppingLength>0){
  setisShoppingEmpty(false)
}
  },[])

  const handleDelete = (id)=>{
    console.log(id,'id')
    const updateShoppingData =  receiveShoppingData.filter((elem)=>{
        return(elem.id!==id)
      })
      setReceiveShoppingData(updateShoppingData)
      localStorage.setItem('shoppingData',JSON.stringify(updateShoppingData))
      setIsDelete(true)
      setTimeout(()=>{
        setIsDelete(false)
      },1500)
    

      const receiveAllData = JSON.parse(localStorage.getItem('allData'))

      const updateAllData = receiveAllData.filter((elem)=>{
         return(elem.id!==id)
       })
       setReceiveShoppingData(updateAllData)
       setReceiveShoppingData(updateShoppingData)
    }
  return (
    <div className='shopping'>
     <Navbar title='Shopping' logo={online_shopping} />
     <div className="main_contents">
     {
      isShoppingEmpty ? <img src={no_data_logo} className='empty_logo' alt="no_data_logo" /> :
        receiveShoppingData &&  receiveShoppingData.map((item)=>{
            return(
              <div className="contents" key={item.id}>
                <div className="left">
              <img src={blur} alt="group" className='blur_logo' />
              <h4 className='description' style={{textDecoration: isChecked.includes(item.shoppingItem) ? 'line-through' : 'none' }}>{item.shoppingItem}</h4>
                </div>
                <div className="right">
              <img src={checked} alt="checked" className='checked_logo' onClick={()=>handleCheck(item.shoppingItem)} />
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
     <Footer pageName = 'Shopping'/>
    </div>
  )
}

export default Shopping
