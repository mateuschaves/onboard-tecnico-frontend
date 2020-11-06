import styled from 'styled-components'
import { ArrowLeftOutlined } from '@ant-design/icons'

export const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`
export const Title = styled.h1`
  margin-top: 20%;
  color: #fff;
`
export const ArrowBack = styled(ArrowLeftOutlined)`
  margin-top: 10%;
  align-self: flex-start;
  font-size: 35px;
  color: #fff;
`
