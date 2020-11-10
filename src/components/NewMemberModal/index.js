import React, { useEffect, useState } from 'react'

import api from '../../services/api'

import { Drawer, Form, Button, Col, Row, Input, Select } from 'antd'

function NewMemberModal({ onSubmit, visible, onClose, title }) {
  const [memberTypes, setMemberTypes] = useState([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [memberType, setMemberType] = useState(null)

  useEffect(() => {
    api.get('/member-types').then(({ data }) => setMemberTypes(data.rows))
  }, [])

  function handleSubmit() {
    onSubmit(name, email, phone, memberType)
  }

  return (
    <Drawer
      title={title}
      width={720}
      onClose={onClose}
      visible={visible}
      bodyStyle={{ paddingBottom: 80 }}
      footer={
        <div
          style={{
            textAlign: 'right'
          }}
        >
          <Button onClick={onClose} style={{ marginRight: 8 }}>
            Cancelar
          </Button>
          <Button onClick={handleSubmit} type="primary">
            Adicionar
          </Button>
        </div>
      }
    >
      <Form layout="vertical" hideRequiredMark>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="name"
              label="Nome"
              rules={[{ required: true, message: 'Por favor, insira o nome do membro.' }]}
            >
              <Input placeholder="Ex. Mateus Henrique" value={name} onChange={(e) => setName(e.target.value)} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="email"
              label="Email"
              rules={[{ required: true, message: 'Por favor, insira o email do membro.' }]}
            >
              <Input placeholder="Ex. mateus@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="phone" label="Telefone">
              <Input placeholder="Ex. (81) 9.7324-342" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="memberType"
              label="Tipo de membro"
              rules={[{ required: true, message: 'Por favor, escolha o tipo de membro.' }]}
            >
              <Select placeholder="Escolha o tipo de membro" value={memberType} onChange={(e) => setMemberType(e)}>
                {memberTypes.map((memberType) => (
                  <Select.Option key={memberType.id} value={memberType.id}>
                    {memberType.description}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Drawer>
  )
}

export default NewMemberModal
