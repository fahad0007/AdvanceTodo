import React from 'react'
import './List.scss'
import blur from '../../images/blur.svg'
import checked from '../../images/checked.svg'
import delete1 from '../../images/delete1.svg'

function List({description,isChecked,handleChecked,item}) {

 
  return (
    
          <div className="contents">
                <div className="left">
              <img src={blur} alt="group" className='blur_logo' />
              <h4 className='description' style={{textDecoration: isChecked.includes(item.shoppingItem) ? 'line-through' : 'none' }}>{description}</h4>
                </div>
                <div className="right">
              <img src={checked} onClick={handleChecked} alt="checked" className='checked_logo' />
              <img src={delete1} alt="delete"  className='delete_logo' />
                </div>
            </div>
  )
}

export default List
