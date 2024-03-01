import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useSelector,useDispatch} from "react-redux"
import './Navbar.css'
import { useState } from 'react';
import {setSearchModal} from '../../../actions/search.actions'
import {setAuthModal} from '../../../actions/auth.actions'
import {setLogoutModal} from '../../../actions/auth.actions'

function NavbarComponent() {

 const dispatch=useDispatch()
 const geusts=useSelector(state=>state.search.geusts)
 const destination=useSelector(state=>state.search.destination)
 const checkinDate=useSelector(state=>state.search.checkInDate)
 const checkoutDate=useSelector(state=>state.search.checkOutDate)
 const name=useSelector(state=>state.auth.name)
 const token=useSelector(state=>state.auth.token)

//  const isModalOpen=useSelector(state=>state.auth.isAuthModalOpen)

  const handleSearch=()=>{
      dispatch(setSearchModal())
  }

  const handleAuthClick=()=>{
    
    if(token){
      console.log("i have token")
    dispatch(setLogoutModal())
  }
    else
    dispatch(setAuthModal())
    
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{position:"fixed", zIndex:"2", width:"100%"}}>
    <Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className=" d-flex justify-content-between"  style={{width:"100%"}} >
          
      <div id="brand-heading">EzeeTrip</div>
      { 
      <div className='form-container d-flex align-items-center justify-content-center cursor-pointer shadow' onClick={handleSearch}>

      <span className='form-option'> {destination || "Any Where" } </span>
      <span className='border-right-1px'></span>
      <span className='form-option'> 
      {checkinDate && checkoutDate  ?`${checkinDate.toLocaleString("en-US",{ day:"numeric",month:"short"})}-
      ${checkinDate.toLocaleString("en-US",{ day:"numeric",month:"short"})}`:"Any Week"
      } 
      </span>
      <span className='border-right-1px'></span>
      <span className='form-option'>{geusts>0?geusts:"geusts"}</span>
      <button className="search-btn"><i className="bi bi-search search-icon"></i></button>
    </div>
      }
      <div>
        <span className="heading-2">{name? `Hello ${name}`:`Hello User`}</span>
        <span className='nav-login' style={{paddingLeft:"2rem"}}onClick={handleAuthClick}>
        <i className="bi bi-sliders slider-icon"></i>
        <i className="bi bi-person-circle user-icon"></i>
        </span>
      </div>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default NavbarComponent;