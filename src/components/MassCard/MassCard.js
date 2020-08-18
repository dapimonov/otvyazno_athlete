import React, { Component } from 'react';
import './MassCard.scss';
import Donut from "../Donut/Donut";


class MassCard extends Component {
  render() {
    const {parameters} = this.props;
    const total = parameters.map(item => item.value).reduce((a, b) => a + b, 0);

    return (
      <div className='mass-card-component'>
        <h3 className='card-header'>Состав тела</h3>
        <div className='info-wrapper'>
          <Donut
            data={parameters}
          />
          <ul>
            {
              parameters.map((current, index) => {
                return (
                  <li key={index}>
                    <div className='circle' style={{backgroundColor: current.color}}/><span>{current.name} {current.value} кг ({(current.value*100/total).toFixed(1)} %)</span>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default MassCard;