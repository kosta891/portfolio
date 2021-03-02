import React from "react"
import { Link } from "gatsby"
const data = [
  {
    id: 1,
    text: "Početna",
    url: "/",
  },
  {
    id: 2,
    text: "O meni",
    url: "/o-meni/",
  },
  {
    id: 3,
    text: "projekti",
    url: "/projekti/",
  },
  {
    id: 4,
    text: "blog",
    url: "/blog/",
  },
  {
    id: 5,
    text: "kontakt",
    url: "/kontakt/",
  },
]

const PageLinks = data.map(link => {
  return (
    <li key={link.id}>
      <Link to={link.url}>{link.text}</Link>
    </li>
  )
})
// I KNOW WE CAN COMBINE IT !!!!!

export default ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {PageLinks}
    </ul>
  )
}
