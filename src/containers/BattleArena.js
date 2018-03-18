import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Player from '../components/Player'
import HealthBar from '../components/HealthBar'

//STYLING
import './BattleArena.css'

//CLASSES//
const cleric = require ('../img/classes/cleric.gif')
const fighter = require ('../img/classes/fighter.gif')


export default class BattleArena extends PureComponent {
  static propTypes = {
    background: PropTypes.string.isRequired,
  }

CalulatePercentage = (amountOfDamage) => {
  return 100-amountOfDamage
}

  render() {
    return (
      <div className={this.props.background}>
      <HealthBar side='left' percentage={`p${this.CalulatePercentage(2)}`}/>
      <Player side='left' imgSrc={fighter}/>
      <HealthBar side='right' percentage={`p${this.CalulatePercentage(20)}`}/>
      <Player side='right' imgSrc={cleric}/>
      </div>
    )
  }
}
