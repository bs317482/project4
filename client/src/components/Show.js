import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import NewBrandForm from './NewBrandForm';

const ShowContainer = styled.div`
background-image: url("http://media.idownloadblog.com/wp-content/uploads/2015/09/iPhone-6s-3D-Touch-technology-001.jpg");
/* border: 5px solid black; */
height: 30.5vh;
width: 100vw;
font-size:40px;
font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
text-align: center;
text-decoration-color: white;
 `

const MeButton = styled.button`
width: 100vw;
height: 5.5vh;
font-size:30px;
font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
background-image: url("http://media.idownloadblog.com/wp-content/uploads/2015/09/iPhone-6s-3D-Touch-technology-001.jpg");
color: white;
:hover {
  background-color: green;  
}
`
const Head = styled.header`
text-align: center;
color: black;
font-family: Luminari;
background-image: url("http://media.idownloadblog.com/wp-content/uploads/2015/09/iPhone-6s-3D-Touch-technology-001.jpg");
font-size:30px;
color: white;
`

class Show extends Component {
  state = {
    brands: [],
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

  //  createBrand =() => {


  // }

  render() {
    console.log("rendered")
    const brander = this.state.brands.map((brand) => {
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
        return (
      <div>
            <Head>
              <header>Healthy foods</header>
            </Head>

            {brander}
              <Link to="/NewBrandForm"><MeButton>What's your dish?</MeButton></Link>
          </div>
        
      )
    }
}


  export default Show
