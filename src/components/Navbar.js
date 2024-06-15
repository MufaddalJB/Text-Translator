import React, { useState } from "react";
import PropTypes from 'prop-types'

export default function Navbar(props) {

  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" style={{color : props.mode==="light"?"#000000": "#FFFFFF"}}>
          Text Translator
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={props.handleMode}
          />
          <label class="form-check-label" for="flexSwitchCheckDefault" style={{color : props.mode==="light"?"#000000": "#FFFFFF"}}>
            {props.mode==="light"? "Light Mode" : "Dark Mode"}
          </label>
        </div>
      </div>
    </nav>
  );
}
