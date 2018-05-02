import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

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
      <div>
      <Link to={`/show/brand/${brand._id}`}>
      <p>{brand.name}</p>
      </Link>
      </div>
    )
  })
  return brander
  
  }
}


export default Show
