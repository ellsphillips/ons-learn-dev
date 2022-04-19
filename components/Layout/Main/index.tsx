import React from 'react'
import { Container, Header } from './styles'

const Main = ({ children }) => {
  return (
    <Container>
      <Header></Header>
      {children}
    </Container>
  )
}

export default Main
