import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
 import  styled from 'styled-components'

 const Create = styled.div`
 text-align: center;
 position: absolute;
 width: 1445px; 
 height: 800px;
    box-shadow: inset 0 0 5em 1em #000;
    background: url("https://i.imgur.com/JPdEhGB.jpg");
}
 `
 const Texter = styled.div`
 position: absolute;
    left: 480px;
    top: 300px;
   :-ms-input-placeholder:105px;

 `

class NewBrandForm extends Component {
 render(){
 return (
     <Create>
     <div>
         <Texter>
<input placeholder="Brand" />
<input placeholder="Model" />
<input placeholder="Features" />
<button>New Car 🚘 </button>
<h1>What's In Your Car Vault?</h1>
</Texter>
</div>
  </Create>
    
 )
}
}
export default NewBrandForm