import React from "react";
import { Link } from "react-router-dom";
function Navebar() {
  return (
    <div>
      <Link to={"ooo"}>mmmmmmmmm</Link>
    </div>
  );
}

export default Navebar;

// import React from "react";
// import "./Nave2.css";
// // import $ from "jquery";

// function Nave() {
//   return (
//     // <!-- Navbar -->
//     <nav className="navbar navbar-expand-lg navbar-mainbg">
//       {/* <!-- Logo --> */}

//       <a className="navbar-brand navbar-logo" href="#">
//         Build Website
//       </a>
//       {/* <!-- Collapse Button --> */}
//       <button
//         className="navbar-toggler"
//         type="button"
//         data-toggle="collapse"
//         data-target="#navbarSupportedContent"
//         aria-controls="navbarSupportedContent"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <i className="fas fa-bars text-white"></i>
//       </button>
//       {/* <!-- Links --> */}
//       <div className="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul className="navbar-nav ml-auto">
//           {/* <!-- For Styling --> */}
//           <div className="hori-selector">
//             <div className="left"></div>
//             <div className="right"></div>
//           </div>
//           {/* <!-- Nav Links --> */}
//           <li className="nav-item">
//             <a className="nav-link" href="#Dashboard">
//               <i className="fas fa-tachometer-alt"></i>Dashboard
//             </a>
//           </li>
//           <li className="nav-item active">
//             <a className="nav-link" href="#Address">
//               <i className="far fa-address-book"></i>Address Book
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#Components">
//               <i className="far fa-clone"></i>Components
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#Calender">
//               <i className="far fa-calendar-alt"></i>Calendar
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#Charts">
//               <i className="far fa-chart-bar"></i>Charts
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#Documents">
//               <i className="far fa-copy"></i>Documents
//             </a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Nave;
