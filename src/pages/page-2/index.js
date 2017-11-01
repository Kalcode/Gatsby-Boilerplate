import React, { PureComponent } from 'react'
import Link from 'components/Link'
import PropTypes from 'prop-types'

export default class Page2 extends PureComponent {
  static propTypes = {
    children: PropTypes.any,
  }

  state = {
    data: null,
  }

  

  render() {
    const { children } = this.props
    return (
      <div>
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
        <Link to='/'>Go back to the homepage</Link>
      </div>
    )
  }
}
