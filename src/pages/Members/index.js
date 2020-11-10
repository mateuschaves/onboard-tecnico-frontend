import React, { useEffect, useState } from 'react'

import { toast } from 'react-toastify'

import Body from '../../components/Body'
import MemberList from './MemberList'
import IconButton from '../../components/IconButton'
import NewMemberModal from '../../components/NewMemberModal'
import UpdateMemberModal from '../../components/UpdateMemberModal'
import MemberItemLoading from '../../components/MemberItemLoading'

import api from '../../services/api'

import { useHistory } from 'react-router-dom'
import { Container, Title, ArrowBack } from './styles'

function Members() {
  const [members, setMembers] = useState([])
  const [showNewMemberModal, setShowNewMemberModal] = useState(false)
  const [showUpdateMemberModal, setShowUpdateMemberModal] = useState(false)
  const [member, setMember] = useState({})
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
    setShowUpdateMemberModal(false)
    api
      .get('/members')
      .then(({ data }) => setMembers(data.rows))
      .catch(() => toast('Erro ao listar todos os membros', { type: 'error' }))
      .finally(() => setLoading(false))
  }

  function deleteMember(id) {
    setLoading(true)
    setShowUpdateMemberModal(false)
    api
      .delete(`/members/${id}`)
      .then(() => getMembers())
      .catch(() => toast('Erro ao deletar membro', { type: 'error' }))
      .finally(() => setLoading(false))
  }

  function createMember(name, email, phone, memberType) {
    setLoading(true)
    setShowNewMemberModal(false)
    api
      .post('/members', { name, email, phone, memberTypeId: memberType, status: 'asd' })
      .then(() => {
        getMembers()
      })
      .catch(() => toast('Erro ao criar membro', { type: 'error' }))
      .finally(() => setLoading(false))
  }

  function updateMember(id, name, phone, memberTypeId) {
    setShowUpdateMemberModal(false)
    api
      .put(`/members/${id}`, { name, phone, memberTypeId, status: 'asd' })
      .then(() => {
        getMembers()
      })
      .catch(() => toast('Erro ao atualizar membro', { type: 'error' }))
      .finally(() => setLoading(false))
  }

  function handleSelectUser(member) {
    setMember(member)
    setShowUpdateMemberModal(true)
  }

  function renderMembers() {
    return <MemberList members={members} onSelect={handleSelectUser} />
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
        onSubmit={createMember}
        title="Adicionar um novo membro"
        visible={showNewMemberModal}
      />
      {member && (
        <UpdateMemberModal
          onClose={() => setShowUpdateMemberModal(false)}
          onSubmit={updateMember}
          onDelete={deleteMember}
          title={`Atualizar ${member?.name}`}
          visible={showUpdateMemberModal}
          member={member}
          getMembers={getMembers}
        />
      )}
    </Container>
  )
}

export default Members
