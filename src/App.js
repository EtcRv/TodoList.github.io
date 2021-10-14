import { useSelector, useDispatch } from 'react-redux';
import { listActions } from './store';
import classes from './App.module.css'
import TodoForm from "./components/todoForm";
import TodoList from './components/todoList';


function App() {
  const numberOfTask = useSelector(state => state.todolist.totalWork);
  const dispatch = useDispatch()
  return (
    <div className={classes.wrapper}>
      <header>Todo App</header>
      <TodoForm />
      <TodoList />
      <footer className={classes.footer}>
        You have {numberOfTask} pending tasks
        <button className={numberOfTask ? `${classes.active}`:''} onClick={() => dispatch(listActions.removeAllWork())} >Clear All</button>
      </footer>
    </div>
  );
}

export default App;
