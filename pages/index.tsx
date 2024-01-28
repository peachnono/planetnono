// pages/index.tsx
import React from 'react';
import '/src/app/styles.css';
import Navbar from './_navbar';// Update the import path

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div className='headline'>
        <h1>Nicole Hordejan </h1>
        <p>Designer and Developer </p>
        </div>
        <div className='intro'>
        <section>
          <h3>I help people make their vision a digital reality</h3>
          <p>
          Hi! Welcome to my website. I'm currently a Computer Science student at Queensland University of Technology, 
          with a strong background in graphic design and some experience in web development. I have a passion in designing 
          and development. I'm aiming to combine these two interests to flexibly be a designer/developer in the future.
          </p>
        </section>
        </div>
        <div className='skills'>
        <section>
          <h3>What I can do</h3>
          <p>Here are some of the skills that I have learnt and developed over the years.</p>
          <div className='skillsBox'>
            <h4>Graphic Design</h4>
            <img className="graphic-image" src="/images/gicon1.png" alt="Graphic Design 1" />
            <img className="graphic-image" src="/images/gicon2.svg" alt="Graphic Design 2" />

            <h4> Web Design and Web Development</h4>
            <img className='web-image' src="/images/wicon1.png" alt="Web Development 1" />
            <img className='web-image' src="/images/wicon2.png" alt="Web Development 2" />
            <img className='web-image' src="/images/wicon3.png" alt="Web Development 3" />
            <img className='web-image' src="/images/next.svg" alt="Web Development 4" />
            <img className='web-image' src="/images/wicon4.png" alt="Web Development 5" />
          </div>
        </section>
        </div>
        <div className='contacts'>
        <section>
          <h3>Contact Me</h3>
          <p>Feel free to contact me if you have any questions or inquiries.</p>
          <p><img className='contact-image' src="/images/email.png" alt="Email" />
            <a href="mailto:your.email@example.com">nhordejan@gmail.com</a></p>
          <p><img className='contact-image' src="/images/discord.png" alt="Discord" />niikawl</p>
          <p><img className='contact-image' src="/images/github.png" alt="Phone" />
              61414945443</p>          
        </section>
        </div>
      </main>
    </div>
  );
};

export default Home;
