import React, { Component } from 'react';
import './Bar.scss';


class Bar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
    };
  }

  componentDidMount() {
    this.props.animation ?
      this.valueChanger(0, this.props.value) :
      this.setState(() => ({
        ...this.state,
        value: this.props.value,
      }));
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.value !== this.props.value) {
      this.props.animation ?
        this.valueChanger(this.state.value, this.props.value) :
        this.setState(() => ({
          ...this.state,
          value: this.props.value,
        }));
    }
  }

  valueChanger = (start, finish) => {
    const step = start < finish ? this.props.total/50 : -this.props.total/20; // шаг в 5%
    let timer = setInterval(() => {
      const diff = finish - this.state.value;
      if (this.state.value !== finish) {
        this.setState({
          ...this.state,
          value: this.state.value + (Math.abs(diff) >= Math.abs(step) ? step : diff),
        })
      }
      else {
        clearInterval(timer);
      }
    }, 10);
  };

  render() {
    return (
      <div className='bar-component'>
        <div className='bar'>
          <div
            className='bar-value-area'
            style={{
              backgroundColor: this.props.color,
              width: this.state.value > 0 ? `${this.state.value*100/this.props.total}%` : '4px'
            }}
          >
          </div>
        </div>
        {this.props.numbers &&
          <div className='numbers'>
            <div
              className='dynamic-numbers'
              style={{
                width: this.state.value > 0 ? `${this.state.value*100/this.props.total}%` : 'fit-content'
              }}
            >
              <span
                className='value-number'
                style={{
                  color: this.props.color,
                }}
              >
                {this.state.value}
              </span>
            </div>
            <div className='static-numbers'>
              <span className='static-number'>0</span>
              <span className='static-number'>{this.props.total}</span>
            </div>
          </div>
        }
      </div>
    )
  }
}

export default Bar;