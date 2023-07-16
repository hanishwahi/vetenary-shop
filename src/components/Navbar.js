import React from 'react'
import Logo from '../Images/logo.png'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const Navigate = useNavigate();


  const loggedUser = JSON.parse(localStorage.getItem('loggedin'));

  function handleLogout() {
    localStorage.removeItem('user')
    localStorage.removeItem('loggedin')
    toast.success("Logout Successfully")
    Navigate('/login')
    window.location.reload();
  }
  return (
    <>
      <div className='navbar-main'>
        <div className='container'>
          <div className='row'>
            <div className='col Logo'>
              <img width={70} src={Logo} alt='' />
            </div>
            <div className='col Navbar'>
              <Link to='/'>Home</Link>
              <Link to='/'>About</Link>
              <Link to='/'>Service</Link>
              <Link to='/'>Contact</Link>
            </div>
            <div className='col'>
              {
                (loggedUser) ? <Link onClick={handleLogout}>Logout</Link> : <Link to="/login">Login</Link>
              }
            </div>
          </div>
        </div>

      </div>
      <ToastContainer />
    </>
  )
}

export default Navbar