import React, { useEffect, useState, useRef } from 'react'

import api from '../../services/api'
import NewAddressModal from '../../components/NewAddressModal'

import { toast } from 'react-toastify'

import { Drawer, Form, Button, Col, Row, Input, Select, List } from 'antd'
import { HomeOutlined, PlusCircleOutlined } from '@ant-design/icons'

function UpdateMemberModal({ onSubmit, onDelete, visible, onClose, title, member, getMembers }) {
  const [memberTypes, setMemberTypes] = useState([])
  const [name, setName] = useState(member?.name || '')
  const [phone, setPhone] = useState(member?.phone || '')
  const [id, setId] = useState(member?.id || '')
  const [showNewAddressModal, setShowNewAddressModal] = useState(false)

  const nameRef = useRef({})
  const phoneRef = useRef({})
  const memberTypeRef = useRef()
  const [memberType, setMemberType] = useState(member?.member_type_id)

  useEffect(() => {
    api.get('/member-types').then(({ data }) => setMemberTypes(data.rows))
  }, [])

  useEffect(() => {
    const { id, name, phone, memberType } = member
    setName(name)
    setPhone(phone)
    setMemberType(memberType)
    setId(id)
    if (nameRef.current.state) nameRef.current.state.value = name
    if (phoneRef.current.state) phoneRef.current.state.value = phone
  }, [member])

  function handleSubmit() {
    onSubmit(id, name, phone, memberType)
  }

  function handleDelete() {
    onDelete(id)
  }

  function handleNewAddress(street, number, neighborhood, city, state) {
    api
      .post(`/members/${member.id}/address`, { street, number, neighborhood, city, state })
      .then(() => {
        setShowNewAddressModal(false)
        getMembers()
      })
      .catch(() => toast('Erro ao adicionar endereço', { type: 'error' }))
  }

  return (
    <Drawer
      title={title}
      width={500}
      onClose={onClose}
      visible={visible}
      bodyStyle={{ paddingBottom: 80 }}
      footer={
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ textAlign: 'left' }}>
            <Button onClick={handleDelete} type="text">
              Deletar
            </Button>
          </div>
          <div
            style={{
              textAlign: 'right'
            }}
          >
            <Button onClick={onClose} style={{ marginRight: 8 }}>
              Cancelar
            </Button>
            <Button onClick={handleSubmit} type="primary">
              Atualizar
            </Button>
          </div>
        </div>
      }
    >
      <Form layout="vertical" hideRequiredMark>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="name"
              label="Nome"
              rules={[{ required: true, message: 'Por favor, insira o nome do membro.' }]}
            >
              <Input
                ref={nameRef}
                placeholder="Ex. Mateus Henrique"
                type="text"
                value="name"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="phone" label="Telefone">
              <Input
                ref={phoneRef}
                placeholder="Ex. (81) 9.7324-342"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="memberType"
              label="Tipo de membro"
              rules={[{ required: true, message: 'Por favor, escolha o tipo de membro.' }]}
            >
              <Select
                ref={memberTypeRef}
                placeholder="Escolha o tipo de membro"
                value={memberType}
                onChange={(e) => setMemberType(e)}
              >
                {memberTypes.map((memberType, id) => (
                  <Select.Option key={memberType.id} value={memberType.id} defaultValue={member?.member_type_id}>
                    {memberType.description}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <List
        itemLayout="horizontal"
        dataSource={member.adresses}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<HomeOutlined />}
              title={
                <span>
                  {item.street} - {item.number}, {item.neighborhood}
                </span>
              }
              description={
                <span>
                  {item.city} - {item.state}
                </span>
              }
            />
          </List.Item>
        )}
        locale={{
          emptyText: 'Nenhum endereço'
        }}
      />
      <Row gutter={16}>
        <Col span={12} offset={8}>
          <Button icon={<PlusCircleOutlined />} onClick={() => setShowNewAddressModal(true)}>
            Novo endereço
          </Button>
        </Col>
      </Row>
      <NewAddressModal
        onClose={() => setShowNewAddressModal(false)}
        onSubmit={handleNewAddress}
        visible={showNewAddressModal}
      />
    </Drawer>
  )
}

export default UpdateMemberModal
