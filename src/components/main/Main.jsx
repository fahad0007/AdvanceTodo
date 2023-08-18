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

function Main() {
  data[0].logo=clipboard
  data[1].logo=briefcase
  data[2].logo=book
  data[3].logo=world
  data[4].logo=online_shopping
  data[5].logo=house

  return (
    <div className='main'>
      <img className='menu_logo' src={menu} alt="menu_logo" />
      <h1 className='title'>TODO LIST</h1>
      <div className="cards_container">
        {
          data.map((item)=>(
            <div className="card">
            <img src={item.logo} className='card_logo' alt="logo" />
            <h2>{item.name}</h2>
            <h3>{item.task}</h3>
          </div>
          ))
        }

      </div>
    </div>
  )
}

export default Main
