import React, { useState } from 'react'
import '../styles/css/dashboard.css'
import Header from '../components/Header'
import Search from '../components/Search'
import Dropdown from '../components/Dropdown'
import TuneIcon from '@mui/icons-material/Tune';
import { IconButton } from '@mui/material'
import CustomizedDialogs from '../components/Dialog'
import ProductTable from '../components/ProductTable'

function Dashboard() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className='dashboard'>
      <Header />
      <h2>Users Dashboard</h2>
      <div className="search">
        <Search setSearchTerm={setSearchTerm} />
        <CustomizedDialogs />
        <Dropdown text="Sort By"/>
        <Dropdown text="Saved Search" b="ashfijsa"/>
        <IconButton>
          <TuneIcon />
        </IconButton>
      </div>
      <ProductTable searchTerm={searchTerm}/>
    </div>
  )
}
export default Dashboard