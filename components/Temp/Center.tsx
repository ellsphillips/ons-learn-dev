import React from 'react'

const Center = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'auto',
        width: '100%',
        position: 'absolute',
        zIndex: -1
      }}
    >
      {children}
    </div>
  )
}

export default Center
