import React, { Component } from 'react';

function withValueAnimation(FOC) {
  return class WithValueAnimation extends Component {
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
      const newProps = {
        ...this.props,
        renderValue: this.state.value,
      };

      return (
        <FOC {...newProps} />
      )
    }
  }
}

export default withValueAnimation;