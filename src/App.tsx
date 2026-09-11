

import { ToastContainer } from 'react-toastify';
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Layout/Navbar'
import Technologies from './Components/Technologies/Technologies'
import Footer from './Components/Layout/Footer';


function App() {
  

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Technologies />
      </main>

      <Footer />

      <ToastContainer
        position='top-right'
        autoClose={2500}
        closeOnClick
        pauseOnHover
      />
    </>
  );
}

export default App
