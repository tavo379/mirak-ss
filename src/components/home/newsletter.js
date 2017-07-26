import Rimp from 'rimp'
import React, { Component } from 'react';

export default class Newsletter extends Component{
  render(){
    return(
      <Rimp
        buttonValue={`ENVIAR`}
        buttonStyles={`btn text-md-right`}
        placeholder={`email`}
        containerStyles={`newsletter__form`}
        completeMessage={`Gracias te enviaremos un mensaje de confirmacion`}
        mailChimpUrl="//peerclub.us15.list-manage.com/subscribe/post?u=8f2070cc6fe600bff52a92d19&amp;id=381d4f7536"
       />
    )
  }
}
