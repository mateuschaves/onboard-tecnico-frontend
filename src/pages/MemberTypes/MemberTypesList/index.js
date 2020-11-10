import React from 'react'

import ListItem from '../../../components/ListItem'
import { Container } from './styles'

export default function MemberList({ memberTypes = [], onSelect }) {
  return (
    <Container>
      {memberTypes.map((memberType, key) => (
        <ListItem
          key={key}
          title={memberType.description}
          subtitle={memberType.status}
          onPress={() => onSelect(memberType)}
        />
      ))}
    </Container>
  )
}
