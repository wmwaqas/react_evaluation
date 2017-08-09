import React from 'react'
import chai, { expect } from 'chai'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import BatchItem from './BatchItem'


chai.use(chaiEnzyme())

const batch = {
    title: 'Batch # 1',
    students: 'No of Students ' + 6,
}

describe('<BatchItem />', () => {
  const container = shallow(<BatchItem { ...batch } />)

  it('is wrapped in a article tag with class name "batch"', () => {
    expect(container).to.have.tagName('article')
    expect(container).to.have.className('batch')
  })

  it('contains a title', () => {
    expect(container.find('h1')).to.have.text(batch.title)
  })

  it('contains number of students', () => {
    expect(container.find('h4')).to.have.text(batch.students)
  })
})
