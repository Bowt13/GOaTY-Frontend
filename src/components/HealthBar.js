import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

//STYLING
import './HealthBar.css'

export default class HealthBar extends PureComponent {
  static propTypes = {
    percentage: PropTypes.string.isRequired,
    side: PropTypes.string.isRequired,
  }

  render() {
    return (
      <div>
      <div className={`wrapper-${this.props.side}`}>
      <div className={this.props.percentage}/>
      </div>
      <p className={`text-${this.props.side}`}> hp: 10</p>
      </div>
    )
  }
}
