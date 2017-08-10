import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './Title.css'

export class Title extends PureComponent {
  static PropTypes = {
    content: PropTypes.string.isRequired,
  }
  render() {
    return(

      <h1 className="Title">{ this.props.content }</h1>


    )
  }
}

// export default Title
