import React from 'react';
import './App.css'
import Newone from './component/Newone'
import Time from './component/timer-count'

class App extends React.Component {
 
  render() {
   
    return (
    <div className='App'>
          <h3>HEllo, please press the button to show the info:</h3>
           <Newone />
           <Time />
    </div>
    );
  }

}

export default App;