import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "@components/layout"
import SEO from "@components/seo"
import Newsletter from "@components/newsletter"
import reshadzazaiAvatar from "@assets/reshadzazai-avatar.jpg"

class IndexIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const siteDescription = data.site.siteMetadata.description

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteDescription} />
        <div className="relative py-8 bg-white overflow-hidden">
          <img
            className="rounded-full h-48 h-48 lg:h-64 lg:w-64 mx-auto"
            src={reshadzazaiAvatar}
            alt="Reshad Zazai"
          />
          <h1 className="mb-8 text-3xl text-center font-extrabold tracking-tight text-gray-900 sm:text-5xl pb-4">
            Hey, I'm Reshad!{" "}
            <span role="img" aria-label="Wave">
              👋
            </span>
          </h1>
          <div className="prose text-gray-700 prose-lg">
            <p>
              I’ve been following Magento since 2016.
              Before Magento, I was an experienced PHP developer.
            </p>
            <p>
              Once I started developing full time in Magento, around version
              1.9, I quickly realized this framework was special, and wanted to
              learn everything about it.
            </p>
            <p>
              Keep coding,
              <br />- Reshad
            </p>
          </div>
        </div>
        <Newsletter />
      </Layout>
    )
  }
}

export default IndexIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`
