/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
// import logo from "../logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#"><img className="logo" src='' alt="logo..." /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} style={{color:"white"}} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">about me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">how it works</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">contacts</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
