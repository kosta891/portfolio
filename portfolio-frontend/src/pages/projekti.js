import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import SEO from "../components/SEO"

// ...GatsbyImageSharpFluid

const ProjectsPage = ({
  data:{allStrapiProjects: {nodes: projects}}
}) => {
  return (
  <Layout>
     <SEO title='Projekti' description='Projekti koje sam radio za moje klijente. '/>
    <section className='projects-page'>
       <Projects projects={projects} title='Svi projekti' />
    </section>
   
  </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        github
        id
        description
        url
        title
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
  }
`
export default ProjectsPage
