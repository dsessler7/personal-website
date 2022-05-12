import React from "react";
import { SentinelProps } from '../interfaces';

const Sentinel = (props: SentinelProps): JSX.Element => {
  return (
    <div className="container rounded-lg bg-bird-wing my-5 py-5 pb-10  font-serif" id="sentinel">
      <h1 className="md:text-4xl">{props.header}</h1>
      <div className="xl:grid md:mx-20 flex flex-col grid-rows-3 grid-flow-col gap-1 justify-items-center items-center">
        <img src={props.photo} className="row-span-3 py-5" alt="sentinel bird" />
        {props.description.map((paragraph, idx) => {
          return <p key={idx} className="text-left lg:w-3/4 sm:text-2xl">{paragraph}</p>
        })}
        {/* <p>{props.description}</p> */}
      </div>
      <div className="py-9 md:mx-20">
        <img src="assets/images/intro_demo.gif" />
      </div>
      <ul className="flex flex-col sm:flex-row gap-10 justify-center my-7">
        <li><a href={props.caseStudy} className="bg-independence text-background-white sm:text-2xl py-4 px-5 rounded-lg hover:border hover:bg-background-white hover:text-independence">Read Sentinel Case Study</a></li>
        <li><a href={props.presentation} className="bg-independence text-background-white sm:text-2xl py-4 px-5 rounded-lg hover:border hover:bg-background-white hover:text-independence">Watch Presentation</a></li>
      </ul>
    </div>
  )
}

export default Sentinel;