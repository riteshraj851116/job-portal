import React from 'react';
import './Home.css'; // Import the CSS file

function Home() {
  const jobImage = 'https://images.unsplash.com/photo-1593377202145-c5e97fd065f4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE0fHxqb2J8ZW58MHwxfDB8fHww'; // Online image URL

  return (
    <div className="home">
      <div className="text-container">
        <h1>Find your Dream Job</h1>
        <p>
          Undoubtedly one of the most popular and comprehensive job portals in India. 
          Find the best job boards and recruitment sites to advance your career or grow your team.
        </p>
      </div>
      <img src={jobImage} alt="Job Search" className="home-image" /> {/* Add the image */}
    </div>
  );
}

export default Home;
