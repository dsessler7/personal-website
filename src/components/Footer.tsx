import React from "react";
import { FooterProps } from '../interfaces';

const Footer = (props: FooterProps): JSX.Element => {
  return (
    <div className="container rounded-lg bg-bird-wing my-5 py-5 font-serif" id="header">
      <h1 className="md:text-4xl">{`Let's Connect!`}</h1>
      <ul className="flex flex-col sm:flex-row justify-center gap-3 items-center pb-3" id="header-buttons">
        <li>
          <a href={`mailto:${props.email}`} target="_blank" rel="noreferrer" className="flex flex-row justify-evenly items-center rounded-lg hover:scale-125">
            <img src="assets/icons/email.png" alt="email logo" className="mx-2" />
            <p className="sm:text-2xl">Email</p>
          </a>
        </li>
        <li>
          <a href={props.resume} target="_blank" rel="noreferrer" className="flex flex-row justify-evenly items-center rounded-lg hover:scale-125">
            <img src="assets/icons/resume.svg" alt="github logo" className="mx-2" />
            <p className="sm:text-2xl">Resume</p>
          </a>
        </li>
        <li>
          <a href={props.linkedIn} target="_blank" rel="noreferrer" className="flex flex-row justify-evenly items-center rounded-lg hover:scale-125">
            <img src="assets/icons/linkedin-round.svg" alt="github logo" className="mx-2" />
            <p className="sm:text-2xl">LinkedIn</p>
          </a>
        </li>
        <li>
          <a href={props.github} target="_blank" rel="noreferrer" className="flex flex-row justify-evenly items-center rounded-lg hover:scale-125">
            <img src="assets/icons/Octicons-mark-github.svg" alt="github logo" className="mx-2" />
            <p className="sm:text-2xl">GitHub</p>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Footer;