import React, { Component } from 'react';
import './StatsCard.scss';
import Bar from "../Bar/Bar";


class StatsCard extends Component {
  render() {
    const {name, value, total, quality, parameters} = this.props;

    return (
      <div className='stats-card-component'>
        <h3 className='card-header'><span>{name}</span><span>{`${value}/${total}`}<div className={`${quality} circle`}/></span></h3>
        <Bar
          color={'#46A1DA'}
          animation={true}
          total={total}
          value={value}
        />
        <ul>
          {
            parameters.map((current, index) => {
              return (
                <li key={index}>
                  <span>{current.name}</span><span>{current.value}<div className={`${current.quality} circle`}/></span>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default StatsCard;