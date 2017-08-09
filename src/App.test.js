import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import App from './App'
// import Title from './components/Title'
import BatchesContainer from './batches/BatchesContainer'

chai.use(chaiEnzyme())

describe('<App />', () => {
  const app = shallow(<App />)

  it('wraps everything in a div tag', () => {
    expect(app).to.have.tagName('div')
  })

  it('contains the BatchesContainer', () => {
    expect(app).to.have.descendants(BatchesContainer)
  })
})
