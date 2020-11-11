import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'
import Home from '.'
import Button from '../../components/Button'

describe('Testing Home Page', () => {
  it('should have two buttons on home screen', () => {
    const wrapper = shallow(<Home />)
    expect(wrapper.find(Button)).toHaveLength(2)
  })
})
