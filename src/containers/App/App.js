import React, {Component} from 'react';
import './App.scss';
import Header from "../../components/Header/Header";
import StatsCard from "../../components/StatsCard/StatsCard";
import RecoveryCard from "../../components/RecoveryCard/RecoveryCard";
import RisksCard from "../../components/RisksCard/RisksCard";
import PBCard from "../../components/PBCard/PBCard";
import CompetitionCard from "../../components/CompetitionCard/CompetitionCard";


class App extends Component {
  render() {
    const stats = [
      {
        name: 'Аэробные',
        quality: 'good',
        value: 5,
        total: 5,
        parameters: [
          {name: 'МПК', value: '53.9 мл/кг', quality: 'bad'},
          {name: 'ЧСС max', value: '190 уд/мин', quality: 'good'},
          {name: 'ПАНО/МПК', value: '46%', quality: 'normal'},
          {name: 'ЧСС при ПАНО', value: '200 уд/мин', quality: 'normal'},
          {name: 'Экономичность', value: '79', quality: 'normal'},
        ],
      },
      {
        name: 'Анаэробные',
        quality: 'normal',
        value: 4,
        total: 5,
        parameters: [
          {name: 'Пиковая мощность', value: '286 Вт/кг', quality: 'bad'},
          {name: 'Анаэробная мощность', value: '286 Вт/кг', quality: 'good'},
          {name: 'Анаэробная емкость', value: '92', quality: 'good'},
        ],
      },
      {
        name: 'Скоростно-силовые',
        quality: 'good',
        value: 5,
        total: 5,
        parameters: [
          {name: 'Взрывная сила', value: '45.6/48.2 см', quality: 'good'},
          {name: 'Ускорение', value: '39', quality: 'bad'},
          {name: 'Линейная скорость', value: '75', quality: 'good'},
          {name: 'Упругость', value: '65', quality: 'normal'},
        ],
      },
      {
        name: 'Силовые',
        quality: 'good',
        value: 5,
        total: 5,
        parameters: [
          {name: 'Сила рук – кисть', value: '35/33 кг', quality: 'good'},
          {name: 'Сила ног – Сгибание колена', value: '1.13 Нм/кг', quality: 'good'},
          {name: 'Сила ног – Разгибание колена', value: '1.13 Вт/кг', quality: 'good'},
          {name: 'Становая тяга', value: '145 кг', quality: 'good'},
        ],
      },
      {
        name: 'Моторный контроль',
        quality: 'normal',
        value: 3,
        total: 5,
        parameters: [
          {name: 'Вертикальная устойчивость – статика', value: '35', quality: 'bad'},
          {name: 'Вертикальная устойчивость – динамика', value: '93', quality: 'good'},
          {name: 'Дифференцировка мышечных усилий', value: '65', quality: 'normal'},
          {name: 'Нервно-мышечное согласование', value: '49', quality: 'normal'},
          {name: 'Тремор рук', value: '78', quality: 'normal'},
          {name: 'Антиципация', value: '62', quality: 'normal'},
        ],
      },
      {
        name: 'Психология',
        quality: 'bad',
        value: 2,
        total: 5,
        parameters: [
          {name: 'Уровень притязаний', value: '22', quality: 'bad'},
          {name: 'Зрительное внимание', value: '26', quality: 'bad'},
          {name: 'Стрессоустойчивость', value: '46', quality: 'normal'},
          {name: 'Тревожность – Лич./Сит.', value: '30', quality: 'bad'},
          {name: 'Пространственное мышление', value: '56', quality: 'normal'},
          {name: 'Оперативная память', value: '21', quality: 'bad'},
        ],
      },
    ];
    const recovery = {
      morningHr: 35,
      restHr: 45,
      exerciseHr: 150,
      recoveryIndex: 88,
      restLevel: 29,
      bioChemIndex: 62,
    };
    const risks = [
      {name: 'Двигательные', value: 26},
      {name: 'Функциональные', value: 100},
    ];
    const pbs = [
      {discipline: 'Бег 100 м', result: '9.97', event: 'Чемпионат мира Доха 2019'},
      {discipline: 'Бег 30 м', result: '2.97', event: 'Чемпионат мира Доха 2019'},
      {discipline: 'Бег 300 м', result: '39.55', event: 'Чемпионат мира Сочи 2018'},
      {discipline: 'Бег 21.1 км', result: '59:37', event: 'Омский марафон 2018'},
      {discipline: 'Бег 42.2 км', result: '2:09:02', event: 'Саратовский марафон 2015'},
    ];
    const competitions = [
      {date: '20.02.2019', event: 'ЧМ Доха-2019', discipline: 'Спринт', place: 2, result: '140 points', isPB: false},
      {date: '22.02.2019', event: 'ЧМ Доха-2019', discipline: 'Бег 42.2 км', place: 3, result: '02:12:25', isPB: false},
      {date: '24.02.2019', event: 'ЧМ Доха-2019', discipline: 'Бег 100 м', place: 14, result: '11.98', isPB: false},
      {date: '21.04.2019', event: 'ЧР Москва-2019', discipline: 'Спринт', place: 4, result: '179 points', isPB: true},
      {date: '05.05.2019', event: 'ЧМ Омск-2019', discipline: 'Бег 100 м', place: 1, result: '9.97', isPB: false},
    ];

    return (
      <div className="App">
        <Header/>
        <div className='app-grid'>
          <div className='header-cell'><h2>Текущее состояние</h2></div>
          <div className='header-cell'><h2>Показатели подготовленности</h2></div>
          <div className='header-cell'><h2>Соревнования</h2></div>
          <div className='condition-grid'>
            <div className='info-cell'>
              ...
            </div>
            <div className='info-cell'>
              <RisksCard
                parameters={risks}
              />
            </div>
            <div className='info-cell'>
              <RecoveryCard
                parameters={recovery}
              />
            </div>
          </div>
          <div className='stats-grid info-cell'>
            {
              stats.map((current, i) => {
                return (
                  <div key={i} className='card'>
                    <StatsCard
                      name={stats[i].name}
                      value={stats[i].value}
                      total={stats[i].total}
                      quality={stats[i].quality}
                      parameters={stats[i].parameters}
                    />
                  </div>
                )
              })
            }
          </div>
          <div className='competition-grid'>
            <div className='info-cell'>
              <CompetitionCard
                results={competitions}
              />
            </div>
            <div className='info-cell'>
              <PBCard
                results={pbs}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
