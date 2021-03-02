import React from "react"
import Layout from "../components/Layout"
import SEO from '../components/SEO'
const kontakt = () => {
  return (
    <Layout>
       <SEO title='Kontakt' description='Kontaktirajte me u vezi izrade Vašeg sajta.'/>
      <section className='contact-page'>
        <article className='contact-form'>
          <h3>Kontaktirajte me</h3>
          <form  action="https://formspree.io/f/xoqpzjpr" method="POST">
            <div className='form-group'>
              <input type="text" placeholder='ime' name='name' className='form-control' />
              <input type="email" placeholder='email' name='email' className='form-control' />
              <textarea name="message" rows="5" placeholder='poruka' className='form-control' ></textarea>
            </div>
            <button type='submit' className='submit-btn btn'>Pošalji poruku</button>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default kontakt
