import React, { Component } from 'react';
import './RisksCard.scss';
import Donut from "../Donut/Donut";


class RisksCard extends Component {
  percentageColorPicker = (value, total) => {
    if (value/total*100 >= 80) {
      return '#D03047'
    }
    else if (value/total*100 >= 30) {
      return '#FFAF02'
    }
    else {
      return '#43C79F'
    }
  };

  render() {
    const {parameters} = this.props;

    return (
      <div className='risks-card-component'>
        <h3 className='card-header'>Факторы риска</h3>
        <div className='donuts-wrapper'>
          {
            parameters.map((current, i) => {
              return (
                <div key={i} className='donut'>
                  <Donut
                    color={this.percentageColorPicker(current.value, 100)}
                    value={current.value}
                    total={100}
                    animation={true}
                  />
                  <p>{current.name}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default RisksCard;