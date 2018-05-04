import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'

const AllContainer = styled.body`
 background-color: rgb(21, 141, 165);
 box-shadow: inset 0 0 5em 1em #000;

`

const ProfileContainer = styled.div`
 background-color: rgb(21, 141, 165);
border: 5px solid black;
height: 30.5vh;
width: 100vw;
font-size:40px;
font-family: cursive;
box-shadow: inset 0 0 5em 1em #000;
text-align: center;
text-decoration-color: black;
`


class BrandProfile extends Component {
    state = {
        brand: {},
        models: [],
        isBrandDeleted: false

    };
    componentDidMount() {
        console.log('Lamborghini')
        const { brandId } = this.props.match.params
        axios.get(`/api/brands/${brandId}`)
            .then(response => {
                console.log('axios respons', response.data)
                this.setState({
                    brand: response.data,
                    models: response.data.models

                })
            })
    }
    deleteBrand = (brandsId) => {
        console.log("axios delete")
        axios.delete(`/api/brands/${this.state.brand._id}`)
          .then((response) => {
            console.log(response)
            this.setState({isBrandDeleted: true})
          })

      }
      updateIdea = (brand) => {
        console.log("UPDATING brand IN DB")
        console.log("brand Id being Updated", this.state.user._id)
        axios.patch(`/api/brands/${this.state.brand._id}`, { brand })
          .then(res => {
            this.setState({ brand: res.data.brand})
          })
      }

      
    render() {
        if(this.state.isBrandDeleted) return (<Redirect to={'/show'} />)

        const modeler = this.state.models.map((model) => {
            console.log("Model features", model.features)
            const features = model.features.map((feature) => {
                return (
                    <div>
                        <div>{feature.title}</div>
                        <div>{feature.description}</div>
                        
                    </div> 
                    )
            })
            return (
                <div>
                    <AllContainer>
                    <div>
                    <ProfileContainer>
                    {model.name}
                        {model.year}
                        </ProfileContainer>
                    </div>
                    <ProfileContainer>
                    {features}
                    </ProfileContainer>
                    </AllContainer>
                </div>

            )
        })

        return (
            <div>
                <AllContainer>
                <ProfileContainer>
                <p>{this.state.brand.name}</p>
                {modeler}
                <ProfileContainer>
                <img src = {this.state.brand.picture}/>
                </ProfileContainer>
                <button
                onClick={() => { this.deleteBrand(this.state.brand._id) }}>
                    Delete this Profile
                    </button>
                    <form>          
                <button
                    onclick={this.onEdit}>
                    Edit
                    </button>
                    </form>
                    </ProfileContainer>
                    </AllContainer>
            </div>
        )
    }
        
    }        





export default BrandProfile