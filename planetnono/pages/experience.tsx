import React from 'react';
import '/src/app/styles.css';
import Navbar from './_navbar';

const Experience: React.FC = () => {
  return (
    <div>
      <Navbar />
        <div className='Experience'>
        <h1>Experience</h1>
          <div className='codeNetworkExp' >
          <div className='headerCodeNetworkExp'>
            <h3>Marketing Coordinator</h3>
            <p>Code Network</p>
            <p>October 2023 - Present</p>
          </div>
          <ul>
            <p>As the Marketing Coordinator of Code Network, I am head of the marketing division of the club and 
              generally tasked to do the following:</p>
            <li>Creating any graphic publication material that the club needs.</li>
            <li>Coordinating with different teams on how to promote events and come up with the promotional material they need.</li>
            <li>Assigning tasks to people in the socials team.</li>
            <li>Staying updated with current design trends and marketing strategies to keep the club’s promotional materials fresh and appealing.</li>
            <li>Keeping intact the Club’s branding when creating graphics.</li>
          </ul>
               
          </div>
          <div className='planetNonoExp' >
          <h3>Online Shop Manager</h3>
          <p>Planet Nono</p>
          <p>May 2021 - September 2021</p>
          <ul>
            <p>This was an online shop I managed through instagram where I would sell
                secondhand clothes. In managing this shop, I had the duties and responsibility to do
                the following:</p>
            <li>Updating product listings, and ensuring accurate product descriptions and pricing.</li>
            <li>Managing the shop’s Instagram page by posting graphics created in Canva and/or Photoshop.</li>
            <li>Photographing the product listings and editing the photos.</li>
          </ul>
          </div>
        
           <h1>Education</h1>

      
          <h3>Bachelor of Information Technology Student</h3>
          <p>Queensland University of Technology</p>
          <p>July 2022 - Present</p>
          <ul>
            <p>I am currently pursuing a degree majoring in Computer Science with an anticipated graduation date in 2025. 
              Throughout my academic journey, I have diligently completed a series of courses that align closely with my skillset and professional aspirations. 
              Some of the key units that I've undertaken include:
            </p>
            <li>CAB230: Web Computing</li>
            <li>CAB210: User Experience Fundamentals</li>
            <li>IFB103: IT Systems Design</li>
            <li>IFB104: Building IT Systems</li>
            <li>IFB105: Database Management</li>
          </ul>
        
       </div>
    </div>
  );
};

export default Experience;
