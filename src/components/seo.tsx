import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { useSiteMetadata } from '../hooks/useSiteMetadata'

const Seo = ({ title }: { title: string }) => {
  const data = useSiteMetadata()
  
  return (
    <title>{title} | {data.title}</title>
  )
}

export default Seo