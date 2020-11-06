import styled from 'styled-components'
import { darken } from 'polished'

export const ButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  width: 230px;
  height: 42px;
  padding: 16px;
  margin: 8px;
  cursor: pointer;
  outline: inherit;
  &:hover {
    background-color: ${darken(0.2, '#fff')};
  }
  ${({ styles }) => `${styles}`};
`
