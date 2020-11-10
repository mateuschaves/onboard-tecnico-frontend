import React, { useState } from 'react'

import { Drawer, Form, Button, Col, Row, Input } from 'antd'

function NewMemberTypeModal({ onSubmit, visible, onClose, title }) {
  const [description, setDescription] = useState('')

  function handleSubmit() {
    onSubmit(description)
  }

  return (
    <Drawer
      title={title}
      width={400}
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
          <Col span={24}>
            <Form.Item
              name="description"
              label="Descrição"
              rules={[{ required: true, message: 'Por favor, insira a descrição do tipo de membro.' }]}
            >
              <Input
                placeholder="Ex. Administrador"
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

export default NewMemberTypeModal
