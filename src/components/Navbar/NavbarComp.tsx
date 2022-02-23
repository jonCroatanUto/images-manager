import React from "react";
import { Navbar, Container, NavDropdown, Nav, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { displayUploadAction } from "../../redux/modalReducer/actions";
function NavbarComp() {
  const dispatch = useDispatch();
  // function displayUploadModal() {
  //   dispatch(displayUploadAction());
  // }
  return (
    <div style={{ marginBottom: "50px" }}>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Your Image Manager</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#link">Diferent Page</Nav.Link>
              <Button onClick={() => dispatch(displayUploadAction())}>
                Upload Image
              </Button>
              <NavDropdown title="Identify" id="basic-nav-dropdown">
                <NavDropdown.Item>Login</NavDropdown.Item>
                <NavDropdown.Item>Register</NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item>LogOut</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
export default NavbarComp;
