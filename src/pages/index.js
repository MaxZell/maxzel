import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Header from "../components/Header"
import Work from "../components/Work"
import About from "../components/about"
import Footer from "../components/Footer"

const IndexPage = () => (
  <Layout>
    <SEO title="MaxZel Portfolio" />
    <Header></Header>
    <Work></Work>
    <About></About>
    <Footer></Footer>
  </Layout>
)

export default IndexPage
