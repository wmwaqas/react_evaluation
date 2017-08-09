import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'


export class Title extends PureComponent {
  static Proptypes = {
    content: PropTypes.string.isRequired,
  }
  render() {
    return(

      <h1>{ this.props.content }</h1>


    )
  }
}

// export default Title
