import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

//STYLING
import './MenuButtons.css'

export default class OffenceButtons extends PureComponent {
  static propTypes = {
    stateChange: PropTypes.func.isRequired,
  }

  render() {
    return (
      <div className='button-container'>
      <button className='physical'>Physical</button>
      <button className='spell'>Spell</button>
      <button className='back' onClick={_ => this.props.setMenu('root')}>{'<<'}</button>
      </div>
    )
  }
}
