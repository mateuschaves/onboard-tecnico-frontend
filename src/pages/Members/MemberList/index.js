import React from 'react'

import ListItem from '../../../components/ListItem'
import { Container } from './styles'

export default function MemberList({ members = [], onSelect }) {
  return (
    <Container>
      {members.map((member, key) => (
        <ListItem key={key} title={member.name} subtitle={member.email} onPress={() => onSelect(member)} />
      ))}
    </Container>
  )
}
