import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
 import  styled from 'styled-components'
 import axios from 'axios'

 const Create = styled.div`
 text-align: center;
 position: absolute;
 width: 400vh; 
 height: 100vw;
    box-shadow: inset 0 0 5em 1em #000;
    background-repeat: no-repeat;
    background-size: cover;
    background: url("https://i.ytimg.com/vi/mcsTWPSMDtg/maxresdefault.jpg");
}
 `
    const Texter = styled.div`
    position: absolute;
     opacity: 0.9;
    left: 480px;
    top: 300px;
    box-sizing: border-box;
    border: none;

 `


class NewBrandForm extends Component {
    state = {
        name: '',
        picture: '',
        isBrandCreated: false
    }

    handleChange = (event) => {
        const name = event.target.name
        const newState = {...this.state}
        newState[name] = event.target.value
        this.setState(newState)
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        console.log("handle submit works")
        const payload = {
          name: this.state.name,
          picture: this.state.picture,
        }
        console.log('Payload from new brand: ', payload)
        await axios.post('/api/brands/', payload)
        await this.setState({isBrandCreated: true})
      }


 render(){
     if(this.state.isBrandCreated) return (<Redirect to={'/show'} />)
 return (
     <Create>
     <div>
         <Texter>
         <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} placeholder="Food" name="name"  />
            <input onChange={this.handleChange} placeholder="Picture" name="picture" />
            <input type='submit' value= "New Food "/>
        </form>
<h1>Eat Healthy today!</h1>
</Texter>
</div>
  </Create>
    
 )
}
}
export default NewBrandForm