import React, {Component} from 'react';
import './Donut.scss';
import withValueAnimation from "../../hocs/WithValueAnimationHOC";


class Donut extends Component {
  calculateArc = (strokeWidth, circleRadius, cx, cy, value, total, offsetAngle=0) => {
    const alpha = (strokeWidth/2)/circleRadius; // Угол отклонения, связанный с обводкой

    return [
      'M',
      `${cx - circleRadius * Math.sin(alpha + offsetAngle)}`, // абсцисса начала дуги
      `${cy + circleRadius * Math.cos(alpha + offsetAngle)}`, // ордината начала дуги
      'A',
      `${circleRadius}`, // радиусы эллипса
      `${circleRadius}`, // радиусы эллипса
      '0', // угол поворота дуги
      Math.sin(2 * Math.PI * value / total - 2 * alpha) > 0 ? '0' : '1', // вывод меньшей или большей части дуги
      '1', // отрисовка по часовой
      2 * Math.PI * value / total - 2 * alpha > 0 ? `${cx - circleRadius * Math.sin(2 * Math.PI * value / total - alpha + offsetAngle)}` : `${cx - circleRadius * Math.sin(alpha + offsetAngle)}`, // абсцисса конца дуги
      2 * Math.PI * value / total - 2 * alpha > 0 ? `${cy + circleRadius * Math.cos(2 * Math.PI * value / total - alpha  + offsetAngle)}` : `${cy + circleRadius * Math.cos(alpha + offsetAngle)}`, // ордината конца дуги
    ];
  };

  render() {
    const {color, total, renderValue, data} = this.props;
    let values, colors, valuesTotal;

    const strokeWidth = 2;
    const circleRadius = 14;
    const cx = 15;
    const cy = 15;

    if (Array.isArray(data)) {
      values = data.map(item => item.value);
      colors = data.map(item => item.color);
      valuesTotal = values.reduce((a, b) => a + b, 0);
    }

    return (
      <div className='donut-component'>
        <svg width='100%' height='100%' viewBox='0 0 30 30' className='donut'>
          <circle className='donut-ring' cx={cx} cy={cy} r={circleRadius} fill='transparent' stroke='#ECEBF6' strokeWidth={strokeWidth}/>
          {
            (renderValue < total && renderValue > 0) &&
            <path d={this.calculateArc(strokeWidth, circleRadius, cx, cy, renderValue, total).join(' ')} stroke={color} fill='transparent' strokeWidth={strokeWidth} strokeLinecap='round'/>
          }
          {
            renderValue === total &&
            <circle className='donut-ring-complete' cx={cx} cy={cy} r={circleRadius} fill='transparent' stroke={color} strokeWidth={strokeWidth}/>
          }
          {
            Array.isArray(data) &&
            <>
              {
                values.map((item, i) => {
                  const offsetAngle = i > 0 ?
                    values.slice(0, i).reduce((a, b) => a + b, 0) * 2 * Math.PI / valuesTotal :
                    0;
                  return <path d={this.calculateArc(strokeWidth, circleRadius, cx, cy, item, valuesTotal, offsetAngle).join(' ')} stroke={colors[i]} fill='transparent' strokeWidth={strokeWidth} strokeLinecap='round' key={i}/>
                })
              }
              <text x={cx} y={cy} alignmentBaseline='central' textAnchor='middle' fill={'#000000'}>{valuesTotal}</text>
            </>
          }
          <text x={cx} y={cy} alignmentBaseline='central' textAnchor='middle' fill={color}>{renderValue}</text>
        </svg>
      </div>
    )
  }
}

export default withValueAnimation(Donut);