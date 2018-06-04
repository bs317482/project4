import React, { Component } from 'react'
import styled from 'styled-components'
// import Show from './Show';
import {Link} from 'react-router-dom'
import VideoRecord from './VideoRecord'


const MainLandingContainer = styled.div`
/* background-color: rgb(21, 141, 165); */
border: 1px solid black;
height: 100vh;
width: 100vw;
/* box-shadow: inset 0 0 5em 1em #000; */
background-image: url("https://media.giphy.com/media/2A1IfXf8aFo1doWYrE/giphy.gif");
background-repeat: no-repeat;
background-position: center center;
background-size: cover;


` 
const MyButton = styled.button`
position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    font-size: 96px;
    border: none;
    cursor: pointer;
    border-radius: 1005px;
    text-align: center;
    padding: 20px;
    border: 10px;
    border-radius: 50%;


    :hover {
    box-shadow: white;
    background-color:rgb(255, 77, 77);
    }
`


// Something
class Landing extends Component {
  render() {
    return (
        <MainLandingContainer>
          <header className="para" >COME EAT !</header>
          <Link to="/show"><MyButton></MyButton></ Link>

      </MainLandingContainer>
    )
  }
}

export default Landing