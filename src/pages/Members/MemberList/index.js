import React from 'react'

import MemberItem from '../MemberItem'
import { Container } from './styles'

export default function MemberList({ members = [] }) {
  return (
    <Container>
      {members.map((member, key) => (
        <MemberItem key={key} member={member} />
      ))}
    </Container>
  )
}
