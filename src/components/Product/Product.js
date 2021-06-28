import React, { Component } from 'react'

export default class Product extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            brand:"Fictizia s.a"
             
        }
    }
    
    render() {

        let {name,price,brand} = this.props.details //destructuring
        console.log(name)
        return (
            <section>
                <h3>OFERTA</h3>
                <p>Producto:{name}</p>
                <p>Precio:{price} </p>
                <p>Marca: { brand || this.state.brand}</p>
                
            </section>
        )
    }
}
