import React, {Component} from 'react';

class Students extends Component
{
constructor(){
    super();
    this.state={
        Students:[]
    }
}

async componentDidMount(){
    const res =await fetch('/api/student');
    const data = await res.json();
    this.setState(
        {
           Students : data 
        }
    )
}

 render()  
 return(){

 }
 

}

export default Students