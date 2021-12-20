import React from 'react'
import Navbar from '../component/Navbar'

const Layout = ( { children } ) => {
  return (
    <div className="layout">
      <Navbar />
      <main className="dashboard-container">{children }</main>
    </div>
  )
}

export default Layout