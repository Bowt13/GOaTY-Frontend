import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class Player extends PureComponent {
  static propTypes = {
    imgSrc: PropTypes.string.isRequired,
    side: PropTypes.string.isRequired,
  }

  render() {
    return (
      <img className={this.props.side} src={this.props.imgSrc} alt={this.props.imgSrc}/>
    )
  }
}
