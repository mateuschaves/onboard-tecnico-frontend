import React from 'react'

import Button from '../../components/Button'

import { Container, Title, Body } from './styles'

export default function Home() {
  return (
    <Container>
      <Body>
        <Title>Olá, o que deseja acessar ?</Title>
        <Button>Membros</Button>
        <Button>Tipo de membros</Button>
      </Body>
    </Container>
  )
}
