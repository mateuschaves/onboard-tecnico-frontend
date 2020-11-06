import React from 'react'

import Button from '../../components/Button'
import Body from '../../components/Body'

import { useHistory } from 'react-router-dom'

import { Container, Title } from './styles'

function Home() {
  const history = useHistory()
  function handleNavigate(path) {
    history.push(path)
  }
  return (
    <Container>
      <Body>
        <Title>Olá, o que deseja acessar ?</Title>
        <Button onPress={() => handleNavigate('/members')}>Membros</Button>
        <Button onPress={() => handleNavigate('/member-types')}>Tipo de membros</Button>
      </Body>
    </Container>
  )
}

export default Home
