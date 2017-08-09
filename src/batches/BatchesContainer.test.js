import React from 'react'
import chai, { expect } from 'chai'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import BatchesContainer from './BatchesContainer'
import Title from '../components/Title'
import BatchItem from './BatchItem'

chai.use(chaiEnzyme())

const batches = [
  {
    title: 'Batch # 1',
    students: 'No of Students ' + 6,
  },
  {
    title: 'Batch # 2',
    students: 'No of Students ' + 6,
  },
  {
    title: 'Batch # 3',
    students: 'No of Students ' + 6,
  },
]

describe('<BatchesContainer />', () => {
  const container = shallow(<BatchesContainer batches={batches} />)

  it('is wrapped in a div with class name "batches"', () => {
    expect(container).to.have.className('wrapper')
    expect(container).to.have.className('batches')
  })

  it('contains a Title', () => {
    expect(container).to.have.descendants(Title)
  })

  it('sets the Title to "All Batches"', () => {
    expect(container).to.contain(<Title content="Batches" />)
  })

  it('renders all batches as a BatchItem', () => {
    expect(container).to.have.exactly(batches.length).descendants(BatchItem)
  })

})
