import React from 'react';
import {RecoilRoot} from 'recoil';
import Todos from './components/Todos'
import TodoInput from './components/TodoInput'
import './App.css';

function App() {
  return (
    <div className="App">
      <RecoilRoot>
          <Todos />
          <TodoInput/>
      </RecoilRoot>
    </div>
  );
}

export default App;
