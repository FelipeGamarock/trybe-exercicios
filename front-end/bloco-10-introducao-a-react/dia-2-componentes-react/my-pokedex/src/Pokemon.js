import React from 'react';

class Pokemon extends React.Component {
  render(){
    const { pokemon: { name, type, averageWeight: {value, measurementUnit}, image} } = this.props
    return (
      <li>
        <h2>{name}</h2>
        <p>{type}</p>
        <p>{`Peso: ${value} ${measurementUnit}`}</p>
        <img src={ image } alt={ `${name} sprite` }></img>
      </li>
    );
  }
}

export default Pokemon;