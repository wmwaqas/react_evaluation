import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import fetchBatches from '../actions/batches/fetch'
import { Title } from '../components/Title'

export class BatchPage extends PureComponent {
  static PropTypes = {
    title: PropTypes.string.isRequired,
  }

  componentWillMount() {
    this.props.fetchBatchs()
  }

  render() {
    const { title } = this.props

    return(
      <div className="batch page">
        <Title content={ title } />
      </div>
    )
  }
}

const mapStateToProps = ({ batches }, { params }) => {
  const batch = batches.reduce((prev, next) => {
    if (next._id === params.batchId) {
      return next
    }
    return prev
  }, {})

  return {
    ...batch
  }
}

export default connect(mapStateToProps, { fetchBatches })(BatchPage)
