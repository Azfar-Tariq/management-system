import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/css/navbar.css'

function NavBar() {
  return (
    <div className='navbar'>
        <p className='logo'>YOUR LOGO</p>
        <nav>
            <ul>
                <li>
                    <Link to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 22 22" fill="none">
                            <path d="M7.93449 2.06551C7.15622 1.28723 6.10065 0.85 5 0.85C3.89935 0.85 2.84378 1.28723 2.06551 2.06551C1.28723 2.84378 0.85 3.89935 0.85 5C0.85 6.10065 1.28723 7.15622 2.06551 7.93449C2.84378 8.71277 3.89935 9.15 5 9.15H6.85V12.85H5C3.89935 12.85 2.84378 13.2872 2.06551 14.0655C1.28723 14.8438 0.85 15.8994 0.85 17C0.85 18.1006 1.28723 19.1562 2.06551 19.9345C2.84378 20.7128 3.89935 21.15 5 21.15C6.10065 21.15 7.15622 20.7128 7.93449 19.9345C8.71277 19.1562 9.15 18.1006 9.15 17V15.15H12.85V17C12.85 18.1006 13.2872 19.1562 14.0655 19.9345C14.8438 20.7128 15.8994 21.15 17 21.15C18.1006 21.15 19.1562 20.7128 19.9345 19.9345C20.7128 19.1562 21.15 18.1006 21.15 17C21.15 15.8994 20.7128 14.8438 19.9345 14.0655C19.1562 13.2872 18.1006 12.85 17 12.85H15.15V9.15H17C18.1006 9.15 19.1562 8.71277 19.9345 7.93449C20.7128 7.15622 21.15 6.10065 21.15 5C21.15 3.89935 20.7128 2.84378 19.9345 2.06551C19.1562 1.28723 18.1006 0.85 17 0.85C15.8994 0.85 14.8438 1.28723 14.0655 2.06551C13.2872 2.84378 12.85 3.89935 12.85 5V6.85H9.15V5C9.15 3.89935 8.71277 2.84378 7.93449 2.06551ZM15.6919 18.3081C15.3449 17.9612 15.15 17.4907 15.15 17V15.15H17C17.4907 15.15 17.9612 15.3449 18.3081 15.6919C18.6551 16.0388 18.85 16.5093 18.85 17C18.85 17.4907 18.6551 17.9612 18.3081 18.3081C17.9612 18.6551 17.4907 18.85 17 18.85C16.5093 18.85 16.0388 18.6551 15.6919 18.3081ZM9.15 12.85V9.15H12.85V12.85H9.15ZM3.69185 15.6919C4.03879 15.3449 4.50935 15.15 5 15.15H6.85V17C6.85 17.4907 6.65509 17.9612 6.30815 18.3081C5.96121 18.6551 5.49065 18.85 5 18.85C4.50935 18.85 4.03879 18.6551 3.69185 18.3081C3.34491 17.9612 3.15 17.4907 3.15 17C3.15 16.5093 3.34491 16.0388 3.69185 15.6919ZM6.30815 3.69185C6.65509 4.03879 6.85 4.50935 6.85 5V6.85H5C4.50935 6.85 4.03879 6.65509 3.69185 6.30815C3.34491 5.96121 3.15 5.49065 3.15 5C3.15 4.50935 3.34491 4.03879 3.69185 3.69185C4.03879 3.34491 4.50935 3.15 5 3.15C5.49065 3.15 5.96121 3.34491 6.30815 3.69185ZM18.3081 6.30815C17.9612 6.65509 17.4907 6.85 17 6.85H15.15V5C15.15 4.50935 15.3449 4.03879 15.6919 3.69185C16.0388 3.34491 16.5093 3.15 17 3.15C17.4907 3.15 17.9612 3.34491 18.3081 3.69185C18.6551 4.03879 18.85 4.50935 18.85 5C18.85 5.49065 18.6551 5.96121 18.3081 6.30815Z" fill="#757575" stroke="#757575" stroke-width="0.3"/>
                        </svg>
                        <p>Dashboard</p>
                    </Link>
                </li>
                <li>
                    <Link to="/users">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 18 20" fill="none">
                            <path d="M0 20V6H4V20H0ZM7 20V0H11V20H7ZM14 20V12H18V20H14Z" fill="#757575"/>
                        </svg>
                        <p>Users</p>
                    </Link>
                </li>
                <li>
                    <Link to="/documents">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14" stroke="#757575" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M22 10H18C15 10 14 9 14 6V2L22 10Z" stroke="#757575" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M7 13H13" stroke="#757575" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M7 17H11" stroke="#757575" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p>Documents</p>
                    </Link>
                </li>
                <li>
                    <Link to="/message">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H5.2L4 17.2V4H20V16ZM17 11H15V9H17V11ZM13 11H11V9H13V11ZM9 11H7V9H9" fill="#757575"/>
                        </svg>
                        <p>Message</p>
                    </Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar