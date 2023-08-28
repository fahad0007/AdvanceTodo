import React from 'react'
import './Main.scss'
import menu from '../../images/menu.svg'
import book from '../../images/book.svg'
import briefcase from '../../images/briefcase.svg'
import clipboard from '../../images/clipboard.svg'
import house from '../../images/house.svg'
import online_shopping from '../../images/online_shopping.svg'
import world from '../../images/world.svg'
import data from '../../data'
import { NavLink } from 'react-router-dom'

function Main() {
  data[0].logo=clipboard
  data[1].logo=briefcase
  data[2].logo=book
  data[3].logo=world
  data[4].logo=online_shopping
  data[5].logo=house

  const recieveAllData = JSON.parse(localStorage.getItem('allData'))
  data[0].task=recieveAllData && recieveAllData.length 

  const recieveWorkData = JSON.parse(localStorage.getItem('workData'))
  data[1].task=recieveWorkData && recieveWorkData.length 

  const recieveStudyData = JSON.parse(localStorage.getItem('studyData'))
  data[2].task=recieveStudyData && recieveStudyData.length 

  const recieveTravelData = JSON.parse(localStorage.getItem('travelData'))
  data[3].task= recieveTravelData && recieveTravelData.length 

  const recieveShoppingData = JSON.parse(localStorage.getItem('shoppingData'))
  data[4].task=recieveShoppingData && recieveShoppingData.length 

  const recieveHomeData = JSON.parse(localStorage.getItem('homeData'))
  data[5].task= recieveHomeData && recieveHomeData.length 

  return (
    <div className='main'>
      <img className='menu_logo' src={menu} alt="menu_logo" />
      <h1 className='title'>TODO LIST</h1>
      <div className="cards_container">
        {
          data.map((item,id)=>(
           < NavLink to={item.link} className='link_style' >
            <div className="card" key={id} >
            <img src={item.logo} className='card_logo' alt="logo" />
            <h2>{item.name}</h2>
            <h3>Task {item.task}</h3>
          </div>
          </NavLink>
          ))
        }
      </div>
    </div>
  )
}

export default Main
