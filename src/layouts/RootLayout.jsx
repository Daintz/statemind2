import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import { Outlet } from 'react-router-dom'

export default function RootLayout () {
  return (
    <div>
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  )
}
