import React, { Component } from 'react'
import './Product.css'

export default class Product extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            brand:"Fictizia s.a",
             
        }
    }
    
    render() {

        let {name,price,brand,url} = this.props.details //destructuring
        console.log(name)
        return (
            <section>
                <div>
                <h3>OFERTA</h3>
                <p>Producto:{name}</p>
                <p>Precio:{price} </p>
                <p>Marca: { brand || this.state.brand}</p>
                <img src={url || this.state.url } alt="" />
                </div>
                <button onClick={this.props.remove}>Borrar</button>
            </section>
        )
    }
}
