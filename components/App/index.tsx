import Link from 'next/link'
import React, { ReactElement } from 'react'

const App = (): ReactElement => {
  return (
    <>
      <h1>Welcome!</h1>
      <Link href="/about">
        <a>
          <img src="https://raw.githubusercontent.com/ellsphillips/doctor/master/docs/img/doctor-logo.svg" />
        </a>
      </Link>
    </>
  )
}

export default App
