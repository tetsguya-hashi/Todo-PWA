import React from 'react'
import AuthProvider from '../../providers/AuthProvider'
import Dashboard from '../Dashboard'
import Footer from '../Footer'
import Header from '../Header'

const Drugstores = () => {
  return (
    <div>
      Drugstores
      <AuthProvider>
        <Header />
        <Dashboard collectionName={'drugstoreTodo'} />
        <Footer />
      </AuthProvider>
    </div>
  )
}

export default Drugstores