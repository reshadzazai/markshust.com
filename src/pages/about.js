import React from "react"
import { graphql } from "gatsby"
import Layout from "@components/layout"
import SEO from "@components/seo"
import reshadzazaiAvatar from "@assets/reshadzazai-avatar.jpg"

class AboutPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="About" />
        <img
          className="rounded-full h-48 h-48 lg:h-64 lg:w-64 mx-auto"
          src={reshadzazaiAvatar}
          alt="Reshad Zazai"
        />
        <h1 className="mb-8 text-3xl text-center font-extrabold tracking-tight text-gray-900 sm:text-5xl pb-4">
          About Me
        </h1>
        <div className="prose text-gray-700 prose-lg mt-8">
          <p>
            My passion over the last decade has revolved entirely around
            Magento. Starting with the Magento 1.9, I've had a
            heavy interest in the Zend and Magento Frameworks, and have been
            devoted to eCommerce &amp; PHP for even longer (over 4 years!).
            I've held all positions within many organizations, ranging from
            junior developer to team lead.
          </p> 
        </div>
      </Layout>
    )
  }
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
