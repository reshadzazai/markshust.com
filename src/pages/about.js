import React from "react"
import { graphql } from "gatsby"

import Layout from "@components/layout"
import SEO from "@components/seo"
import styled from "styled-components"
import markshustPhoto from "@assets/mark-640x960.jpg"

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 280px auto;
  @media only screen and (max-width: 768px) {
    grid-template-columns: auto;
  }
`

const StyledImage = styled.img`
  float: left;
  @media only screen and (max-width: 768px) {
    max-width: 180px;
    max-height: 270px;
  }
`

class AboutPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="About" />
        <h1>Hi there! I'm Mark</h1>
        <Wrapper>
          <div>
            <StyledImage
              src={markshustPhoto}
              alt="Mark Shust"
              width="250"
              height="375"
            />
          </div>
          <div class="lg:col-span-2 text-lg text-gray-600">
            <p class="mt-6">
              My passion over the last decade has revolved entirely around
              Magento. Starting with the early days of Magento 0.8, I've had a
              heavy interest in the Zend and Magento Frameworks, and have been
              devoted to eCommerce &amp; PHP for even longer (over 20 years!).
              I've held all positions within many organizations, ranging from
              junior developer to chief solution architect.
            </p>
            <p class="mt-4">
              During this time I've spoken at conferences such as{" "}
              <a
                class="text-blue-600"
                href="https://info2.magento.com/rs/magentosoftware/images/imagine2012-barcamp-hail-or-fail.pdf"
                target="_blank"
              >
                Magento Imagine
              </a>{" "}
              and{" "}
              <a
                class="text-blue-600"
                href="https://eventil.com/events/meet-magento-ny-2015/"
                target="_blank"
              >
                Meet Magento New York
              </a>
              , and have been very outspoken in regards to following accepted
              best practices for Magento.
            </p>
            <p class="mt-4">
              My numerous years of LAMP stack programming expertise have paved
              the way for me to become a{" "}
              <a
                class="text-blue-600"
                href="https://www.zend-zce.com/en/yellow-pages/ZEND014633"
                target="_blank"
              >
                Zend Certified Engineer
              </a>{" "}
              and{" "}
              <a
                class="text-blue-600"
                href="https://u.magento.com/certification/directory/dev/883/"
                target="_blank"
              >
                3x Magento Certified Developer
              </a>
              . I love open-source software, and have maintained{" "}
              <a
                class="text-blue-600"
                href="https://github.com/markshust/docker-magento"
                target='_blank"'
              >
                the most popular development environment for Magento
              </a>{" "}
              since the release of Magento 2.
            </p>
            <p class="mt-4">
              I'm married to my wonderful wife Juliann, and we are the proud
              parents of twin girls Lily and Brielle. I live in Northeast Ohio
              and love eating chipotle burritos, solving Rubik's cubes, driving{" "}
              <a
                class="text-blue-500"
                href="https://www.instagram.com/markshust/"
                target="_blank"
              >
                my 240sx
              </a>
              , and watching Cleveland Browns games.
            </p>
          </div>
        </Wrapper>
        <h2>Certifications</h2>
        <p>
          I hold a few certifications revolving around my focus of PHP and
          Magento:
        </p>
        <ul>
          <li>
            <a
              href="https://www.zend-zce.com/en/yellow-pages/ZEND014633"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zend Certified Engineer (PHP5)
            </a>
            <br />
            <em>(July 2010)</em>
          </li>
          <li>
            <a
              href="https://u.magento.com/certification/directory/dev/883/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Magento 1 Certified Developer Plus
            </a>
            <br />
            <em>(March 2012)</em>
          </li>
          <li>
            <a
              href="https://u.magento.com/certification/directory/dev/883/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Magento 2 Certified Solution Specialist
            </a>
            <br />
            <em>(February 2019)</em>
          </li>
          <li>
            <a
              href="https://u.magento.com/certification/directory/dev/883/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Magento 2 Certified Associate Developer
            </a>
            <br />
            <em>(April 2019)</em>
          </li>
        </ul>
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
