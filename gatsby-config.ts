import type { GatsbyConfig } from "gatsby"
import { title } from "process"

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://www.gogogo.tld`,
    title: "My Gatsby Site"
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blogs`,
        path: `${__dirname}/blogs`
      },
    },
    "gatsby-plugin-mdx",
  ],
}

export default config
