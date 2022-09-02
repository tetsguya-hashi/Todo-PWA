import React from 'react'
import AuthProvider from '../../providers/AuthProvider'
import Dashboard from '../Dashboard'
import Footer from '../Footer'
import Header from '../Header'

const HandredStore = () => {
  return (
    <div>
      HandredStore
      <AuthProvider>
        <Header />
        <Dashboard collectionName={'handredStoreTodo'} />
        <Footer />
      </AuthProvider>
    </div>
  )
}

export default HandredStore