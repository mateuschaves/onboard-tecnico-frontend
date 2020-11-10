import React, { useEffect, useState } from 'react'

import { toast } from 'react-toastify'

import Body from '../../components/Body'
import MemberTypesList from './MemberTypesList'
import IconButton from '../../components/IconButton'
import NewMemberTypeModal from '../../components/NewMemberTypeModal'
import UpdateMemberTypeModal from '../../components/UpdateMemberTypeModal'
import MemberItemLoading from '../../components/MemberItemLoading'

import api from '../../services/api'

import { useHistory } from 'react-router-dom'
import { Container, Title, ArrowBack } from './styles'

function MemberTypes() {
  const [memberTypes, setMemberTypes] = useState([])
  const [showNewMemberTypeModal, setShowNewMemberTypeModal] = useState(false)
  const [showUpdateMemberTypeModal, setShowUpdateMemberTypeModal] = useState(false)
  const [memberType, setMemberType] = useState(null)
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  useEffect(() => {
    getMemberTypes()
  }, [])

  function handleBack() {
    history.goBack()
  }

  function getMemberTypes() {
    setLoading(true)
    api
      .get('/member-types')
      .then(({ data }) => setMemberTypes(data.rows))
      .catch(() => toast('Erro ao listar todos os tipos de membro', { type: 'error' }))
      .finally(() => setLoading(false))
  }

  function deleteMemberType(id) {
    setLoading(true)
    setShowUpdateMemberTypeModal(false)
    api
      .delete(`/member-types/${id}`)
      .then(() => getMemberTypes())
      .catch(() => toast('Erro ao deletar tipo de membro', { type: 'error' }))
      .finally(() => setLoading(false))
  }

  function createMemberType(description) {
    setLoading(true)
    setShowNewMemberTypeModal(false)
    api
      .post('/member-types', { description, status: 'asd' })
      .then(() => {
        getMemberTypes()
      })
      .catch(() => toast('Erro ao criar tipo de membro', { type: 'error' }))
      .finally(() => setLoading(false))
  }

  function updateMember(id, description) {
    setShowUpdateMemberTypeModal(false)
    api
      .put(`/member-types/${id}`, { description, status: 'asd' })
      .then(() => {
        getMemberTypes()
      })
      .catch(() => toast('Erro ao atualizar tipos de membro', { type: 'error' }))
      .finally(() => setLoading(false))
  }

  function handleSelectMemberType(memberType) {
    setMemberType(memberType)
    setShowUpdateMemberTypeModal(true)
  }

  function renderMemberTypes() {
    return <MemberTypesList memberTypes={memberTypes} onSelect={handleSelectMemberType} />
  }

  function renderMemberTypesLoading() {
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
        <Title>Aqui estão todos os tipos de membros</Title>
        {loading ? renderMemberTypesLoading() : renderMemberTypes()}
      </Body>
      <IconButton loading={loading} onClick={() => setShowNewMemberTypeModal(true)} />

      <NewMemberTypeModal
        onClose={() => setShowNewMemberTypeModal(false)}
        onSubmit={createMemberType}
        title="Adicionar um novo tipo de membro"
        visible={showNewMemberTypeModal}
      />
      {memberType && (
        <UpdateMemberTypeModal
          onClose={() => setShowUpdateMemberTypeModal(false)}
          onSubmit={updateMember}
          onDelete={deleteMemberType}
          title={`Atualizar ${memberType?.description}`}
          visible={showUpdateMemberTypeModal}
          memberType={memberType}
        />
      )}
    </Container>
  )
}

export default MemberTypes