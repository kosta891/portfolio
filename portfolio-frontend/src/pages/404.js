import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const Error = () => {
  return (
    <Layout>
       <SEO title='404' description='Greška 404. Nažalost nemamo ovakvu stranicu'/>
      <main className='error-page'>
        <div className='error-container' >
          <h1>Nepostojeća stranica... </h1>
          <h2>Greška 404</h2> 
          <Link className='btn' to='/'>Početna</Link>
        </div>
      </main>
    </Layout>
  )
}

export default Error
