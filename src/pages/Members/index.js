import React, { useEffect, useState } from 'react'

import Body from '../../components/Body'
import MemberList from './MemberList'
import api from '../../services/api'

import { Container, Title, ArrowBack } from './styles'

function Members() {
  const [members, setMembers] = useState([])

  useEffect(() => api.get('/members').then(({ data }) => setMembers(data.rows)), [])
  return (
    <Container>
      <ArrowBack />
      <Body>
        <Title>Aqui estão todos os membros</Title>
        <MemberList members={members} />
      </Body>
    </Container>
  )
}

export default Members
