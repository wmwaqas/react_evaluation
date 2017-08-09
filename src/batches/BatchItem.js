import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class BatchItem extends PureComponent {
  static PropTypes = {
    title: PropTypes.string.isRequired,
    students: PropTypes.string.isRequired,
  }
  render() {
    const { title, students} = this.props

    return(
      <article className="batch">
      <h1>{ title }</h1>
      <div>
        <h4>{ students }</h4>
      </div>
    </article>
    )
  }
}

export default BatchItem
