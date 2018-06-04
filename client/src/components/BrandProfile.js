import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'

const AllContainer = styled.body`
 background-image: url("https://previews.123rf.com/images/monticello/monticello1602/monticello160200044/52141462-composition-with-organic-food-isolated-on-white-background-balanced-diet.jpg");
;
 box-shadow: inset 0 0 5em 1em #000;

`

const PicContainer = styled.div`
border-style: solid;
border-width: 10px;
background-image: url("https://previews.123rf.com/images/monticello/monticello1602/monticello160200044/52141462-composition-with-organic-food-isolated-on-white-background-balanced-diet.jpg");
;
box-shadow: inset 0 0 5em 1em #000;


img {
    padding: 20px;
    border: 10px;
    border-radius: 50%;
    
}

`

const ProfileContainer = styled.div`
background-image: url("https://previews.123rf.com/images/monticello/monticello1602/monticello160200044/52141462-composition-with-organic-food-isolated-on-white-background-balanced-diet.jpg");
/* border: 5px solid black; */
height: 30.5vh;
width: 100vw;
font-size:40px;
font-family: cursive;
/* box-shadow: inset 0 0 5em 1em #000; */
text-align: center;
text-decoration-color: black;
/* border-radius: 25; */
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

      handleChange = (event) => {
        const name = event.target.name
        const brand = {...this.state.brand}
        brand[name] = event.target.value
        this.setState(brand)
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
                <PicContainer>
                <img src = {this.state.brand.picture}/>
                </PicContainer>
                <button
                onClick={() => { this.deleteBrand(this.state.brand._id) }}>
                    Delete this Profile
                    </button>
                    <form onSubmit={this.handleSubmit}>
                        <input onChange={this.handleChange} placeholder="Brand" name="name"  value={this.state.brand.name}/>
                        <input onChange={this.handleChange} placeholder="Picture" name="picture" value={this.state.brand.picture}/>
                        <input type='submit' value= "New food"/>
                    </form>
                    </ProfileContainer>
                    </AllContainer>
            </div>
        )
    }
        
    }        





export default BrandProfile