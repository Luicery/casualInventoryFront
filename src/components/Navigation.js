import React from "react"
function Navigation() {
  const logout = () => {
    localStorage.clear("jwt")
    window.location.reload()
  }
  return(
    <div>
      <nav>
        <a href="/">Home</a><br/>
        {localStorage.jwt === undefined && <a href="/login">Login</a>}<br/>
        {localStorage.jwt === undefined && <a href="/signup">Signup</a>}
        {localStorage.jwt !== undefined && <span onClick={logout}>Logout</span>}
      </nav>
    </div>
  )
}
export default Navigation
