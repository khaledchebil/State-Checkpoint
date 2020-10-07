import React from 'react';
import '../App.css'

class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
            timer :0
      };
  }


  render() {

    const {timer} = this.state
    return (
    <div className='App'>
      <br/>
    <span>timer: {timer}</span>

    </div>
    );
  }

componentDidMount() {
  this.Elinterval = setInterval(()=> {
    this.setState({
      timer: this.state.timer+1
    })
  },1000)

}

}

export default Time;