import React, { useEffect, useRef } from 'react'
import logo from '../../../assets/img/logo.svg'
import Container from './styles'

const Sidebar = ({ sidebarOpen, setSidebarOpen }: any) => {
  const trigger: React.MutableRefObject<any> = useRef(null)
  const sidebar: React.MutableRefObject<any> = useRef(null)

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return
      setSidebarOpen(false)
    }
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 'Escape') return
      setSidebarOpen(false)
    }
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  return (
    <Container>
      <div className="sidebar">
        {/* Sidebar backdrop (mobile only) */}
        <div
          className={`sidebar--backdrop ${
            sidebarOpen ? 'sidebar--backdrop__open' : 'sidebar--backdrop__close'
          }`}
          aria-hidden="true"
        ></div>

        {/* Sidebar */}
        <div
          id="sidebar"
          ref={sidebar}
          className={`sidebar--menu ${
            sidebarOpen ? 'sidebar--menu__open' : 'sidebar--menu__close'
          }`}
        >
          {/* Sidebar header */}
          <div className="sidebar--menu__header">
            {/* Close button */}
            <button
              ref={trigger}
              className="close-button"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
            >
              <span className="for-screen-readers-only">Close sidebar</span>
              <svg
                className="arrow"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
              </svg>
            </button>

            {/* Logo */}
            <img style={{ height: '2rem' }} alt="" aria-hidden src={logo} />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Sidebar
