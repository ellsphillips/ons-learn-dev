import React from 'react'
import * as Styles from './styles'

const Main = ({ children }) => {
  return (
    <Styles.Container>
      <Styles.Header></Styles.Header>
      {children}
    </Styles.Container>
  )
}

export default Main
