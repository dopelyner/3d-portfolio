import { BrowserRouter } from 'react-router-dom'

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas
} from './components'

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary sm:overflow-x-hidden overflow-x-hidden'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Tech />
          <Works />
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
