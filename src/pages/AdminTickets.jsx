import React from 'react'
import MainContent from '../components/AdminTicketsMainContent/MainContent'
import AdminNavbar from '../components/AllNavbars/AdminNavbar/AdminNavbar'
import AdminFooter from '../components/AllFooters/AdminFooter'

const AdminTickets = () => {
  return (
    <div>
      <AdminNavbar />
      <MainContent />
      <AdminFooter />
    </div>
  )
}

export default AdminTickets