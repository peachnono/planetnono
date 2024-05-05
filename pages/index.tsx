import React from 'react';
import '/src/app/styles/styles.css';
import Navbar from './_navbar';
import Portfolio from './portfolio';
import Footer from './_footer';  // Import Footer component

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div id='headline' className='headline loudFont'>
          <h1>Nicole Hordejan</h1>
          <div className='line babydoll-font'>
            <p>Designer and Developer</p>
          </div>
          <div id='intro' className='intro babydoll-font'>
            <p>
              Hi! Welcome to my website. I'm currently a Computer Science student at Queensland University of Technology, 
              with a strong background in graphic design and some experience in web development. I have a passion in designing 
              and development. I'm aiming to combine these two interests to flexibly be a designer/developer.
            </p>
          </div>
        </div>
        <div id='skills' className='skills'>
          {/* Your skills content here */}
        </div>
        <div id='Projects' className='Projects'>
          <Portfolio />
        </div>
      </main>
      <Footer />  {/* Use Footer component */}
    </div>
  );
};

export default Home;
