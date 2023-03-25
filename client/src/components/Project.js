import React from "react";

export default function Project(props) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-600">
      <img className="w-full h-60" src={props.image} alt="Project" />
      <div className="px-6 py-4 flex flex-wrap justify-center">
        <div className="font-bold text-xl mb-2">{props.title}</div>
        <p className="text-grey-400 text-base">{props.description}</p>
        <p>Technologies used: {props.tech}</p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-evenly items-end">
        <a href={props.site} target="_blank" rel="noreferrer">
          <span className="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Deployed
          </span>
        </a>
        <a href={props.repo} target="_blank" rel="noreferrer">
          <span className="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Repository
          </span>
        </a>
      </div>
    </div>
  );
}
