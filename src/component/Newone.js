import React, { Component } from 'react'
import '../App.css'
// import pic1 from '../pic1.jpg'

class Newone extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
         show: false, 
           };
        this.showIt = this.showIt.bind(this)
            }

        showIt() {
            const {show} = this.state
            this.setState({
                show: !show
            })
        }
    
    render() {
        return (
            <div className='App'>
                <span>press the button</span> <br />
            <button onClick ={()=> this.showIt()}>Toggel</button>
           <br />
           {this.state.show && <Person />}
            </div>
        );
    }
}
class Person extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         fullName: 'Khaled Chebil',
         bio: 'This is your bio',
         imgSrc:  require( "../pic1.jpg" ),
        };
       }
       
    render() {
        const {fullName, bio, imgSrc} = this.state
        return (
            <div>
                <span>fullName: {fullName} </span> <br/>
                <span>bio: {bio}</span> <br/>
                <span> <img src={imgSrc}  alt='this is the one'/> </span> <br/>
                <span>Profession: Student</span> <br/>
          


            </div>
        )
    }
}

export default Newone;