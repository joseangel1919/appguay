import React, { useContext, useState } from 'react'
import Button from '@material-ui/core/Button';
import {ColorContext} from '../../context/ColorContext';
import './Product.css'

function Product(props) {
    const ctx = useContext(ColorContext); // Context
    const [data, setdata] = useState({
        brand:"Fictizia S.A",
        url:"https://ep01.epimg.net/elcomidista/imagenes/2017/07/05/articulo/1499278653_525806_1499279334_noticia_normal.jpg"
   }) // estado

    let {name,price,brand,url} = props.details //Destructuring
    return (
        <section>
        <div>
            <h3>OFERTA</h3>
            <p>Precio: {price} €</p>
            <p>Marca: { brand || data.brand }</p>
            <img src={url || data.url} className="img" alt="" />
        </div>
        <Button variant="contained" color="secondary" onClick={props.remove}>Borrar</Button>
        {/* Botón con Context. Descomentar para ver: */}
        {/* <button className="button" onClick={props.remove} style={{ backgroundColor: ctx.color }}>Borrar</button> */}
    </section>
    )
}

export default Product