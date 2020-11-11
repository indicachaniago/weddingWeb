module.exports = {
  siteMetadata: {
    title: "Dica & Debby",
    description: "Happy Wedding",
    author: "makairaindica"
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "data"
      }
    },
    {
      resolve: "gatsby-transformer-json",
      options: {
        typeName: "Event"
      }
    }
  ]
};
