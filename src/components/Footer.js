import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import footerStyles from "./footer.module.scss"

function Footer() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer>
      <p>
        Created with <span className={footerStyles.heart}>&hearts;</span> by{" "}
        {data.site.siteMetadata.author}
      </p>
    </footer>
  )
}

export default Footer
