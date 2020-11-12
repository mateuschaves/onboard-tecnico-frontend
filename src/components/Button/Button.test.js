import React from 'react'
import { mount } from 'enzyme'
import 'jest-styled-components'
import Button from './'
import sinon from 'sinon'

describe('Testing Button component', () => {
  it('should call onPress function when was clicked', () => {
    const onPress = sinon.spy()
    const wrapper = mount(<Button onPress={onPress} />)
    expect(onPress.callCount).toBe(0)
    wrapper.simulate('click')
    expect(onPress.callCount).toBe(1)
  })
})
