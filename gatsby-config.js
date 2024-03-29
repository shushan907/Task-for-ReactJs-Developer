module.exports = {
  siteMetadata: {
    title: `Hexometer`,
    description: `React test task`,
    author: `@shushan907`,
    menuLinks: [
      {
        name: 'How does it work?',
        link: '/page-1',
        subTitle: 'Website Performance Audit and Monitoring Service'
      },
      {
        name: 'Solutions',
        subTitle: 'Solutions',
        dropdown: [
          {
            name: 'E-Commerce and retail',
            link: '/page-2-1'
          },
          {
            name: 'Agencies',
            link: '/page-2-2'
          }
        ]
      },
      {
        name: 'Pricing',
        link: '/page-3',
        subTitle: 'Pricing'
      },
      {
        name: 'Tools',
        link: '/page-4',
        subTitle: 'Tools'
      },
      {
        name: 'Blog',
        link: '/page-5',
        subTitle: 'Blog'
      },
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `hexometer`,
        short_name: `hexometer`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, 
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `6dvxjkrk98yi`,
        accessToken: '41VRtJgPF68Zx_cg9rjcKSvf0o795tHZHgnx2nLqaB4',
      },
    },
  ],
}
