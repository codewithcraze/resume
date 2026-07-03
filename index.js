const express = require('express');
const app = express();
require('dotenv').config();


app.get('/', (req, res) => {

    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Deepak Chaudhary - Resume</title>
<style>
  :root{
    --ink:#1a1a1a;
    --sub:#4a4a4a;
    --accent:#1f5c4c;
    --line:#d8d8d2;
    --bg:#ffffff;
  }
  *{margin:0;padding:0;box-sizing:border-box;}
  body{
    font-family:'Georgia','Times New Roman',serif;
    color:var(--ink);
    background:var(--bg);
    line-height:1.5;
  }
  .page{
    max-width:800px;
    margin:0 auto;
    padding:26px 44px 30px;
  }
  header{
    text-align:center;
    margin-bottom:12px;
    padding-bottom:10px;
    border-bottom:2px solid var(--ink);
  }
  h1{
    font-size:23px;
    letter-spacing:.8px;
    font-weight:700;
    text-transform:uppercase;
    margin-bottom:4px;
  }
  .contact{
    font-family:Arial, Helvetica, sans-serif;
    font-size:11px;
    color:var(--sub);
    letter-spacing:.2px;
  }
  .contact a{color:var(--sub);text-decoration:none;}
  .contact span{margin:0 5px;color:var(--line);}

  section{margin-bottom:10px;}
  h2{
    font-family:Arial, Helvetica, sans-serif;
    font-size:11.5px;
    text-transform:uppercase;
    letter-spacing:1.2px;
    color:var(--accent);
    border-bottom:1px solid var(--ink);
    padding-bottom:2px;
    margin-bottom:6px;
  }
  .summary{
    font-size:12px;
    color:#222;
    text-align:justify;
    line-height:1.4;
  }

  .skills-grid{
    font-family:Arial, Helvetica, sans-serif;
    font-size:11px;
    line-height:1.4;
  }
  .skills-grid div{
    margin-bottom:3px;
  }
  .skills-grid b{
    color:var(--ink);
  }

  .entry{margin-bottom:8px;}
  .entry:last-child{margin-bottom:0;}
  .entry-head{
    display:flex;
    justify-content:space-between;
    align-items:baseline;
    flex-wrap:wrap;
  }
  .role{
    font-size:12.5px;
    font-weight:700;
  }
  .date{
    font-family:Arial, Helvetica, sans-serif;
    font-size:10.5px;
    color:var(--sub);
    white-space:nowrap;
  }
  .org{
    font-style:italic;
    font-size:11.5px;
    color:var(--sub);
    margin-bottom:3px;
  }
  ul{
    padding-left:16px;
  }
  li{
    font-size:11.3px;
    margin-bottom:2px;
    text-align:justify;
    line-height:1.38;
  }

  .proj-title{
    font-size:12px;
    font-weight:700;
    margin-bottom:0;
  }
  .proj-stack{
    font-family:Arial, Helvetica, sans-serif;
    font-size:10.3px;
    color:var(--accent);
    font-style:italic;
    margin-bottom:3px;
  }

  .edu-entry{
    display:flex;
    justify-content:space-between;
    align-items:baseline;
    flex-wrap:wrap;
    margin-bottom:5px;
  }
  .edu-entry:last-child{margin-bottom:0;}
  .edu-left b{font-size:12px;}
  .edu-left div.school{font-style:italic;font-size:11px;color:var(--sub);}
  .edu-date{
    font-family:Arial, Helvetica, sans-serif;
    font-size:10.5px;
    color:var(--sub);
  }

  @media print{
    .page{padding:18px 30px;}
    body{-webkit-print-color-adjust:exact;print-color-adjust:exact;}
  }
  @media (max-width:600px){
    .page{padding:18px 16px;}
    .entry-head, .edu-entry{flex-direction:column;}
    .date, .edu-date{margin-top:1px;}
  }
</style>
</head>
<body>
<div class="page">

  <header>
    <h1>Deepak Chaudhary</h1>
    <div class="contact">
      +91-7037913778 <span>|</span> Noida, Uttar Pradesh, India <span>|</span>
      <a href="mailto:codewithdeepak.in@gmail.com">codewithdeepak.in@gmail.com</a> <span>|</span>
      <a href="#">LinkedIn</a>
    </div>
  </header>

  <section>
    <h2>Summary</h2>
    <p class="summary">I am a full-stack MERN developer with around 3 years of experience in building scalable web applications, integrating third-party APIs, and developing CRM systems. I have strong experience with Node.js, React, and modern backend architectures, along with hands-on experience working with SQL and NoSQL databases (MySQL, MongoDB), and integrating SOAP/XML and REST APIs. I bring strong travel-domain expertise with proven experience across all major GDS and airline systems.</p>
  </section>

  <section>
    <h2>Technical Skills</h2>
    <div class="skills-grid">
      <div><b>Programming Languages:</b> JavaScript (ES6+), C++, HTML5, CSS3</div>
      <div><b>Frontend Technologies:</b> React.js, Next.js, Tailwind CSS, Bootstrap</div>
      <div><b>Backend &amp; Frameworks:</b> Node.js, Express.js, RESTful APIs, Socket, MVC Architecture</div>
      <div><b>Databases:</b> MySQL, MongoDB</div>
      <div><b>Integration &amp; Formats:</b> Built AI-powered chatbots and real-time chat applications by integrating the ChatGPT APIs and Claude, implementing MCP Server, WebSockets/Socket.IO, third-party APIs, and handling JSON, REST, and SOAP/XML data formats.</div>
      <div><b>Cloud &amp; Deployment:</b> EC2, S3, Lambda, API Gateway, IAM, CloudWatch, Route 53, CloudFront, RDS, Hostinger, GoDaddy.</div>
      <div><b>Tools:</b> Git, GitHub, Postman, VS Code</div>
      <div><b>Core Strengths:</b> API Integration, Problem Solving, Debugging, Performance Optimization, Clean &amp; Scalable Code</div>
    </div>
  </section>

  <section>
    <h2>Experience</h2>
    <div class="entry">
      <div class="entry-head">
        <span class="role">Full-Stack MERN Developer</span>
        <span class="date">Jan 2024 – Present</span>
      </div>
      <div class="org">SNVA TravelTech (Travomint.com), Noida</div>
      <ul>
        <li>Integrated major GDS platforms — Amadeus, Sabre, and Travelport — having SOAP/XML and REST APIs for real-time flight search, booking, ticketing, and cancellations.</li>
        <li>Integrated multiple third-party supplier APIs, including consolidators such as Atlas, Aeroprime, and Yatra, along with airline APIs like Indigo and Jazeera Airways, contributing to 50%+ revenue growth.</li>
        <li>Integrated travel insurance APIs to enable seamless insurance selection and issuance during booking flows.</li>
        <li>Designed and developed a custom CRM system for managing travel packages, agents, customers, offers, and bookings.</li>
        <li>Built and optimized RESTful backend services using Node.js and Express.js, with data persistence in MySQL and MongoDB.</li>
        <li>Developed an AI-powered customer support chatbot using the ChatGPT API to automate customer query resolution.</li>
        <li>Built a real-time chat system using Socket.IO, enabling users to communicate with support agents when AI assistance could not resolve their queries.</li>
        <li>Implemented seamless AI-to-agent handoff, preserving conversation context and chat history for a smooth customer support experience.</li>
        <li>Followed clean coding practices, proper HTTP status handling, logging, and structured error management for production-ready systems.</li>
      </ul>
    </div>
  </section>

  <section>
    <h2>Projects</h2>

    <div class="entry">
      <div class="proj-title">AI-Powered Customer Support Platform</div>
      <div class="proj-stack">Node.js, Express.js, React.js, MongoDB, Socket.IO, ChatGPT API</div>
      <ul>
        <li>Developed an AI-powered customer support platform by integrating the ChatGPT API to automate customer query resolution.</li>
        <li>Built a real-time chat system using Socket.IO, enabling seamless communication between customers and support agents.</li>
        <li>Implemented intelligent AI-to-agent handoff, preserving conversation context and chat history when AI could not resolve user queries.</li>
        <li>Designed scalable backend APIs with secure authentication, session management, and persistent chat storage.</li>
      </ul>
    </div>

    <div class="entry">
      <div class="proj-title">GDS Flight Booking System</div>
      <div class="proj-stack">Node.js, Express.js, MongoDB, SOAP/XML, REST APIs</div>
      <ul>
        <li>Integrated all three major GDS platforms — Amadeus, Sabre, and Travelport — for real-time flight search, pricing, booking, ticketing, and cancellations.</li>
        <li>Implemented SOAP/XML and REST API integrations for availability, fare rules, PNR creation, and ticket issuance workflows.</li>
        <li>Designed scalable backend services with optimized database queries to ensure high performance and reliability.</li>
      </ul>
    </div>

    <div class="entry">
      <div class="proj-title">Consolidator &amp; Airline API Integration Platform</div>
      <div class="proj-stack">Node.js, Express.js, REST APIs</div>
      <ul>
        <li>Integrated multiple consolidator APIs, including Atlas, Aeroprime, and Yatra, along with airline APIs such as Indigo and Jazeera Airways.</li>
        <li>Developed unified search and booking workflows to normalize data across multiple suppliers.</li>
        <li>Improved fare coverage and booking success rates by aggregating multiple suppliers into a single platform.</li>
      </ul>
    </div>

    <div class="entry">
      <div class="proj-title">Travel Package CRM System</div>
      <div class="proj-stack">Node.js, Express.js, React.js, MySQL, MongoDB, REST APIs</div>
      <ul>
        <li>Designed and developed a custom CRM for managing travel packages, destinations, agents, customers, offers, and bookings.</li>
        <li>Implemented role-based access control with secure authentication for administrators and agents.</li>
        <li>Developed RESTful backend services for package management, pricing, booking, and customer tracking.</li>
      </ul>
    </div>
  </section>

  <section>
    <h2>Education</h2>
    <div class="edu-entry">
      <div class="edu-left">
        <b>Bachelor of Computer Applications (BCA)</b>
        <div class="school">School of Business Management and Technology</div>
      </div>
      <div class="edu-date">2020 – 2023</div>
    </div>
    <div class="edu-entry">
      <div class="edu-left">
        <b>Intermediate (12th)</b>
        <div class="school">Maharaja Agrasen Public School</div>
      </div>
      <div class="edu-date">2019 – 2020</div>
    </div>
  </section>

</div>
</body>
</html>`)

})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("Server is listening on port", port);
});