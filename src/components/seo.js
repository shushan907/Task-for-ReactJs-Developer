import React, {useEffect, useState} from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            menuLinks {
              subTitle
              link
            }
          }
        }
      }
    `
  );

  const [path, setPath] = useState(null);
  const [currentTitle, setCurrentTitle] = useState(null);
  
  useEffect(() => {
    setPath(window?.location.pathname);
  }, [])

  useEffect(() => {
    site.siteMetadata?.menuLinks?.filter(menu => menu.link === path).length ? 
    setCurrentTitle(site.siteMetadata?.menuLinks?.filter(menu => menu.link === path)[0].subTitle) 
    : setCurrentTitle('24/7 AI website monitoring to protect & grow your business');
  }, [path])

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`${defaultTitle} - ${currentTitle}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
