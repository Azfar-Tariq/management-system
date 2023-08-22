import React from 'react'
import '../styles/css/documents.css'
import Header from '../components/Header'
import Search from '../components/Search'
import Dropdown from '../components/Dropdown'
import { IconButton } from '@mui/material'
import TuneIcon from '@mui/icons-material/Tune';

function Documents() {

  return (
    <div className="documents">
      <Header />
      <h2>Documents</h2>
      <div className="search">
        <Search />
        <Dropdown text="Sort by" />
        <IconButton>
          <TuneIcon />
        </IconButton>
      </div>
    </div>
  )
}

export default Documents