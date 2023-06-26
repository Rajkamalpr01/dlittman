import Footer from "../Footer"
import Header from "../Header"
import Sidebar from "../sidebar"

interface masterPageProps {
  children: any
}

const Layout = ({ children }: masterPageProps) => {
  return (
    <>
      <Header />
      <div className='main-container'>
        <Sidebar />
        <div className='sub-container'>
          {children}
          <Footer />
        </div>
      </div>
    </>
  )
}
export default Layout
