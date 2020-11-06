import React from 'react'

import { IoMdPerson } from 'react-icons/io'
import { Container, Name, Email, Colum, EditIcon } from './styles'

export default function MemberItem({ member }) {
  function openUpdateModal() {
    alert('oi')
  }
  return (
    <Container>
      <IoMdPerson color="#fff" size={35} />
      <Colum>
        <Name>{member.name}</Name>
        <Email>{member.email}</Email>
      </Colum>
      <EditIcon onClick={openUpdateModal} color="#fff" size={25} style={{ display: 'flex', alignSelf: 'center' }} />
    </Container>
  )
}
