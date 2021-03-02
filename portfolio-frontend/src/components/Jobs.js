import React, {Fragment, useState} from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

/* const query = graphql`
  {
    allStrapiJobs(sort: {fields: strapiId, order: ASC}) {
      nodes {
        company
        date
        position
        description {
          id
          name
        }
      }
    }
  }
` */
const Jobs = () => {
  /* const {allStrapiJobs:{nodes:jobs}} = useStaticQuery(query)
  const [value, setValue] = useState(0)
  const {company, position, date, description} = jobs[value] */
  
  return ( 
    <Fragment>
    
    {/* <section className='section jobs'>
      <Title title='Radno iskustvo' />
      <div className='jobs-center'>
        <div className='btn-container'>
          {jobs.map((item,index) =>{
            return (
              <button 
                key={index} 
                onClick={()=>setValue(index)}
                className={`job-btn ${index===value ? 'active-btn': null}`} 
              > 
                {item.company}
              </button>
            )
          })}
        </div>
        <article className="job-info">
          <h3>{position}</h3>
          <h4> {company} </h4>
          <p className='job-date'>{date}</p>
          {description.map(desc=>{
            return (
              <div key={desc.id} className="job-desc" >
                <FaAngleDoubleRight className='job-icon'/>
                <p> {desc.name} </p>
              </div>
            )
          })}
        </article>
      </div>
      <Link to='/o-meni' className='btn center-btn'>
        Više informacija
      </Link>
    </section> */}
    </Fragment>
  )
}

export default Jobs
