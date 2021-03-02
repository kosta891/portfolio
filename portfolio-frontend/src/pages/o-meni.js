import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
import SEO from "../components/SEO"
const OMeni = ({data: {about:{nodes}}}) => {
  console.log(nodes);
  const{title, stack, info, image} = nodes[0]
  return (
    <Layout>
      <SEO title='O meni' description='Zovem se Miloš Kostadinović i web programer sam. Pravim moderne sajtove povoljno.'/>
      <section className='about-page' >
        <div className='section-center about-center' >
          <Image className='about-img' fluid={image.childImageSharp.fluid}/>
          <article className='about-text'>
            <Title title={title} />
            <p> {info} </p>
            <div className='about-stack' >
              {stack.map(item => {
                return <span key={item.id} > {item.title} </span>
              })}
            </div>
          </article>
        </div>
      </section>
    </Layout>

)

}

export const query = graphql`
{
  about: allStrapiOMeni {
    nodes {
      id
      info
      stack {
        title
        id
      }
        title
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
export default OMeni
