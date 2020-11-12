import React from 'react'

import { Container, Title, Subtitle, Colum, RightIcon, PersonIcon } from './styles'

export default function ListItem({ title, subtitle, onPress }) {
  return (
    <Container onClick={onPress}>
      <PersonIcon color="#fff" size={35} />
      <Colum>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Colum>
      <RightIcon onClick={onPress} color="#fff" size={25} />
    </Container>
  )
}
