import React from 'react';
import { Link } from "react-router-dom";

export default function Home(){
  return(
    <div>
      {/* title */}
      <div>
        <h1>Masashi Sawada</h1>
        <h2>This is my portfolio</h2>
      </div>
      {/* SNS */}
      <div>
        <Link to="https://www.instagram.com/marcy.387" target="_blank"><i className="fa-brands fa-instagram"></i></Link>
        <Link to="https://github.com/masashi381" target="_blank"><i className="fa-brands fa-github"></i></Link>
      </div>
    </div>
  )
}