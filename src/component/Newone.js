import React from 'react'
import '../App.css'
// import pic1 from '../pic1.jpg'

class Newone extends React.Component {

        state = { 
         show: false, 
         fullName: 'Khaled Chebil',
         bio: 'This is your bio',
         imgSrc:  require( "../pic1.jpg" ),
           };
        showIt = this.showIt.bind(this)
            

        showIt() {
            const {show} = this.state
            this.setState({
                show: !show
            })
        }
    
    render() {
        const {fullName, bio, imgSrc} = this.state
        return (
            <div className='App'>
                <span>press the button</span> <br />
            <button onClick ={()=> this.showIt()}>Toggel</button>
           <br />
           {this.state.show && 
           <div>
                <span>fullName: {fullName} </span> <br/>
                <span>bio: {bio}</span> <br/>
                <span> <img src={imgSrc}  alt='this is the one'/> </span> <br/>
                <span>Profession: Student</span> <br/>
            </div>
               }
            </div>
        );
    }
}



export default Newone;
