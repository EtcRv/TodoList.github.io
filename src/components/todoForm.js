import React, {useState} from 'react'

import { useDispatch } from 'react-redux'
import { listActions } from '../store'
import classes from './todoForm.module.css'

const TodoForm = () => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch();
    let flag= false;
    const submitFormHandler = (event) => {
        event.preventDefault();
        
        dispatch(listActions.addWorkToList({
            id: Math.floor(Math.random() * 10000),
            value: input
        }))
        setInput('')
    }

    const typeInputHandler = (event) => {
        setInput(event.target.value);
        
    }
    
    if(input.trim().length !== 0){
        flag = true;
    }
    return (
        <form className={classes.inputField} onSubmit={submitFormHandler}>
            <input 
                type="text" 
                placeholder="Add your new todo" 
                value={input}
                onChange={typeInputHandler}
            />
            <button className={flag ? `${classes.active}` : ''}><i class="fas fa-plus"></i></button>
        </form>
    )
}

export default TodoForm
