import React from 'react'
import moment from 'moment'
import { FaTrashAlt, FaCheck } from 'react-icons/fa';
import {todoState} from '../atoms/atoms'
import { useRecoilState } from 'recoil';

const Todo = (props) => {

    const [todos, setTodos] = useRecoilState(todoState);

    const completeTodo = (data) => {
        let updatedTodos = todos.map(({ done, ...items }) => ({
            ...items,
            done: items.id === data ? true : false,
          }));
        setTodos(updatedTodos)
    }
  
    const deleteTodo = (index) => {
        // let updatedTodos = todos.filter(items => items.id != data);
        // setTodos(updatedTodos)
        const newList = removeItemAtIndex(todos, index);
        setTodos(newList);
    }

    function removeItemAtIndex(arr, index) {
        return [...arr.slice(0, index), ...arr.slice(index + 1)];
      }

  return (
    <li>
        <p className={props.item.done ? 'strikeText' : ''}>{props.item.todo} <span>{moment(props.item.date).format('DD/MM/YYYY')}</span></p>
        <div className='controls'>
            {!props.item.done ? <span className='done' onClick={()=>completeTodo(props.item.id)}><FaCheck /></span> : null}
            <span className='delete' onClick={()=>deleteTodo(props.index)}><FaTrashAlt /></span>  
        </div>      
    </li>
  )
}

export default Todo