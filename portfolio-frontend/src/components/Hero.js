import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
// ...GatsbyImageSharpFluid

const query = graphql`
  {
    file(relativePath: {eq: "hero-img-1.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      } 
    }
  }
`
const Hero = () => {
  const {file:{childImageSharp:{fluid}}} = useStaticQuery(query)
  
  return (
    <header className='hero'>
      <div className='section-center hero-center'>
        <article className='hero-info'>
          <div>
            <div className='underline'></div>
            <h1>Ja sam Miloš</h1>
            <h4>Web developer i programer</h4>
            <Link to='/kontakt' className='btn' >
              kontaktiraj me
            </Link>
            <SocialLinks />
          </div>
          
        </article>
        <Image fluid={fluid} alt='hero' className='hero-img' />
      </div>
    </header>
  )
  
}

export default Hero
