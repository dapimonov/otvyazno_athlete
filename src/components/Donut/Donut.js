import React, { Component } from 'react';
import './Donut.scss';
import withValueAnimation from "../../hocs/WithValueAnimationHOC";


class Donut extends Component {
  calculateArc = (strokeWidth, circleRadius, cx, cy, value, total) => {
    const alpha = (strokeWidth/2)/circleRadius; // Угол отклонения, связанный с обводкой

    let arcParameters = [
      'M',
      `${cx - circleRadius*Math.sin(alpha)}`, // абсцисса начала дуги
      `${cy + circleRadius * Math.cos(alpha)}`, // ордината начала дуги
      'A',
      `${circleRadius}`, // радиусы эллипса
      `${circleRadius}`, // радиусы эллипса
      '0', // угол поворота дуги
      Math.sin(2*Math.PI*value/total - 2*alpha) > 0 ? '0' : '1', // вывод меньшей или большей части дуги
      '1', // отрисовка по часовой
      2*Math.PI*value/total - 2*alpha > 0 ? `${cx - circleRadius*Math.sin(2*Math.PI*value/total - alpha)}` : `${cx - circleRadius*Math.sin(alpha)}`, // абсцисса конца дуги
      2*Math.PI*value/total - 2*alpha > 0 ? `${cy + circleRadius*Math.cos(2*Math.PI*value/total - alpha)}` : `${cy + circleRadius * Math.cos(alpha)}`, // ордината конца дуги
    ];

    return arcParameters.join(' ');
  };

  render() {
    const {color, total, renderValue} = this.props;
    const strokeWidth = 2;
    const circleRadius = 14;
    const cx = 15;
    const cy = 15;

    return (
      <div className='donut-component'>
        <svg width='100%' height='100%' viewBox='0 0 30 30' className='donut'>
          <circle className='donut-ring' cx={cx} cy={cy} r={circleRadius} fill='transparent' stroke='#ECEBF6' strokeWidth={strokeWidth}/>
          {
            (renderValue < total && renderValue > 0) &&
            <path d={this.calculateArc(strokeWidth, circleRadius, cx, cy, renderValue, total)} stroke={color} fill='transparent' strokeWidth={strokeWidth} strokeLinecap='round'/>
          }
          {
            renderValue === total &&
            <circle className='donut-ring-complete' cx={cx} cy={cy} r={circleRadius} fill='transparent' stroke={color} strokeWidth={strokeWidth}/>
          }
          <text x={cx} y={cy} alignmentBaseline='central' textAnchor='middle' fill={color}>{renderValue}</text>
        </svg>
      </div>
    )
  }
}

export default withValueAnimation(Donut);