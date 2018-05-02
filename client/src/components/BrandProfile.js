import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


class BrandProfile extends Component {
    state = {
        brand: {},
        models: []
    }
    componentDidMount() {
        console.log('Lamborghini')
        const { brandId } = this.props.match.params
        axios.get(`/api/brands/${brandId}`)
            .then(response => {
                this.setState({
                    brand: response.data,
                    models: response.data.models
                    
                })
            })
    }
    render() {
        const modeler = this.state.models.map((model) => {
            console.log("Model features", model.features)
            const features = model.features.map((feature) => {
                return (
                    <div>
                        <div>{feature.title}</div>
                        <div>{feature.description}</div>
                    </div>)
            })
            return (
                <div>
                    <div>{model.name}</div>
                    {features}
                </div>
            )
        })

return (
            <div>
                <p>{this.state.brand.name}</p>
                {modeler}
            </div>
        )
    }

}




export default BrandProfile