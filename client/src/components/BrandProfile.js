import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'



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
                    <div>{model.name}
                        {model.year}
                    </div>
                    {features}
                </div>

            )
        })

        return (
            <div>
                <p>{this.state.brand.name}</p>
                <p>{this.state.brand.picture}</p>
                {modeler}
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
            </div>
        )
    }
        
    }        





export default BrandProfile