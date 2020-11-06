import styled from 'styled-components'

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 920px;
  width: 100%;
  height: 100vh;
  align-items: center;
  ${({ styles }) => `${styles}`};
`
