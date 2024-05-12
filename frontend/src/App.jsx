import './App.scss'
import Navbar from './shared/Navbar/Navbar'
import Footer from './shared/Footer/Footer'
import { Outlet, useNavigation } from 'react-router-dom'

function App() {

  const navigation = useNavigation();

  return (
    <>
      {navigation.state === "loading" && <h1>Loading...</h1>}
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
