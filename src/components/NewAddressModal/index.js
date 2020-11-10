import React, { useState } from 'react'

import { Modal, Form, Row, Col, Input } from 'antd'

export default function NewAddressModal({ visible, onSubmit, onClose }) {
  const [street, setStreet] = useState('')
  const [number, setNumber] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [neighborhood, setNeighborhood] = useState('')

  return (
    <Modal
      title="Novo endereço"
      visible={visible}
      onOk={() => onSubmit(street, number, neighborhood, city, state)}
      onCancel={onClose}
      okText="Adicionar"
      cancelText="Cancelar"
    >
      <Form layout="vertical" hideRequiredMark>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="street"
              label="Rua"
              rules={[{ required: true, message: 'Por favor, insira o nome da rua.' }]}
            >
              <Input
                placeholder="Ex. Ayres da Cunha"
                type="text"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="number"
              label="Número"
              rules={[{ required: true, message: 'Por favor, insira o número da casa.' }]}
            >
              <Input placeholder="Ex. 63 " type="tel" value={number} onChange={(e) => setNumber(e.target.value)} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="neighborhood"
              label="Bairro"
              rules={[{ required: true, message: 'Por favor, insira o bairro.' }]}
            >
              <Input
                placeholder="Ex. Mauricio de Nassau "
                type="tel"
                value={neighborhood}
                onChange={(e) => setNeighborhood(e.target.value)}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="city" label="Cidade" rules={[{ required: true, message: 'Por favor, insira a cidade.' }]}>
              <Input placeholder="Ex. Caruaru " type="text" value={city} onChange={(e) => setCity(e.target.value)} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="state" label="Estado" rules={[{ required: true, message: 'Por favor, insira o estado.' }]}>
              <Input
                placeholder="Ex. Pernambuco"
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  )
}
