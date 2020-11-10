import React from 'react'
import { Bounce } from 'react-activity'

import { IoIosAdd } from 'react-icons/io'

import { ButtonContainer } from './styles'
import 'react-activity/dist/react-activity.css'

function IconButton({ onClick, loading, styles }) {
  return (
    <ButtonContainer onClick={onClick} styles={styles}>
      {loading ? <Bounce /> : <IoIosAdd color="#000" size={30} />}
    </ButtonContainer>
  )
}

export default IconButton
