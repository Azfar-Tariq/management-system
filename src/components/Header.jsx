import React from 'react'
import '../styles/css/header.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Avatar from './Avatar'
import { IconButton } from '@mui/material';

function Header() {
  return (
    <div className='header'>
        <div className='title'>
          <p className='hello'>Hello, Lekan</p>
          <p className='greet'>Have a nice day</p>
        </div>
        <div className="profile-noti">
          <IconButton>   
            <NotificationsNoneIcon />
          </IconButton> 
          <hr />
          <div className='name-role'>
            <p className='name'>Lekan Okeowo</p>
            <p className='role'>Admin</p>
          </div>
          <Avatar />
        </div>
    </div>
  )
}

export default Header