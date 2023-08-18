import React, { useState } from 'react'
import '../styles/css/dashboard.css'
import Header from '../components/Header'
import Search from '../components/Search'
import Button from '../components/Button'
import Dropdown from '../components/Dropdown'
import Table from '../components/Table'
import TuneIcon from '@mui/icons-material/Tune';

function Dashboard() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className='dashboard'>
      <Header />
      <h2>Users Dashboard</h2>
      <div className="search">
        <Search setSearchTerm={setSearchTerm} />
        <Button />
        <Dropdown text="Sort By"/>
        <Dropdown text="Saved Search" b="ashfijsa"/>
        <TuneIcon />
      </div>
      <Table searchTerm={searchTerm} />
    </div>
  )
}

export default Dashboard