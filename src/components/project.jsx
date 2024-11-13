import React from 'react';
import Yeji1 from '../assets/itzy1.jpg';
import Yeji2 from '../assets/itzy2.jpg';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiRedux, SiExpress, SiMongodb } from 'react-icons/si';

const Project = () => {
  const projects = [
    {
      title: 'Project One',
      description: 'A brief description of Project One. This project is a web application that allows users to track their tasks.',
      tools: [
        { name: 'React', icon: <FaReact size={24} /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss size={24} /> },
        { name: 'Node.js', icon: <FaNodeJs size={24} /> },
      ],
      viewLink: 'https://example.com/project-one',
      imageSrc: Yeji1 
    },
    {
      title: 'Project Two',
      description: 'A brief description of Project Two. This project is an e-commerce platform with a custom payment gateway.',
      tools: [
        { name: 'React', icon: <FaReact size={24} /> },
        { name: 'Redux', icon: <SiRedux size={24} /> },
        { name: 'Express', icon: <SiExpress size={24} /> },
        { name: 'MongoDB', icon: <SiMongodb size={24} /> },
      ],
      viewLink: 'https://example.com/project-two',
      imageSrc: Yeji2 
    }
  ];

  return (
    <div className="p-10" id='projects'>
      <h1 className="text-4xl font-bold text-center mb-10 text-white">Projects</h1>
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2">
        {projects.map((project, index) => (
          <div key={index} className="bg-base-100 p-6 rounded-lg shadow-lg">
            <img 
              src={project.imageSrc} 
              alt={`${project.title} image`} 
              className="max-w-full max-h-full object-cover rounded-xl mb-4"
            />
            <h2 className="text-2xl font-semibold mb-4 text-white">{project.title}</h2>
            <p className="mb-4 text-gray-300">{project.description}</p>
            <h3 className="text-lg font-semibold mb-2 text-white">Tools Used:</h3>
            <ul className="flex space-x-8 mb-4">
              {project.tools.map((tool, i) => (
                <li key={i} className="flex items-center">
                  {tool.icon}
                </li>
              ))}
            </ul>
            <a 
              href={project.viewLink} 
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-full text-center"
              target="_blank" 
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
