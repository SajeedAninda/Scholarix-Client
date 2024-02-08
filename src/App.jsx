import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import Homepage from './Pages/Homepage/Homepage'
import ScrollToTop from './Components/Scroll/Scroll To Top/ScrollToTop'
import { useEffect, useState } from 'react'
import { Hourglass } from 'react-loader-spinner'

function App() {

  let [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false)
    }, 3500);

  }, [])

  return (
    <>
      {
        loading ?
          <div className='flex flex-col gap-3 justify-center min-h-screen items-center'>
            <Hourglass
              visible={true}
              height="80"
              width="80"
              ariaLabel="hourglass-loading"
              wrapperStyle={{}}
              wrapperClass=""
              colors={['#ed4747', '#0e2b45']}
            />
            <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold text-[#ed4747]'>Scholarix</h1>
          </div>
          :
          <div>
            <ScrollToTop></ScrollToTop>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
          </div>
      }

    </>
  )
}

export default App
