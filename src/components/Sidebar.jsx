import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom"

const Sidebar = () => {
  const location = useLocation();

  // Define pages where the sidebar should be hidden
  const pagesWithHiddenSidebar = ['/login'];

  // Determine if the sidebar should be hidden based on the current route
  const isSidebarHidden = pagesWithHiddenSidebar.includes(location.pathname);

  if (isSidebarHidden) {
    return null; // Return null to hide the sidebar
  }

  return (
    <div className="sidebar list-group fw-bold bg-secondary text-center text-wrap shadow-lg border border-1 border-dark">
      <Link to="/login" className="sidebarLinks list-group-item list-group-item-action p-1 text-white">Login</Link>
      <Link to="summary"className="sidebarLinks list-group-item list-group-item-action p-1 text-white">Meal Summary</Link>
      <Link className="sidebarLinks list-group-item list-group-item-action p-1 text-white">Content Library</Link>
      <Link to="/aboutus" className="sidebarLinks list-group-item list-group-item-action p-1 text-white">About us</Link>
      
      <Link className="sidebarLinks list-group-item list-group-item-action p-1 text-white hover">Learn More</Link>
      </div>
  )
}

export default Sidebar