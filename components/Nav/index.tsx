import Link from 'next/link'
import { Container, Item } from './styles'

const Navigation = () => {
  return (
    <>
      <Container>
        <Link href="/">
          <Item>Home</Item>
        </Link>
        <Link href="/about">
          <Item>About</Item>
        </Link>
      </Container>
    </>
  )
}

export default Navigation
