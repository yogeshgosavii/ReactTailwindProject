import React from 'react';
import Header from "./components/Header";
import Container from './components/Container';
import Footer from './components/Footer';

function App() {
  return (
   <div className="overflow-x-hidden flex flex-col min-h-screen">
      <Header />
      <div className='flex-1'>
        <Container />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
