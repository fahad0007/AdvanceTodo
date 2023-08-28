import React, { useEffect } from 'react'
import './Create.scss'
import close from '../../images/close.svg'
import down_arrow from '../../images/down_arrow .svg'
import Select from 'react-select'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import DummyCategory from '../dummyCategory/DummyCategory'
// import { Picker } from 'emoji-mart'
import EmojiPicker from "emoji-picker-react";

// import 'emoji-mart/css/emoji-mart.css'

const getWorkData = ()=>{
  let workList =localStorage.getItem('workData');
  if (workList) {
    return JSON.parse(localStorage.getItem("workData"))
  }else{
    return []
  }
}

const getShoppingData = ()=>{
  let shoppingList =localStorage.getItem('shoppingData');
  if (shoppingList) {
    return JSON.parse(localStorage.getItem("shoppingData"))
  }else{
    return []
  }
}

const getTravelData = ()=>{
  let travelList =localStorage.getItem('travelData');
  if (travelList) {
    return JSON.parse(localStorage.getItem("travelData"))
  }else{
    return []
  }
}

const getStudyData = ()=>{
  let studyList =localStorage.getItem('studyData');
  if (studyList) {
    return JSON.parse(localStorage.getItem("studyData"))
  }else{
    return []
  }
}

const getHomeData = ()=>{
  let homeList =localStorage.getItem('homeData');
  if (homeList) {
    return JSON.parse(localStorage.getItem("homeData"))
  }else{
    return []
  }
}

function Create() {
  // const [value, setValue] = useState(null)
  const [inputValue, setInputValue] = useState('')
  const [categoryError, setCategoryError] = useState(false)
  const [inputError, setInputError] = useState(false)
  const [isToastShow, setIsToastShow] = useState(false)
  const [selectedOption, setSelectedOption] = useState('')
  const [selectedData, setSelectedData] = useState('')
  const [workData, setWorkData] = useState(getWorkData())
  const [shoppingData, setShoppingData] = useState(getShoppingData())
  const [travelData, setTravelData] = useState(getTravelData())
  const [studyData, setStudyData] = useState(getStudyData())
  const [homeData, setHomeData] = useState(getHomeData())
  const [showMenu, setShowMenu] = useState(false)
  const [isAll, setIsAll] = useState(true)
  const [isArrowShow, setIsArrowShow] = useState(false)
  const [isPickerOpen, setIsPickerOpen] = useState(false)
  const navigate = useNavigate()

  const location = useLocation()
  const previousPath = location?.state?.pageName
  const recieveWorkData = location?.state?.recieveWorkData
  console.log(previousPath,'Previous path name')
  console.log(recieveWorkData,'update Work Data1')

  
  // const [previousPath, setPreviousPath] = useState('/')
  // useEffect(()=>{
  //   setPreviousPath(location.pathname)
  // },[location.pathname])
  // console.log(previousPath,'previousPath aaa')
  // const previousPath = location.pathname 
  // console.log(previousPath,'previousPath')

  // const options = [
  //   { value: 'work' , label: 'Work' },
  //   { value: 'study' , label: 'Study' },
  //   { value: 'travel' , label: 'Travel' },
  //   { value: 'shopping' , label: 'Shopping' },
  //   { value: 'home' , label: 'Home' },
  // ]

  const options = [
    'All','Work','Study','Travel','Shopping','Home'
  ]

  const handleInput =(e)=>{
    (setInputValue(e.target.value))
    // console.log(e.target.value)
  }

  const handleSubmit =()=>{
   if(inputValue==='' ){
    if(inputValue===''){
      setInputError(true)
      setTimeout(()=>{
      setInputError(false)
      },3000)
    }
    //   if(selectedData===''){
    //   setCategoryError(true)
    //   setTimeout(()=>{
    //     setCategoryError(false)
    //     },3000)
    // }
   }

    else{
 
  if(selectedOption==='Work'){
    
    if(inputValue.trim()!==''){
       const allWorkData = {id: new Date().getTime().toString(), workItem: inputValue,allMessage: inputValue}
      setWorkData([...workData,allWorkData])
    // localStorage.setItem('workData',JSON.stringify(workData))
      console.log(workData,'Work Data')
    }
    
    setIsToastShow(true)
    setTimeout(()=>{
      setIsToastShow(false)
    },1000)

    setTimeout(()=>{
      navigate(`/${selectedOption}`)
    },2000)
  
  }

  if(selectedOption==='Shopping'){

    if(inputValue.trim()!==''){
      const allShoppingData = {id: new Date().getTime().toString(), shoppingItem: inputValue,allMessage: inputValue}
      
      setShoppingData([...shoppingData,allShoppingData])
      console.log(shoppingData,'shopping Data')
      setInputValue('')
    }
    setIsToastShow(true)
    setTimeout(()=>{
      setIsToastShow(false)
    },1000)

    setTimeout(()=>{
      navigate(`/${selectedOption}`)
    },2000)
  
  }

  if(selectedOption==='Travel'){

    if(inputValue.trim()!==''){
      const allTravelData = {id: new Date().getTime().toString(), travelItem: inputValue,allMessage: inputValue}
      
      setTravelData([...travelData,allTravelData])
      console.log(travelData,'travel Data')
      setInputValue('')
    }
    setIsToastShow(true)
    setTimeout(()=>{
      setIsToastShow(false)
    },1000)

    setTimeout(()=>{
      navigate(`/${selectedOption}`)
    },2000)
  
  }

  if(selectedOption==='Study'){

    if(inputValue.trim()!==''){
      const allStudyData = {id: new Date().getTime().toString(), studyItem: inputValue,allMessage: inputValue}
      
      setStudyData([...studyData,allStudyData])
      console.log(studyData,'study Data')
      setInputValue('')
    }
    setIsToastShow(true)
    setTimeout(()=>{
      setIsToastShow(false)
    },1000)

    setTimeout(()=>{
      navigate(`/${selectedOption}`)
    },2000)
   
  
  }

  if(selectedOption==='Home'){

    if(inputValue.trim()!==''){
      const allHomeData = {id: new Date().getTime().toString(), homeItem: inputValue, allMessage: inputValue}
      
      setHomeData([...homeData,allHomeData])
      console.log(homeData,'home Data')
      setInputValue('')
    }
    setIsToastShow(true)
    setTimeout(()=>{
      setIsToastShow(false)
    },1000)

    setTimeout(()=>{
      navigate(`/${selectedOption}`)
    },2000)
  
  }
    }
    
  }

  const handleSelectChange =(selectedOption)=>{
     setSelectedOption(selectedOption)
     const selectedData1 = selectedOption.value
     setSelectedData(selectedData1)
    //  console.log(selectedData1,'Hiiiilooooi')
     console.log(selectedOption.value,'Hiiiii')
  }

  useEffect(()=>{
    const chooseOption = options.find(option=>option===previousPath)
     console.log(chooseOption,'chooseOption')
     setSelectedOption(chooseOption)
     if(previousPath==='All'){
      setIsArrowShow(true)
      setIsAll(false)
     }
     else{
      setIsAll(true)
     }
  },[])

  useEffect(()=>{
    localStorage.setItem('workData',JSON.stringify(workData))

  },[workData])

  useEffect(()=>{
    localStorage.setItem('shoppingData',JSON.stringify(shoppingData))
  },[shoppingData])

  useEffect(()=>{
    localStorage.setItem('travelData',JSON.stringify(travelData))
  },[travelData])

  useEffect(()=>{
    localStorage.setItem('studyData',JSON.stringify(studyData))
  },[studyData])

  useEffect(()=>{
    localStorage.setItem('homeData',JSON.stringify(homeData))
  },[homeData])

  const handleMenu = ()=>{
    showMenu? setShowMenu(false):setShowMenu(true)

  }

  const handleItemClick = (listItem)=>{
    console.log(listItem,'Clicked ')
    setSelectedOption(listItem)
   
  }

  const handleEmojiSelect = (emoji)=>{
    // const emojiCode = emoji.native;
    // setInputValue((prevText)=>prevText+emojiCode)

  }

  const getEmoji = (elem) => {
    setInputValue(inputValue + elem.emoji);
    // localStorage.removeItem("epr_suggested")
  };

  return (
    <div className='create'>
        <img src={close} alt="close" className='close_logo' onClick={()=>{navigate('/')}} />
        <h1 className='heading'>ADD A TASK</h1>
        <div className="main_container">
          <div className="select_div">
            <h2 className='select_title'>Select Your Category</h2>
            <div onClick={handleMenu} className="category_box">
              {selectedOption}
              {
                showMenu && !isAll  ?  <div className="menu">
                <ul>
                  {
                    options.map((item,id)=>{
                    return(
                            <li onClick={()=>handleItemClick(item)} key={id}>{item}</li>
                    )
                    })
                  }
                </ul>
              </div> : ''
              }

{
  isArrowShow ?  <img src={down_arrow} alt="down_arrow" className='down_arrow' /> :''
}
     
            </div>
           {/* <Select options={options} value={selectedOption}  onChange={handleSelectChange}
          defaultValue={{value:'hello'}}
          // placeholder={selectedOption}
           isDisabled={false}
           styles={{
            control: (provided, state) => ({
              ...provided,
              boxShadow: "none",
              border: "none",
              backgroundColor: '#F5F5F5',
              color: "#000000",
              width:"100%"
            }),
            option:(provided, state) => ({
              ...provided,
              backgroundColor: state.isSelected ? 'white': 'white',
              color:'black',
              borderBottom:'1.5px solid #F5F5F5',
              ":hover":{
                backgroundColor:'white',
              // borderBottom:'2px solid #2196F3',
              width:'90%'
              }
            })
          }}
           /> */}
          <div className="text_area">



            {
            categoryError ? <div className="error">Please select a category</div> : ''
           }
           <button className='emoji_button' onClick={()=>setIsPickerOpen(!isPickerOpen)} >😃</button>
            <h2 className='text_area_title'>Type a task here</h2>
            {/* <DummyCategory selectedOption={selectedOption} /> */}
            <textarea className='text_area_input' value={inputValue} onChange={handleInput} />

            <div className= "emoji_div">
{
  isPickerOpen ?  <EmojiPicker
  suggestedEmojisMode="none"
    onEmojiClick={(elem) => getEmoji(elem)}
    previewConfig={{
      defaultEmoji: "",
      defaultCaption: "",
      showPreview: false,
    }}
    height="250px"
    width="87%"
  /> :''
}
      
      </div>


            {
              isToastShow ?  <div className="toast">Task added successfully</div> : ''
            }
           
            {
              inputError ? <div className="error">Please type your task</div> :''
            }
          </div>
            <button className='create_button' onClick={handleSubmit}>CREATE</button>
            {/* <h1>{selectedOption && selectedOption.value}</h1> */}
          </div> 
        </div>
    </div>
  )
}

export default Create
