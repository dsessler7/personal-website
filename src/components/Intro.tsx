import React from "react";
import { IntroProps } from '../interfaces';

const Intro = (props: IntroProps): JSX.Element => {
  return (
    <div className="container rounded-lg bg-bird-wing my-5 py-5 font-serif" id="intro">
      <h2 className="md:text-4xl">About Me</h2>
      <div className="lg:grid md:mx-20 flex flex-col grid-rows-3 grid-flow-col gap-1 justify-items-center items-center">
        <div className="row-span-3 py-5 rounded-lg">
          <img src={props.photo} className="rounded-3xl" alt="headshot" />
        </div>
        {props.bio.map((paragraph, idx) => {
          return <p key={idx} className="text-left lg:w-3/4 sm:text-2xl">{paragraph}</p>
        })}
        <ul className="flex gap-2 my-7">
          <li><a href={props.resume} target="_blank" rel="noreferrer" className="bg-independence text-background-white py-4 px-5 rounded-lg hover:border hover:bg-background-white hover:text-independence sm:text-2xl">Resume</a></li>
          <li><a href={props.caseStudy} target="_blank" rel="noreferrer" className="bg-independence text-background-white py-4 px-5 rounded-lg hover:border hover:bg-background-white hover:text-independence sm:text-2xl">Sentinel Case Study</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Intro;