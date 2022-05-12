import React from "react";
import Project from './Project';
import { OtherProjectsProps } from '../interfaces';

const OtherProjects: React.FC<OtherProjectsProps> = ({ projects }): JSX.Element => {
  return (
    <div className="container rounded-lg bg-bird-wing my-5 py-5 font-serif" id="otherProjects">
      <h2 className="md:text-4xl">Other Projects</h2>
      {projects.map(project => {
        return <Project key={project.id} {...project}/>
      })}
    </div>
  )
}

export default OtherProjects;