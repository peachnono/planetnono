import React, { useState } from 'react';
import ImageGallery from './_gallery';
import '/src/app/styles/portfolio.css';
import Navbar from './_navbar';

const Portfolio: React.FC = () => {

  return (
    <div className='portfolio'>
      <div id='portfolio' className='loudFont'>
        <h1>Projects</h1>
        <div className='codeNetwork'>
        <h2>Code Network (2023 - Present)</h2>
        <p className='babydollFont'>As the Marketing Coordinator, I handle content editing for our social media and sponsor communications. Below is an example of some of the work I do.</p>
        <div className='codeNetworkImages'>
        <img src="/images/codesoc2.jpg" alt="Code Network" />
        <img src="/images/code1.jpg" alt="Code Network" />
        <img src="/images/codesoc1.gif" alt="Code Network" />
        </div>
        </div>
        <div className='STIMulate'>
        <h2>STIMulate Workshop Resource (Present)</h2>
        <p className='babydollFont'>This is a site I made as a supplementary resource for the workshops of STIMulate. You can visit the site here: <a href='https://helpifb104.github.io/'>https://helpifb104.github.io/</a></p>
        <div className='STIMulateImages'>
        <img src="/images/Workshop.png" alt="Code Network" />
        </div>
        </div>
    </div>
</div>
  );
};
export default Portfolio;