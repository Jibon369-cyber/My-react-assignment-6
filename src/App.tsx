

import { ToastContainer } from 'react-toastify';
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Layout/Navbar'
import Technologies from './Components/Technologies/Technologies'


function App() {
  

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Technologies />
      </main>

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
