import React, { useEffect, useState } from 'react'
import "./Task.scss"
import { useNavigate } from 'react-router-dom'
import Closelogo from "../../images/close.svg"
import Downarrrow from "../../images/down_arrow .svg"
// import { calculateNewValue } from '@testing-library/user-event/dist/utils'
const Task = () => {
    const [selectedItem, setSelectedItem] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const [taskText, setTaskText] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [categoryMessage, setCategoryMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        const category = localStorage.getItem('Category')
        console.log(category)
        if (category === 'All') {
            setSelectedItem('')
        }
        else {
            setSelectedItem(category)
            setShowDropdown(false)
        }

    }, [])

    const options = ['Work', 'Study', 'Travel', 'Shopping', 'Home'];
    const openDrop = () => {
            setShowDropdown(!showDropdown)
    }
    const handleOptionClick = (option) => {
        setSelectedItem(option);
        setShowDropdown(false);
    };
    const navigate = useNavigate()
    const handleCreateClick = () => {
        if (!taskText || !selectedItem) {
            if (!selectedItem) {
                setCategoryMessage('Please select a category.');

            }
            if (!taskText) {
                setErrorMessage('Please type your task.');
            }
        }
        else {
            setCategoryMessage('');
            setErrorMessage('');
            setSuccessMessage('Task added successfully.');
            const smallcategory = selectedItem.toLowerCase();
            navigate(`/${smallcategory}`)
            const existingTasks = JSON.parse(localStorage.getItem(selectedItem), ('All')) || [];
            const newTask = { task: taskText };
            existingTasks.push(newTask);
            localStorage.setItem(selectedItem, JSON.stringify(existingTasks));
            setTaskText('');
            setTimeout(() => {
                setSuccessMessage('');
            }, 2000);
        }
    };

    return (
        <div className='task_container'>

            <div className='task_header'>
                <div className='logo_close'>
                    <img src={Closelogo} alt="" onClick={() => navigate(-1)} />
                </div>
                <div className='heading'>ADD A TASK</div>
            </div>
            <div className='lower_container'>


                <div className='first_input_cont'>
                    <div className='category_task'>Select a category</div>
                    <div className='category_section'>
                        <div className='select1' onClick={openDrop}>
                            <img src={Downarrrow} alt="Dropdown Arrow" />
                            <div className='selected_item'>{selectedItem}</div>
                        </div>
                        {categoryMessage ? <div className='error_message error_message1'>{categoryMessage}</div> : null}
                        {showDropdown && (
                            <div className={`dropdown_option ${categoryMessage ? 'dropdown_option_error' : 'dropdown_option'}`}>
                                <ul>
                                    {options.map((option, index) => (
                                        <li key={index} onClick={() => handleOptionClick(option)}>
                                            {option}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
                <div className='second_input_cont'>
                    <div className='input_header'>Type a task here</div>
                    <div className='input_div'>
                        <textarea
                            type="text"
                            value={taskText}
                            onChange={(e) => setTaskText(e.target.value)}
                            required
                        />

                    </div>
                    {errorMessage ? <div className='error_message '>{errorMessage}</div> : null}

                </div>
                {successMessage && <div className='success_message'>{successMessage}</div>}


                <div className='crte_btn' onClick={() => { handleCreateClick() }}>CREATE</div>
            </div>
        </div>
    )
}

export default Task