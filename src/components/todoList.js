import React from 'react'

import classes from './todoList.module.css'
import {useSelector, useDispatch} from 'react-redux'
import { listActions } from '../store'

function TodoList() {
    const dispatch = useDispatch();
    const lists = useSelector(state => state.todolist.lists)
    
    return (
        <ul className={classes.todoList}>
            {lists.map((list) => {
                return (<li key={list.id}>
                    <div className={classes.icon} onClick={() => dispatch(listActions.removeWorkToList(list.id))} >
                        <i class="fas fa-trash"></i>
                    </div>
                    {list.value}
                </li>)
            })}
        </ul>
    )
}

export default TodoList
