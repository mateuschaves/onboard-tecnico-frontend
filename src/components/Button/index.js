import React from 'react'
import { Bounce } from 'react-activity'

import { ButtonContainer } from './styles'

function Button({ children, onPress, loading, styles }) {
  return (
    <ButtonContainer onClick={onPress} styles={styles}>
      {loading ? <Bounce /> : children}
    </ButtonContainer>
  )
}

export default Button
