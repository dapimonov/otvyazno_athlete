import React, { Component } from 'react';
import './RecoveryCard.scss';
import Bar from "../Bar/Bar";


class RecoveryCard extends Component {
  percentageColorPicker = (value, total) => {
      if (value/total*100 >= 80) {
        return '#43C79F'
      }
      else if (value/total*100 >= 30) {
        return '#FFAF02'
      }
      else {
        return '#D03047'
      }
  };

  valueColorPicker = (value, bad, good) => {
    if (value >= bad) {
      return '#D03047'
    }
    else if (value <= good) {
      return '#43C79F'
    }
    else {
      return '#FFAF02'
    }
  };

  render() {
    const {parameters} = this.props;

    return (
      <div className='recovery-card-component'>
        <h3 className='card-header'>Контроль восстановления</h3>
        <div className='numbers-wrapper'>
          <div>
            <p className='hr-value' style={{color: this.valueColorPicker(parameters.morningHr, 60, 40)}}>{parameters.morningHr}</p>
            <p className='hr-name'>Пульс утром</p>
          </div>
          <div>
            <p className='hr-value' style={{color: this.valueColorPicker(parameters.restHr, 65, 45)}}>{parameters.restHr}</p>
            <p className='hr-name'>Пульс в покое</p>
          </div>
          <div>
            <p className='hr-value' style={{color: this.valueColorPicker(parameters.exerciseHr, 150, 120)}}>{parameters.exerciseHr}</p>
            <p className='hr-name'>Пульс после нагрузки</p>
          </div>
        </div>
        <p className='parameter-name'>Индекс восстановления</p>
        <Bar
          color={this.percentageColorPicker(parameters.recoveryIndex, 100)}
          animation={true}
          numbers={true}
          total={100}
          value={parameters.recoveryIndex}
        />
        <p className='parameter-name'>Уровень спокойствия</p>
        <Bar
          color={this.percentageColorPicker(parameters.restLevel, 100)}
          animation={true}
          numbers={true}
          total={100}
          value={parameters.restLevel}
        />
        <p className='parameter-name'>Биохимический показатель</p>
        <Bar
          color={this.percentageColorPicker(parameters.bioChemIndex, 100)}
          animation={true}
          numbers={true}
          total={100}
          value={parameters.bioChemIndex}
        />
      </div>
    )
  }
}

export default RecoveryCard;