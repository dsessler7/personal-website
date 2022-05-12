import React from "react";
import { ProjectProps } from "../interfaces";

const Project = (props: ProjectProps): JSX.Element => {
  const flexOrder = props.id % 2 === 0 ? "lg:order-first" : ""

  return (
    <div key={props.id} className="lg:py-3 md:mx-20">
      <div className="flex lg:flex-row flex-col items-center justify-items-center justify-around lg:my-10">
        
        <div className="flex-1 text-left">
          <h3 className="w-1/2 border-b-2 text-center mx-auto my-10 md:text-3xl">{props.title}</h3>

          <p className="mx-auto my-7 lg:w-3/4 md:text-2xl">{props.description}</p>
        </div>
        <img src={props.photo} className={`flex-1 lg:w-2/4 ${flexOrder}`} alt="screenshot of app" />
      </div>
    </div>
  )
}

export default Project;