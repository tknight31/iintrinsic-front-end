import React from 'react'

const DashboardHeader = (props) => {

  return (
    <div className="header dash-header">Header <button className="button" onClick={props.logout}>Logout</button></div>
  )

}

export default DashboardHeader
