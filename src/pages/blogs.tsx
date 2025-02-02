import * as React from 'react'
import { graphql, PageProps } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

interface BlogPageData {
    allFile: {
        nodes: Array<{name: string}>
    }
}

const BlogPage: React.FC<PageProps<BlogPageData>> = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
        <ul>
            {
                data.allFile.nodes.map((node) => (
                    <li key={node.name}>{node.name}</li>
                ))
            }
        </ul>
    </Layout>
  )
}

export const query = graphql`
    query {
        allFile(filter: {sourceInstanceName: {eq: "blogs"}}) {
            nodes {
                name
            }
        }
    }
`

export const Head = () => <Seo title='My Blog Posts'/>

export default BlogPage