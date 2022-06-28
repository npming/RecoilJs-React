import React from 'react'
import {todoState} from '../atoms/atoms'
import { useRecoilValue } from 'recoil';
import Todo from './Todo'

const Todos = () => {
    const todos = useRecoilValue(todoState)

  return (
    <div className='todoListWrapper'>
        <h3>Todos</h3>
        <ul>
            {todos && todos.length ? todos.map((item, i) => <Todo item={item} key={i} index={i} />)
            : <li style={{textAlign: 'center'}}>Enter your todo items for the day</li>}
        </ul>
    </div>
  )
}

export default Todos