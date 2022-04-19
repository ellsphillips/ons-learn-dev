import React from 'react'
import logo from '../../../assets/img/logo.svg'
import Container from './styles'

function Header({ sidebarOpen, setSidebarOpen }: any) {
  return (
    <Container>
      <header className="header">
        <div className="container">
          <div className="hero">
            {/* Header: Left side */}
            <div className="navigation">
              <div className="hamburger">
                <button
                  aria-controls="sidebar"
                  aria-expanded={sidebarOpen}
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                  <span className="for-screen-readers-only">Open sidebar</span>
                  <svg
                    className="open-button"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="4" y="5" width="16" height="2" />
                    <rect x="4" y="11" width="16" height="2" />
                    <rect x="4" y="17" width="16" height="2" />
                  </svg>
                </button>
              </div>

              {/* Header: Right side */}
              <img style={{ height: '2rem' }} alt="" aria-hidden src={logo} />
            </div>
          </div>
        </div>
      </header>
    </Container>
  )
}

export default Header
