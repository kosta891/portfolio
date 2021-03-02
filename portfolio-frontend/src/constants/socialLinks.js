import React from "react"
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
 
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url: "https://www.facebook.com/milos.kostadinovic.961/",
  },
  {
    id: 2,
    icon: <FaInstagramSquare className="social-icon"></FaInstagramSquare>,
    url: "https://www.instagram.com/kosta891",
  },
  {
    id: 3,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.instagram.com/kosta891",
  }
  
 
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url}  target="_blank"  rel="noopener noreferrer"  className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
