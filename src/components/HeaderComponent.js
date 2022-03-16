import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HeaderComponent.css";

export const HeaderComponent = () => {
  return (
    // eslint-disable-next-line react/jsx-no-undef

    <div>
      <header className="nav-style">
        <nav>
          <ul>
            <li>Items</li>
            <li>Date</li>
            <li>Amount</li>
            <li>Category</li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default HeaderComponent;

//   <Navbar bg="dark" variant="dark">
//     <Container>
//       <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//       <Nav className="me-auto">
//         <Nav.Link href="#home">Home</Nav.Link>
//         <Nav.Link href="#features">Features</Nav.Link>
//         <Nav.Link href="#pricing">Pricing</Nav.Link>
//       </Nav>
//     </Container>
//   </Navbar>;
