import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

class BatchItem extends PureComponent {
  static PropTypes = {
    title: PropTypes.string.isRequired,
    students: PropTypes.string.isRequired,
  }
  render() {
    const { _id, title, students, start, end} = this.props

    return(
      <article className="batch">
      <Link to="/batches{_id}">{ title }</Link>

      <div>
        <h4>{ students }</h4>
        <h4>{ start }</h4>
        <h4>{ end }</h4>
      </div>
    </article>
    )
  }
}

export default BatchItem
// <h1>{ title }</h1>
