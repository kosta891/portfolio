import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"
// ...GatsbyImageSharpFluid

const Blog = ({data:{allStrapiBlogs:{nodes: blogs}}}) => {
  console.log(blogs);
  return (
    <Layout>
       <SEO title='Blog' description='Moji blogovi koje pišem u slobodno vreme. U njima možete naći korisne informacije u vezi web programiranja.'/>
      <section className='blog-page' >
        <Blogs blogs={blogs} title='blog' />

      </section>
    </Layout>
  )
}

export const query = graphql`
{
 allStrapiBlogs {
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
export default Blog
