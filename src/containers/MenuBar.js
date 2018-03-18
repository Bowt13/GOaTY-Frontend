import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import RootButtons from '../components/menu/RootButtons'
import OffenceButtons from '../components/menu/OffenceButtons'
import DefenceButtons from '../components/menu/DefenceButtons'

//STYLING
import './MenuBar.css'

export default class MenuBar extends PureComponent {
  static propTypes = {
  }
  state = {
    menu: 'root'
  }

  toggleState = (stateString) => {
    this.setState({
      menu: stateString
    })
  }

  componentWillMount() {
    this.toggleState = this.toggleState.bind(this)
  }

  render() {
    return (
      <div className='bar'>
        {
          this.state.menu === 'root' &&
          <RootButtons setMenu={this.toggleState}/>
        }
        {
          this.state.menu === 'offence' &&
          <OffenceButtons setMenu={this.toggleState}/>
        }
        {
          this.state.menu === 'defence' &&
          <DefenceButtons setMenu={this.toggleState}/>
        }
      </div>
    )
  }
}
