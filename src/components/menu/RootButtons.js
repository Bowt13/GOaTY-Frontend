import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

//STYLING
import './MenuButtons.css'

export default class RootButtons extends PureComponent {
  static propTypes = {
    setMenu: PropTypes.func.isRequired,
  }

  render() {
    const { setMenu } = this.props
    return (
      <div className='button-container'>
        <button className='offence' onClick={_ => this.props.setMenu('offence')}>Offence</button>
        <button className='defence'>Defence</button>
        <button className='back' onClick={_ => this.props.setMenu('root')}>{'<<'}</button>
      </div>
    )
  }
}
