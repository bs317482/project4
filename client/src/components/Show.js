import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import NewBrandForm from './NewBrandForm';

const ShowContainer = styled.div`
background-image: url("https://previews.123rf.com/images/monticello/monticello1602/monticello160200044/52141462-composition-with-organic-food-isolated-on-white-background-balanced-diet.jpg");
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
background-color: black;
color: white;
height: 150px;
  width: 150px;
  border-radius: 50%;
  display: inline-block;
  position: center;
`
const Head = styled.header`
text-align: center;
color: black;
font-family: Luminari;
background-image: url("https://previews.123rf.com/images/monticello/monticello1602/monticello160200044/52141462-composition-with-organic-food-isolated-on-white-background-balanced-diet.jpg");
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
