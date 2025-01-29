import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../components/seo';

const indexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
       alt='A pitbull'
       src='https://media.istockphoto.com/id/513392620/photo/big-dog.jpg?s=612x612&w=0&k=20&c=YgiuJ9_3LGYwHB40IVMnjwv8p-4RCFLwcD-yJAOYAGE='
      />
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

export default indexPage;