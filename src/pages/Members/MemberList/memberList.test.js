import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'
import MemberList from './'
import ListItem from '../../../components/ListItem'

import { members } from '../members.json'

describe('Testing MemberList Component', () => {
  it('should have no one item when was render', () => {
    const wrapper = shallow(<MemberList />)
    expect(wrapper.find(ListItem)).toHaveLength(0)
  })

  it('should have one ListItem for each member on members array', () => {
    const wrapper = shallow(<MemberList members={members} />)
    expect(wrapper.find(ListItem)).toHaveLength(members.length)
  })
})
