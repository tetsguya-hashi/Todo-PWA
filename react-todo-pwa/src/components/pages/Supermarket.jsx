import React from 'react'
import AuthProvider from '../../providers/AuthProvider'
import Dashboard from '../Dashboard'
import Footer from '../Footer'
import Header from '../Header'

const Supermarket = () => {
  return (
    <div>
      <AuthProvider>
        <Header />
        <Dashboard collectionName={'todo'} />
        <Footer />
      </AuthProvider>
    </div>
  )
}

export default Supermarket