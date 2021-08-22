import React from 'react'
import './navbar.css'



export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <div style={{ width: 360 }}>Qpost</div>
        <div style={{ width: 215 }}>search</div>
        <div className="button-container">
          <div className="button-case">
            <div>a</div>
            <div>b</div>
            <div>c</div>
            <div>d</div>
            <div>e</div>
          </div>
        </div>
      </div>
    </div>
  )
}
