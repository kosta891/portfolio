import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"
export default ({data}) => {
 
  const {
    allStrapiProjects: {nodes: projects},
    allStrapiBlogs:{nodes: blogs}
  } = data
  return (
    <Layout>
      <SEO title='Početna' description='MilošDev Portfolio Sajt. Miloš Kostadinović programer, napraviće Vam sajt modernog izgleda i funkcionalnosti.'/>
      <Hero />
      <Services />
      <Jobs />
      <Projects projects={projects} title='izabrani projekti' showLink />
      <Blogs blogs={blogs} title='Blog' showLink />
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects(filter: {feature: {eq: true}}) {
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

    allStrapiBlogs(sort: {fields: date, order: DESC}, limit: 3) {
      nodes {
        slug
        content
        description
        date(formatString: "DD.MM.YYYY")
        id
        title
        category
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
// ...GatsbyImageSharpFluid
