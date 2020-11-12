import styled from 'styled-components'
import { darken } from 'polished'

export const ButtonContainer = styled.button`
  display: flex;
  justify-self: flex-start;
  align-self: flex-start;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  width: 60px;
  height: 60px;
  border-radius: 90px;
  cursor: pointer;
  outline: inherit;
  border: none;
  margin-top: 9%;
  &:hover {
    background-color: ${darken(0.2, '#fff')};
  }
  ${({ styles }) => `${styles}`};
`
