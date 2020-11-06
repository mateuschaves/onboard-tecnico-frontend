import React from 'react'

import Body from '../../components/Body'
import MemberList from './MemberList'

import { Container, Title, ArrowBack } from './styles'

function Members() {
  return (
    <Container>
      <ArrowBack />
      <Body>
        <Title>Aqui estão todos os membros</Title>
        <MemberList
          members={[
            { name: 'Mateus', email: 'mateus@example.com' },
            { name: 'Mateus', email: 'mateus@example.com' },
            { name: 'Mateus', email: 'mateus@example.com' },
            { name: 'Mateus', email: 'mateus@example.com' },
            { name: 'Mateus', email: 'mateus@example.com' },
            { name: 'Mateus', email: 'mateus@example.com' },
            { name: 'Mateus', email: 'mateus@example.com' },
            { name: 'Mateus', email: 'mateus@example.com' },
            { name: 'Mateus', email: 'mateus@example.com' },
            { name: 'Mateus', email: 'mateus@example.com' },
            { name: 'Mateus', email: 'mateus@example.com' },
            { name: 'Mateus', email: 'mateus@example.com' },
            { name: 'Mateus', email: 'mateus@example.com' },
            { name: 'Mateus', email: 'mateus@example.com' },
            { name: 'Mateus', email: 'mateus@example.com' },
            { name: 'Mateus', email: 'mateus@example.com' },
            { name: 'Mateus', email: 'mateus@example.com' },
            { name: 'Mateus', email: 'mateus@example.com' },
            { name: 'Mateus', email: 'mateus@example.com' },
            { name: 'Mateus', email: 'mateus@example.com' },
            { name: 'Mateus', email: 'mateus@example.com' },
            { name: 'Mateus', email: 'mateus@example.com' },
            { name: 'Mateus', email: 'mateus@example.com' },
            { name: 'Mateus', email: 'mateus@example.com' },
            { name: 'Mateus', email: 'mateus@example.com' },
            { name: 'Mateus', email: 'mateus@example.com' },
            { name: 'Mateus', email: 'mateus@example.com' },
            { name: 'Mateus', email: 'mateus@example.com' },
            { name: 'Mateus', email: 'mateus@example.com' },
            { name: 'Mateus', email: 'mateus@example.com' },
            { name: 'Mateus', email: 'mateus@example.com' },
            { name: 'Mateus', email: 'mateus@example.com' },
            { name: 'Mateus', email: 'mateus@example.com' },
            { name: 'Mateus', email: 'mateus@example.com' },
            { name: 'Mateus', email: 'mateus@example.com' },
            { name: 'Mateus', email: 'mateus@example.com' },
            { name: 'Mateus', email: 'mateus@example.com' },
            { name: 'Mateus', email: 'mateus@example.com' },
            { name: 'Mateus', email: 'mateus@example.com' },
            { name: 'Mateus', email: 'mateus@example.com' },
            { name: 'Mateus', email: 'mateus@example.com' },
            { name: 'Mateus', email: 'mateus@example.com' },
            { name: 'Mateus', email: 'mateus@example.com' },
            { name: 'Mateus', email: 'mateus@example.com' },
            { name: 'Mateus', email: 'mateus@example.com' },
            { name: 'Mateus', email: 'mateus@example.com' },
            { name: 'Mateus', email: 'mateus@example.com' },
            { name: 'Mateus', email: 'mateus@example.com' }
          ]}
        />
      </Body>
    </Container>
  )
}

export default Members
