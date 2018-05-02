import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

const ShowContainer = styled.div`
background-color: rgb(21, 141, 165);
border: 5px solid black;
height: 32.5vh;
width: 100vw;
font-size:40px;
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

  render() {
    console.log("rendered")
    const brander =this.state.brands.map ((brand) => {
    return (
      <ShowContainer>
      <div>
      <Link to={`/show/brand/${brand._id}`}>
      <p>{brand.name}</p>
      </Link>
      </div>
      </ShowContainer>
    )
  })
  return brander
  
  }
}


export default Show
