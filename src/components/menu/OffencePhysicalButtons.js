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
      <button className='1'>Slash</button>
      <button className='2'>Stab</button>
      <button className='back'>{'<<'}</button>
      </div>
    )
  }
}
