import React, { Component } from 'react';
import { ReactComponent as MedalFirst } from '../../svg/medal_first.svg';
import { ReactComponent as MedalSecond } from '../../svg/medal_second.svg';
import { ReactComponent as MedalThird } from '../../svg/medal_third.svg';
import { ReactComponent as MedalPB } from '../../svg/medal_pb.svg';
import './CompetitionCard.scss';


class CompetitionCard extends Component {
  render() {
    const {results} = this.props;

    return (
      <div className='competition-card-component'>
        <h3 className='card-header'>Последние результаты</h3>
        {
          results.map((current, i) => {
            return (
              <>
                <div key={i} className='competition-item'>
                  <div className='numbers-wrapper'>
                    <p>
                      <span>{current.date}</span>
                      <span>{current.event}</span>
                      <span>{current.discipline}</span>
                    </p>
                    <p>
                      <span className='grey-item'>{current.place} место</span>
                      <span className='grey-item'>{current.result}</span>
                      {current.isPB && <span className='grey-item'>Личный рекорд</span>}
                    </p>
                  </div>
                  <div className='medal-wrapper'>
                    {current.place === 1 && <MedalFirst/>}
                    {current.place === 2 && <MedalSecond/>}
                    {current.place === 3 && <MedalThird/>}
                    {current.isPB && <MedalPB/>}
                  </div>
                </div>
                {i !== results.length-1 && <hr/>}
              </>
            )
          })
        }
      </div>
    )
  }
}

export default CompetitionCard;