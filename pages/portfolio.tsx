import React, { useState } from 'react';
import ImageGallery from './_gallery';
import '/src/app/styles.css';
import Navbar from './_navbar';

const Portfolio: React.FC = () => {
  const [graphicalDesignClicked, setGraphicalDesignClicked] = useState(false);
  const [webDesignClicked, setWebDesignClicked] = useState(false);

  const [codeNetworkClicked, setCodeNetworkClicked] = useState(false);
  const [arcMigrationClicked, setArcMigrationClicked] = useState(false);

  const [movieRepositoryClicked, setMovieRepositoryClicked] = useState(false);

  const ArcImages = ['arc1.png', 'arc2.png', 'arc3.PNG', 'arc4.JPG', 'arc5.JPG'];
  const CodePros = ['code1.jpg', 'code2.jpg', 'code3.jpg', 'code4.jpg', 'code5.jpg', 'code6.jpg', 'code7.jpg', 'code8.jpg', 'code9.jpg', 'code10.jpg'];
  const CodeSoc = ['codesoc1.gif', 'codesoc2.jpg', 'codesoc3.png'];
  const webSite = ['Picture1.png', 'Picture2.png', 'Picture3.png'];

  return (
    <div className='portfolio'>
      <Navbar />
      <div>
        <h1>Portfolio</h1>
        <div className='graphicDes'>
        <h2 className={`graphicDes ${graphicalDesignClicked ? 'clicked' : ''}`} onClick={() => setGraphicalDesignClicked(!graphicalDesignClicked)}>
          Graphical Design
        </h2>
        {graphicalDesignClicked && (
          <div>
        <div className='codeNetwork' onClick={() => setCodeNetworkClicked(!codeNetworkClicked)}>
          <h3>Code Network</h3>
          {codeNetworkClicked && (
            <>
              <p>These are a few examples of my contributions to Code Network, including the Sponsor Prospectus, banner, and various social media posts.</p>
              <h4>Sponsor Prospectus</h4>
              <ImageGallery images={CodePros} />

              <h4>Promotional Material</h4>
              <ImageGallery images={CodeSoc} />
            </>
          )}
        </div>

        <div className='arcMigration' onClick={() => setArcMigrationClicked(!arcMigrationClicked)}>
          <h3>Arc Migration</h3>
          {arcMigrationClicked && (
            <>
              <p>These are some social media posts that I was commissioned to do for their business.</p>
              <ImageGallery images={ArcImages} />
            </>
          )}
        </div>

          </div>
        )}
        </div>
        <div className='webDes'>
        <h2 className={`webDesign ${webDesignClicked ? 'clicked' : ''}`} onClick={() => setWebDesignClicked(!webDesignClicked)}>
          Web Design and Web Development
        </h2>
        
        {webDesignClicked && (
          <div className='movieRepository' onClick={() => setMovieRepositoryClicked(!movieRepositoryClicked)}>
          <h3>Movie Repository</h3>

          {movieRepositoryClicked && (
            <div>
            <p>
              As part of my web computing class, I was tasked to create a website for both the client and server side. The website's mission is to provide a comprehensive repository of information on carefully curated movies released since 1990.
            </p>
            
            <p>
              Leveraging a published REST API, the platform draws data from esteemed sources like IMDB, Metacritic, and RottenTomatoes. Users can explore the movie catalog, gaining insights into plot summaries, production team details, and ratings from reputable websites.
            </p>
            
            <p>
              Registered users enjoy additional privileges, accessing information about cast and crew, including details about their other works and IMDB ratings for those movies. To elevate the user experience, React modules such as Ag-grid and Chart.js were seamlessly integrated, facilitating a clean and efficient display of data.
            </p>
            
            <p>
              This project not only underscores my proficiency in web development but also highlights my capability to seamlessly integrate external APIs and employ modern front-end technologies for an engaging and informative user experience.
            </p>
            
            <p>
              You can find the full client-side report of the website here: <a href="/report.pdf" target="_blank" rel="noopener noreferrer">Client Side Website Report</a>
            </p>
            
            <ImageGallery images={webSite} />
            </div>
            )}
          </div>
        )}
      </div>
    </div>
    </div>
    );
    };
export default Portfolio;