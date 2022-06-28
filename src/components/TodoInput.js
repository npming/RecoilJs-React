import React from 'react'
import { useRecoilState } from 'recoil';
import {todoState} from '../atoms/atoms'

const TodoInput = () => {
    const [idCount, setIdCount] = React.useState(1);
    const [value, setValue] = React.useState('');
    const [text, setText] = useRecoilState(todoState);

    const onChange = (event) => {
        setValue(event.target.value);
    };

    const saveTodo = () => {
        setText((currentState) => [
            ...currentState,
            {'id':idCount, 'todo': value, 'date': new Date(), 'done': false},
        ]);
        setValue('');
        setIdCount(idCount+1)
    }

  return (
    <div className='TodoInput'>
        <input placeholder='Enter todo' maxLength="70" value={value} onChange={onChange} onKeyPress={(e) => { if(e.key === 'Enter'){saveTodo()}}}/>
        <button onClick={saveTodo}>Save</button>
    </div>
  )
}

export default TodoInput