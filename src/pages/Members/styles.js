import styled from 'styled-components'
import { IoMdArrowBack } from 'react-icons/io'

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
export const ArrowBack = styled(IoMdArrowBack)`
  margin-top: 10%;
  align-self: flex-start;
  font-size: 50px;
  color: #fff;
`
