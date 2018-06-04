import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import NewBrandForm from './NewBrandForm';

const ShowContainer = styled.div`
background-image: url("https://cdn.wallpapersafari.com/92/91/vsQD78.jpg");
border: 5px solid black;
height: 30.5vh;
width: 100vw;
font-size:40px;
font-family: cursive;
box-shadow: inset 0 0 5em 1em #000;
text-align: center;
text-decoration-color: black;

:hover
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
const Head = styled.header`
text-align: center;
color: black;
font-family: Luminari;
background-color:rgb(21, 141, 165);
font-size:30px;
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
            <FooterContainer>
              <footer><Link to="/NewBrandForm"><MeButton>What's your dish?</MeButton></Link></footer>
            </FooterContainer>
          </div>
        
      )
    }
}


  export default Show
