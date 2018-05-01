import React, { Component } from 'react'
import styled from 'styled-components'

const MainLandingContainer = styled.div`
background-color: rgb(21, 141, 165);
border: 1px solid black;
height: 100vh;
width: 100vw;
` 
const MyButton = styled.button`
position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    background-color: #f1f1f1;
    color: black;
    font-size: 16px;
    padding: 16px 30px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    text-align: center;
    :hover {
        background-color: black;
    color: white;
    }
`


// Something
class Landing extends Component {
  render() {
    return (
        <MainLandingContainer>
          <header className="para" >Bernard's Car Collection</header>
            <MyButton>Welcome</MyButton>
      </MainLandingContainer>
    )
  }
}

export default Landing