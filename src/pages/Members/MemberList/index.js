import React from 'react'

import MemberItem from '../../../components/MemberItem'
import { Container } from './styles'

export default function MemberList({ members = [] }) {
  function onPress(member) {}

  return (
    <Container>
      {members.map((member, key) => (
        <MemberItem key={key} member={member} onPress={onPress} />
      ))}
    </Container>
  )
}
