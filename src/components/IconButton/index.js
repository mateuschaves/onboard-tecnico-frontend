import React from 'react'
import { Spinner } from 'react-activity'

import { IoIosAdd } from 'react-icons/io'

import { ButtonContainer } from './styles'
import 'react-activity/dist/react-activity.css'

function IconButton({ onClick, loading, styles }) {
  return (
    <ButtonContainer onClick={onClick} styles={styles}>
      {loading ? <Spinner /> : <IoIosAdd color="#000" size={30} />}
    </ButtonContainer>
  )
}

export default IconButton
