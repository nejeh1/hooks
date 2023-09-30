import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Movie from './Movie.js';
import { NavLink, navList, } from "react-router-dom";

function Navbarr() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" >
        <Container >
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav>
             <div>
            <NavLink to={"/"}>home</NavLink>
            <NavLink to={"movies"}>movies</NavLink>
            <NavLink to={"about"}>about</NavLink>
            </div>
          </Nav>
          <routes>
          <route></route>
          <route path='Movie' element={Movie}></route>
          <route></route>
          </routes>
        </Container>
      </Navbar>
      
    </>
  );
}

export default Navbarr;