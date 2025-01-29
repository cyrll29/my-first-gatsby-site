import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

type SiteMetadata = {
    title: string;
}

export const useSiteMetadata = (): SiteMetadata => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return data.site.siteMetadata
}