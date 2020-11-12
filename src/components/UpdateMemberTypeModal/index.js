import React, { useEffect, useState, useRef } from 'react'

import { Drawer, Form, Button, Col, Row, Input } from 'antd'

function UpdateMemberTypeModal({ onSubmit, onDelete, visible, onClose, title, memberType }) {
  const [description, setDescription] = useState(memberType?.description || '')
  const [id, setId] = useState(memberType?.id || '')

  const descriptionRef = useRef({})

  useEffect(() => {
    const { id = 0, description } = memberType
    setDescription(description)
    setId(id)
    if (descriptionRef.current.state) descriptionRef.current.state.value = description
  }, [memberType])

  function handleSubmit() {
    onSubmit(id, description)
    setDescription('')
  }

  function handleDelete() {
    onDelete(id)
  }

  return (
    <Drawer
      title={title}
      width={400}
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
              name="description"
              label="Descrição"
              rules={[{ required: true, message: 'Por favor, insira a descrição do tipo de membro.' }]}
            >
              <Input
                ref={descriptionRef}
                placeholder="Ex. Administrador"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Drawer>
  )
}

export default UpdateMemberTypeModal
