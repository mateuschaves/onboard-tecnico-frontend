import React, { useEffect, useState } from 'react'

import Body from '../../components/Body'
import MemberList from './MemberList'
import IconButton from '../../components/IconButton'
import NewMemberModal from '../../components/NewMemberModal'
import MemberItemLoading from '../../components/MemberItemLoading'

import api from '../../services/api'

import { useHistory } from 'react-router-dom'
import { Container, Title, ArrowBack } from './styles'

function Members() {
  const [members, setMembers] = useState([])
  const [showNewMemberModal, setShowNewMemberModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  useEffect(() => {
    getMembers()
  }, [])

  function handleBack() {
    history.goBack()
  }

  function getMembers() {
    setLoading(true)
    api
      .get('/members')
      .then(({ data }) => setMembers(data.rows))
      .finally(() => setLoading(false))
  }

  function onSubmit(name, email, phone, memberType) {
    setLoading(true)
    setShowNewMemberModal(false)
    api
      .post('/members', { name, email, phone, memberTypeId: memberType, status: 'asd' })
      .then(() => {
        getMembers()
      })
      .finally(() => setLoading(false))
  }

  function renderMembers() {
    return <MemberList members={members} />
  }
  function renderMembersLoading() {
    return (
      <>
        <MemberItemLoading />
        <MemberItemLoading />
        <MemberItemLoading />
        <MemberItemLoading />
        <MemberItemLoading />
        <MemberItemLoading />
        <MemberItemLoading />
        <MemberItemLoading />
      </>
    )
  }
  return (
    <Container>
      <ArrowBack onClick={handleBack} />
      <Body>
        <Title>Aqui estão todos os membros</Title>
        {loading ? renderMembersLoading() : renderMembers()}
      </Body>
      <IconButton loading={loading} onClick={() => setShowNewMemberModal(true)} />

      <NewMemberModal
        onClose={() => setShowNewMemberModal(false)}
        onSubmit={onSubmit}
        title="Adicionar um novo membro"
        visible={showNewMemberModal}
      />
    </Container>
  )
}

export default Members
