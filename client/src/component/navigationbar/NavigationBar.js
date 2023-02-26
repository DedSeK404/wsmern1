import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container >
        
        <Nav  style={{margin:"auto",gap:"250px"}} >
          <Link style={{textDecoration:"none", color:"white",fontSize:"25px"}} to="/">Home</Link>
          <Link style={{textDecoration:"none", color:"white",fontSize:"25px"}} to="/product">Products</Link>
          <Link style={{textDecoration:"none", color:"white",fontSize:"25px"}} to="/add">Add Product</Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
