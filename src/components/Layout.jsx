'use client'
import  Footer  from './Footer'
import Header from './Header'

const Layout = props => (
  <div>
    {/* <Header /> */}
    <div className="py-12">{props.children}</div>
    {/* <Footer /> */}
  </div>
)

export default Layout
