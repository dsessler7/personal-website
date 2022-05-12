import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Intro from './components/Intro';
import Sentinel from './components/Sentinel';
import Header from './components/Header';
import OtherProjects from './components/OtherProjects';
import Footer from './components/Footer';

function App() {
  const bio = ["I am a software engineer based out of Seattle, WA with experience in JavaScript, Ruby, Go, React, AWS, and Docker.",
  "I recently built Sentinel, a cloud-agnostic Platform-as-a-Service with built-in support for upgrading applications via canary deployments."]
  
  const headerInfo = {
    name: "Drew Sessler",
    email: "drew@drewsessler.com",
    resume: "",
    linkedIn: "https://www.linkedin.com/in/drew-sessler-3816601b/",
    github: "https://github.com/dsessler7",
  }

  const introInfo = {
    photo: "assets/images/drew_headshot.png",
    bio,
    caseStudy: "https://sentinel-paas.github.io/",
  }

  const sentinelInfo = {
    header: "Sentinel",
    photo: "assets/images/Sentinel_logo_on_dark.png",
    description: ["Sentinel is an open-source, cloud-agnostic, self-hosted Platform-as-a-Service that can easily deploy and manage multiple database-backed applications and update those applications via canary deployments.",
      "Sentinel is installed as an NPM package and controlled via a custom Command Line Interface. It uses Terraform and Ansible to provision and manage infrastructure in the cloud, Docker Swarm Mode for container orchestration, and Traefik for request routing, load balancing, and sticky sessions.",
      "Sentinel uses canary deployments to safely update existing applications, and provides monitoring via Prometheus, Node Exporter, and Grafana for analying the health and performance of the hosted applications."
    ],
    caseStudy: "https://sentinel-paas.github.io/",
    presentation: "https://www.youtube.com/watch?v=1vaIc_sCDag",
  }

  const otherProjectsInfo = {
    projects: [
      {
        id: 0,
        title: "RequestBin",
        photo: "assets/images/requestbin.png",
        description: "A database-backed application for receiving and debugging webhooks built with Node.js, PostgreSQL, and MongoDB."
      },
      {
        id: 1,
        title: "Cello",
        photo: "assets/images/cello.png",
        description: "A Kanban style collaboration app built with Node.js/Express.js, React/Redux, and MongoDB."
      },
      {
        id: 2,
        title: "Todo Tracker",
        photo: "assets/images/todos.png",
        description: "An application for creating todo lists built with Ruby/Sinatra, jQuery, and PostgreSQL."
      },
    ]
  }

  return (
    <div className="App">
      <Header {...headerInfo} />
      <Intro {...introInfo} />
      <Sentinel {...sentinelInfo} />
      <OtherProjects {...otherProjectsInfo} />
      <Footer {...headerInfo} />
    </div>
  );
}

export default App;
