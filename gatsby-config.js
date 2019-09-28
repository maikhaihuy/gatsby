module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
  ],
  pathPrefix: "/gatsby",
  // Customize your site metadata:
  siteMetadata: {
    title: `Sometimes I wanne see me`,
    author: `Mai Huy`,
    description: `Fucking awesome belong with me`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/maikhaihuy`,
      },
      {
        name: `github`,
        url: `https://github.com/maikhaihuy`,
      },
    ],
  },
}
