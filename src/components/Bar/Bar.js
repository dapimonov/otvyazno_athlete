import React, { Component } from 'react';
import './Bar.scss';
import withValueAnimation from "../../hocs/WithValueAnimationHOC";


class Bar extends Component {
  render() {
    const {color, total, renderValue, numbers} = this.props;

    return (
      <div className='bar-component'>
        <div className='bar'>
          <div
            className='bar-value-area'
            style={{
              backgroundColor: color,
              width: renderValue > 0 ? `${renderValue*100/total}%` : '4px'
            }}
          >
          </div>
        </div>
        {numbers &&
          <div className='numbers'>
            <div
              className='dynamic-numbers'
              style={{
                width: renderValue > 0 ? `${renderValue*100/total}%` : 'fit-content'
              }}
            >
              <span
                className='value-number'
                style={{
                  color: color,
                }}
              >
                {renderValue}
              </span>
            </div>
            <div className='static-numbers'>
              <span className='static-number'>0</span>
              <span className='static-number'>{total}</span>
            </div>
          </div>
        }
      </div>
    )
  }
}

export default withValueAnimation(Bar);