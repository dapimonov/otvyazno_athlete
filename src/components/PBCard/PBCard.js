import React, { Component } from 'react';
import './PBCard.scss';


class PBCard extends Component {
  render() {
    const {results} = this.props;

    return (
      <div className='pb-card-component'>
        <h3 className='card-header'>Личные рекорды</h3>
        {
          results.map((current, i) => {
            return (
              <div key={i} className='pb-item'>
                <span className='grey-item'>{current.discipline}</span>
                <span className='grey-item'>{current.result}</span>
                <span>{current.event}</span>
                <hr/>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default PBCard;