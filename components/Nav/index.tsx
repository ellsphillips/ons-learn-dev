import Link from 'next/link'
import * as Nav from './styles'

const Navigation = () => {
  return (
    <>
      <Nav.Container>
        <Link href="/">
          <Nav.Item>Home</Nav.Item>
        </Link>
        <Link href="/about">
          <Nav.Item>About</Nav.Item>
        </Link>
      </Nav.Container>
    </>
  )
}

export default Navigation
