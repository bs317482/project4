import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

const ShowContainer = styled.div`
background-color: rgb(21, 141, 165);
border: 5px solid black;
height: 30.5vh;
width: 100vw;
font-size:40px;
font-family: cursive;
.circle:hover
{
        border-radius:50%;
}
` 
const FooterContainer = styled.div`

` 
const MeButton = styled.button`
background-color: rgb(21, 141, 165);
width: 100vw;
height: 5.5vh;
font-size:30px;
font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
:hover {
  background-color: green;  
}
`

class Show extends Component {
    state = {
      brands:[],
    }

  componentDidMount() {
    console.log('MOUNTED')
    axios.get(`api/brands/`)
    .then(response => {
      console.log(response.data)
      this.setState({
        brands: response.data,
      })
    })
  }

  createBrand =() => {

  }

  render() {
    console.log("rendered")
    const brander =this.state.brands.map ((brand) => {
    return (
      <div>
      <ShowContainer>
      <div>
      <Link to={`/show/brand/${brand._id}`}>
      <p>{brand.name}</p>
      </Link>
      </div>
      </ShowContainer>
      </div>
      

    )
  })
  return (
    <div>
    {brander}
    <FooterContainer>
    <footer><MeButton>CREATE YOUR DREAM CAR!</MeButton></footer>
    </FooterContainer>
    </div>
  )
  }
}


export default Show
