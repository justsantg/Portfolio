import { Route, Routes } from 'react-router-dom';

import Header from './components/header';
import Home from './screens/Home';


function App() {
  return (
    <main className='flex flex-row w-screen h-screen bg-app-white font-roboto'>
    
      <section className='flex-1 grid grid-rows-[auto_1fr_auto]'>
        <Header />

        
        <section className='bg-red-300'>
          <Routes>
            <Route path='/' element={<Home />} />
            
          </Routes>
        </section>

        

      </section>
    </main>
  );
}

export default App;
