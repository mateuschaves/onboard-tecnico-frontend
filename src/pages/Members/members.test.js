import React from 'react'
import { shallow } from 'enzyme'
import Member from './'
import { ArrowBack } from './styles'
import MemberList from './MemberList'
import IconButton from '../../components/IconButton'
import { act } from 'react-dom/test-utils'
import api from '../../services/api'
import { members } from './members.json'

jest.mock('axios')

describe('Testing Member Page', () => {
  it('should have one component MemberList', () => {
    const wrapper = shallow(<Member />)
    expect(wrapper.find(MemberList)).toHaveLength(1)
  })

  it('should have one component IconButton', () => {
    const wrapper = shallow(<Member />)
    expect(wrapper.find(IconButton)).toHaveLength(1)
  })

  it('shoud have one Icon component to handle back navigation', () => {
    const wrapper = shallow(<Member />)
    expect(wrapper.find(ArrowBack)).toHaveLength(1)
  })

  //   it('shoud render loading components while data fetching', async () => {
  //     const wrapper = shallow(<Member />)
  //     api.get.mockResolvedValue({ data: members })
  //   })
})
