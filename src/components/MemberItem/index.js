import React from 'react'

import { Container, Name, Email, Colum, RightIcon, PersonIcon } from './styles'

export default function MemberItem({ member, onPress }) {
  return (
    <Container onClick={onPress}>
      <PersonIcon color="#fff" size={35} />
      <Colum>
        <Name>{member.name}</Name>
        <Email>{member.email}</Email>
      </Colum>
      <RightIcon onClick={onPress} color="#fff" size={25} />
    </Container>
  )
}
