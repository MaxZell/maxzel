import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Header from "../components/Header"
import Traditional from "../components/Traditional"
import Digital from "../components/Digital"
import Animation from "../components/Animation"
import About from "../components/about"
import Footer from "../components/Footer"

const IndexPage = () => (
  <Layout>
    <SEO title="MaxZel Portfolio" />
    <Header></Header>
    <Traditional></Traditional>
    <Digital></Digital>
    <Animation></Animation>
    <About></About>
    <Footer></Footer>
  </Layout>
)

export default IndexPage
