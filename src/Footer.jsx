import React from 'react'

const Footer = () => {
  const year = new Date()
  return (
    <footer className='footer'>Footer
      <p className='year'>
        {year.getFullYear()}
      </p>
    </footer>
  )
}

export default Footer