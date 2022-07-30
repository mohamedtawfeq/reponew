import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navs.css";

import logo2 from "../../imag/logo.png";

function Nave() {
  return (
    <Navbar className="Navber" bg="dark" expand="lg">
      <Container>
        <div className="M1"></div>
        <div className="M2"></div>
        <div className="M3"></div>
        <div className="M4"></div>
        <div className="M5"></div>
        <Navbar.Brand href="/" className="logo">
          {/* <img src={logo} title="logo" alt="" /> */}
          <img src={logo2} title="logo" alt="" />
          <span className="iconlogo">Dose</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav.Link id="link" href="Menu">
            Menu
          </Nav.Link>
          <Nav.Link id="link" href="#link">
            Map
          </Nav.Link>
          <Nav>
            <Nav.Link id="lastnav">
              07709990958 <ion-icon name="call" id="iconphone"></ion-icon>
            </Nav.Link>{" "}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    //     <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route
    //       path="/Menu"
    //       element={
    //         <React.Suspense fallback="Looding...">
    //           <Menus />
    //         </React.Suspense>
    //       }
    //     />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default Nave;

// import React from "react";
// import logo from "../../imag/logo1.png";
// import {
//   Navbar,
//   NavDropdown,
//   Form,
//   FormControl,
//   Container,
//   Button,
//   Nav,
// } from "react-bootstrap";
// import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
// import Home from "../Home/Home";
// import Menu from "./Menu";
// // import Contact from "./Contact";
// // import About from "./About";

// const Nave = () => {
//   return (
//     <BrowserRouter>
//       <Container>
//         <Navbar bg="dark" variant={"dark"} expand="lg">
//           <Navbar.Toggle aria-controls="navbarScroll" />
//           <Navbar.Brand href="#">
//             <img src={logo} title="logo" alt="" />
//           </Navbar.Brand>
//           <Navbar.Collapse id="navbarScroll">
//             <Nav
//               className="mr-auto my-2 my-lg-0"
//               // style={{ maxHeight: "100px" }}
//               navbarScroll
//             >
//               <NavLink className="appp" to="/Home">
//                 Home
//               </NavLink>
//               <NavLink className="appp" to="/Menu">
//                 Menu
//               </NavLink>
//             </Nav>
//           </Navbar.Collapse>
//         </Navbar>
//       </Container>
//       <Routes>
//         {/* <Route path="/about">
//               <About />
//             </Route>
//             <Route path="/contact">
//               <Contact />
//             </Route> */}
//         <Route path="/" element={<Home />} />
//         <Route path="/Menu" element={<Menu />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default Nave;
