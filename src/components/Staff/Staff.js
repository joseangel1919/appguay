import axios from 'axios';

import React, { Component } from 'react';
import './Staff.css';
import PokemonApi from '../PokemonApi'

class Staff extends Component {
  constructor(props) {
    super(props);
    this.state = { pokeLista: [] }
    // Event binding (Bindear eventos)
    console.log('CONSTRUCTOR')
  }

  async componentDidMount() {
    
    setTimeout(async ()=>{

    const res = await axios.get('https://pokeapi.co/api/v2/pokemon');
    
    this.setState({
      pokeLista: res.data.results
    })
    console.log('componentDidMount');
  },2000);}

  render() {
    console.log('RENDER')
    return (
      <PokemonApi lista={this.state.pokeLista}></PokemonApi>
    );
  }
}

export default Staff;