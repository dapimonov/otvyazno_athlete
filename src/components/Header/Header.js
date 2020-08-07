import React, { Component } from 'react';
import { ReactComponent as Russia } from '../../svg/russia.svg';
import { ReactComponent as Gazprom } from '../../svg/gazprom.svg';
import './Header.scss';


class Header extends Component {
  render() {
    return (
      <header className='header-component'>
        <div className='top-header'>
          <div className='logos-wrapper'>
            <Russia />
            <span className='vertical-line' />
            <Gazprom />
          </div>
          <span>Евгений Гараничев</span>
        </div>
        <hr style={{borderColor: '#1D86C7'}}/>
        <hr style={{borderColor: '#FCAB21'}}/>
        <hr style={{borderColor: '#009F44'}}/>
        <hr style={{borderColor: '#EC213E'}}/>
      </header>
    )
  }
}

export default Header;