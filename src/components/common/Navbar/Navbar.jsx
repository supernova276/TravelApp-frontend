import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import './Navbar.css'

function NavbarComponent() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{position:"fixed", zIndex:"2", width:"100%"}}>
    <Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className=" d-flex justify-content-between"  style={{width:"100%"}} >
          
      <div id="brand-heading">EzeeTravel</div>
      <div className='form-container d-flex align-items-center justify-content-center cursor-pointer shadow'>

        <span className='form-option'> Any Where </span>
        <span className='border-right-1px'></span>
        <span className='form-option'> Any Week </span>
        <span className='border-right-1px'></span>
        <span className='form-option'>Add Geusts</span>
        <button className="search-btn"><i className="bi bi-search search-icon"></i></button>
      </div>
      <div>
        <span className="heading-2">hello, akshita</span>
        <span style={{paddingLeft:"2rem"}}>
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