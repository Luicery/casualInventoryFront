import React from "react"
function Navigation() {
  return(
    <div>
      <nav>
        <a href="/">Home</a><br/>
        {localStorage.jwt === undefined && <a href="/login">Login</a>}<br/>
        {localStorage.jwt === undefined && <a href="/signup">Signup</a>}
      </nav>
    </div>
  )
}
export default Navigation
