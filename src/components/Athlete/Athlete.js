import React, { Component } from 'react';
import './Athlete.scss';


class Athlete extends Component {
  render() {
    const {parameters, photo} = this.props;

    return (
      <div className='athlete-component'>
        <div className='photo-wrapper'>
          <img src={photo} alt="athlete" />
        </div>
        <div className='text-wrapper'>
          <h1>{parameters.secondName}<br/>{parameters.name}</h1>
          <p><span><strong>{parameters.sport}</strong></span><span><strong>{parameters.dateOfBirth}</strong></span></p>
          <p><span>Рост: <strong>{parameters.height}</strong></span><span>Масса тела: <strong>{parameters.weight}</strong></span></p>
        </div>
      </div>
    )
  }
}

export default Athlete;