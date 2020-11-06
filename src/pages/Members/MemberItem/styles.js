import styled from 'styled-components'
import { darken } from 'polished'
import { IoMdCreate } from 'react-icons/io'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 8px;
  border-radius: 5px;
  background-color: #535353;
  width: 300px;
  margin: 10px;
  transition: background-color 0.2s width 0.5s;
  cursor: pointer;
  &:hover {
    background-color: ${darken(0.05, '#535353')};
  }
  &:active {
    background-color: ${darken(0.08, '#535353')};
    width: 295px;
  }
`
export const Name = styled.span`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`
export const Email = styled.span`
  color: ${darken(0.2, '#fff')};
  font-size: 14px;
`
export const Colum = styled.div`
  display: flex;
  flex-direction: column;
`
export const EditIcon = styled(IoMdCreate)`
  transition: color 0.2s;
  &:hover {
    color: ${darken(0.8, '#fff')};
  }
`
