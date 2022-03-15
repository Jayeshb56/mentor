import React from 'react'

export default function Navbarr() {
  return (
  
    <nav className="navbar navbar-light bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand">Mentor World</a>
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
      <button>Login</button>
    </form>
  </div>
</nav>
  )
}

