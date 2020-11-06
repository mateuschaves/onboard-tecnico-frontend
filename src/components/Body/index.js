import React from 'react'

import { BodyContainer } from './styles'

function Body({ children, styles }) {
  return <BodyContainer styles={styles}>{children}</BodyContainer>
}

export default Body
