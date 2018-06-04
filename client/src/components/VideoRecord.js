        import { Link } from 'react-router-dom'
        import axios from 'axios'
        import styled from 'styled-components'
        import React, { Component}  from 'react';



        const Vids = styled.div`
        background: url("http://media.idownloadblog.com/wp-content/uploads/2015/09/iPhone-6s-3D-Touch-technology-001.jpg");
        border: 1px solid black;
        height: 100vh;
        width: 100vw;
        box-shadow: inset 0 0 5em 1em #000;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;   

        `
        const Text = styled.div`
        color: rgb(230, 230, 230);
        text-align: center;

        `


        class VideoRecord extends Component {
            state = {
            users: []
            }
        
            // getAllUsers = () => {
            //   axios.get('localhost:3001/api/users').then(res => {
            //     this.setState({users: res.data})
            //   })
            // }
            
            render () {
            return (
                <Vids>
                <div>
                    <Text>
                    <h1>Borndua</h1>
                    <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} placeholder="Brand" name="name"  />
                    <input onChange={this.handleChange} placeholder="Picture" name="picture" />
                    <input type='submit' value= "New Car 🚘"/>
                    </form>
                    </Text>
                </div>
                </Vids>
            )
            }
        }
        
        export default VideoRecord