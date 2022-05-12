import React from "react";
import { HeaderProps } from '../interfaces';

const Header = (props: HeaderProps): JSX.Element => {
  return (
    <div className="container rounded-lg bg-bird-wing my-5 py-5 font-serif" id="header">
      <h1 className="md:text-5xl">{props.name}</h1>
      <ul className="flex flex-row justify-center gap-3 pb-3" id="header-buttons">
        <li>
          <a href={`mailto:${props.email}`} target="_blank" rel="noreferrer" className="flex hover:scale-125">
            <img src="assets/icons/email.png" alt="email logo" />
          </a>
        </li>
        <li>
          <a href={props.resume} target="_blank" rel="noreferrer" className="flex hover:scale-125">
            <img src="assets/icons/resume.svg" alt="github logo" />
          </a>
        </li>
        <li>
          <a href={props.linkedIn} target="_blank" rel="noreferrer" className="flex hover:scale-125">
            <img src="assets/icons/linkedin-round.svg" alt="github logo" />
          </a>
        </li>
        <li>
          <a href={props.github} target="_blank" rel="noreferrer" className="flex hover:scale-125">
            <img src="assets/icons/Octicons-mark-github.svg" alt="github logo" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Header;