import React from 'react';
import './Jobs.css';

function Jobs() {
 
  const jobs = [
    {
      jobName: "Software Engineer",
      jobPosition: "Full Stack Developer",
      salary: 80000,
      location: "New York, NY",
      phoneNumber: "123-456-7890"
    },
    {
      jobName: "Data Scientist",
      jobPosition: "Data Analyst",
      salary: 75000,
      location: "San Francisco, CA",
      phoneNumber: "987-654-3210"
    },
    {
      jobName: "Product Manager",
      jobPosition: "Senior Product Manager",
      salary: 90000,
      location: "Austin, TX",
      phoneNumber: "555-123-4567"
    },
    {
      jobName: "UX Designer",
      jobPosition: "Lead UX Designer",
      salary: 70000,
      location: "Chicago, IL",
      phoneNumber: "444-567-8901"
    },
    {
      jobName: "DevOps Engineer",
      jobPosition: "Cloud Engineer",
      salary: 85000,
      location: "Seattle, WA",
      phoneNumber: "333-678-9012"
    },
    {
      jobName: "Frontend Developer",
      jobPosition: "React Developer",
      salary: 75000,
      location: "Los Angeles, CA",
      phoneNumber: "555-111-2222"
    },
    {
      jobName: "Backend Developer",
      jobPosition: "Node.js Developer",
      salary: 72000,
      location: "Boston, MA",
      phoneNumber: "666-222-3333"
    },
    {
      jobName: "Project Manager",
      jobPosition: "IT Project Manager",
      salary: 95000,
      location: "Dallas, TX",
      phoneNumber: "777-333-4444"
    },
    {
      jobName: "Graphic Designer",
      jobPosition: "Creative Designer",
      salary: 60000,
      location: "Miami, FL",
      phoneNumber: "888-444-5555"
    },
    {
      jobName: "Web Developer",
      jobPosition: "PHP Developer",
      salary: 70000,
      location: "Atlanta, GA",
      phoneNumber: "999-555-6666"
    },
    {
      jobName: "Mobile Developer",
      jobPosition: "iOS Developer",
      salary: 85000,
      location: "Seattle, WA",
      phoneNumber: "101-234-5678"
    },
    {
      jobName: "Cloud Architect",
      jobPosition: "AWS Specialist",
      salary: 120000,
      location: "San Jose, CA",
      phoneNumber: "202-345-6789"
    },
    {
      jobName: "Business Analyst",
      jobPosition: "Data Analyst",
      salary: 77000,
      location: "Philadelphia, PA",
      phoneNumber: "303-456-7890"
    },
    {
      jobName: "SEO Specialist",
      jobPosition: "Search Engine Optimization",
      salary: 65000,
      location: "Phoenix, AZ",
      phoneNumber: "404-567-8901"
    },
    {
      jobName: "Database Administrator",
      jobPosition: "DBA",
      salary: 90000,
      location: "Houston, TX",
      phoneNumber: "505-678-9012"
    },
    {
      jobName: "Data Engineer",
      jobPosition: "Big Data Engineer",
      salary: 95000,
      location: "San Diego, CA",
      phoneNumber: "606-789-0123"
    },
    {
      jobName: "System Administrator",
      jobPosition: "IT Support",
      salary: 70000,
      location: "Orlando, FL",
      phoneNumber: "707-890-1234"
    },
    {
      jobName: "Network Engineer",
      jobPosition: "Network Administrator",
      salary: 80000,
      location: "Detroit, MI",
      phoneNumber: "808-901-2345"
    },
    {
      jobName: "Cybersecurity Analyst",
      jobPosition: "Information Security Analyst",
      salary: 95000,
      location: "Washington, DC",
      phoneNumber: "909-012-3456"
    },
    {
      jobName: "Game Developer",
      jobPosition: "Unity Developer",
      salary: 85000,
      location: "Los Angeles, CA",
      phoneNumber: "101-123-4567"
    },
    {
      jobName: "Artificial Intelligence Engineer",
      jobPosition: "AI Specialist",
      salary: 110000,
      location: "New York, NY",
      phoneNumber: "202-234-5678"
    },
    {
      jobName: "Machine Learning Engineer",
      jobPosition: "ML Specialist",
      salary: 105000,
      location: "San Francisco, CA",
      phoneNumber: "303-345-6789"
    },
    {
      jobName: "DevOps Engineer",
      jobPosition: "Site Reliability Engineer",
      salary: 95000,
      location: "Austin, TX",
      phoneNumber: "404-456-7890"
    },
    {
      jobName: "Blockchain Developer",
      jobPosition: "Cryptocurrency Developer",
      salary: 120000,
      location: "Denver, CO",
      phoneNumber: "505-567-8901"
    },
    {
      jobName: "Content Writer",
      jobPosition: "Technical Writer",
      salary: 60000,
      location: "Seattle, WA",
      phoneNumber: "606-678-9012"
    },
    {
      jobName: "Digital Marketing Specialist",
      jobPosition: "Social Media Manager",
      salary: 65000,
      location: "Chicago, IL",
      phoneNumber: "707-789-0123"
    },
    {
      jobName: "Quality Assurance Engineer",
      jobPosition: "QA Analyst",
      salary: 70000,
      location: "Miami, FL",
      phoneNumber: "808-890-1234"
    },
    {
      jobName: "Technical Support Engineer",
      jobPosition: "IT Support Specialist",
      salary: 65000,
      location: "Phoenix, AZ",
      phoneNumber: "909-901-2345"
    },
    {
      jobName: "Research Scientist",
      jobPosition: "Lab Technician",
      salary: 90000,
      location: "Boston, MA",
      phoneNumber: "101-234-5678"
    },
    {
      jobName: "Sales Executive",
      jobPosition: "Sales Representative",
      salary: 75000,
      location: "Los Angeles, CA",
      phoneNumber: "202-345-6789"
    },
    {
      jobName: "Customer Success Manager",
      jobPosition: "Account Manager",
      salary: 80000,
      location: "Atlanta, GA",
      phoneNumber: "303-456-7890"
    },
    {
      jobName: "HR Manager",
      jobPosition: "Human Resources Manager",
      salary: 90000,
      location: "Dallas, TX",
      phoneNumber: "404-567-8901"
    },
    {
      jobName: "Video Editor",
      jobPosition: "Film Editor",
      salary: 65000,
      location: "Miami, FL",
      phoneNumber: "505-678-9012"
    },
    {
      jobName: "Data Entry Clerk",
      jobPosition: "Administrative Assistant",
      salary: 40000,
      location: "Chicago, IL",
      phoneNumber: "606-789-0123"
    },
    {
      jobName: "Network Administrator",
      jobPosition: "IT Specialist",
      salary: 75000,
      location: "San Francisco, CA",
      phoneNumber: "707-890-1234"
    },
    {
      jobName: "Software Tester",
      jobPosition: "QA Tester",
      salary: 60000,
      location: "New York, NY",
      phoneNumber: "808-901-2345"
    },
    {
      jobName: "Cloud Consultant",
      jobPosition: "Cloud Solutions Architect",
      salary: 110000,
      location: "Seattle, WA",
      phoneNumber: "909-012-3456"
    },
    {
      jobName: "IT Consultant",
      jobPosition: "IT Advisor",
      salary: 100000,
      location: "San Diego, CA",
      phoneNumber: "101-234-5678"
    },
    {
      jobName: "Web Designer",
      jobPosition: "UI/UX Designer",
      salary: 70000,
      location: "Phoenix, AZ",
      phoneNumber: "202-345-6789"
    },
    {
      jobName: "Financial Analyst",
      jobPosition: "Finance Manager",
      salary: 80000,
      location: "Austin, TX",
      phoneNumber: "303-456-7890"
    },
    {
      jobName: "Product Owner",
      jobPosition: "Agile Product Owner",
      salary: 95000,
      location: "Chicago, IL",
      phoneNumber: "404-567-8901"
    },
    {
      jobName: "Marketing Manager",
      jobPosition: "Brand Manager",
      salary: 85000,
      location: "Los Angeles, CA",
      phoneNumber: "505-678-9012"
    },
    {
      jobName: "Supply Chain Manager",
      jobPosition: "Logistics Coordinator",
      salary: 75000,
      location: "New York, NY",
      phoneNumber: "606-789-0123"
    },
    {
      jobName: "Data Privacy Officer",
      jobPosition: "Compliance Officer",
      salary: 90000,
      location: "San Francisco, CA",
      phoneNumber: "707-890-1234"
    },
    {
      jobName: "E-commerce Specialist",
      jobPosition: "Online Sales Manager",
      salary: 70000,
      location: "Denver, CO",
      phoneNumber: "808-901-2345"
    },
    {
      jobName: "IT Auditor",
      jobPosition: "Internal Auditor",
      salary: 80000,
      location: "Austin, TX",
      phoneNumber: "909-012-3456"
    }
  ];
  

  return (
    <div className="jobs-container">
      <h1 className="jobs-title">Job Listings</h1>
      <ul className="jobs-list">
        {jobs.map((job, index) => (
          <li key={job.jobName} className="job-item">
            <h2 className="job-name">{job.jobName}</h2>
            <p className="job-position">Position: {job.jobPosition}</p>
            <p className="job-salary">Salary: ${job.salary}</p>
            <p className="job-location">Location: {job.location}</p>
            <p className="job-phone">Phone: {job.phoneNumber}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Jobs;
