import { Route, Routes } from 'react-router-dom';

import Header from './components/header';
import HomePage from './screens/homePage';
import AboutMe from './screens/aboutMe';
import Portfolio from './screens/portfolio';
import Skills from './screens/skills';
import Contact from './screens/contact';



function App() {
  return (
    <main className='flex flex-row w-screen h-screen bg-app-white font-roboto'>
    
      <section className='flex-1 grid grid-rows-[auto_1fr_auto]'>
        <Header />

        
        <section className='bg' style={{background : '#dcc9ac'}}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/aboutMe' element={<AboutMe />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/habilidades' element={<Skills />} />
            <Route path='/contacto' element={<Contact />} />



            
          </Routes>
        </section>

        

      </section>
    </main>
  );
}

export default App;
