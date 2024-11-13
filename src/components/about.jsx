import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Yeji from '../assets/yeji.jpg'
const About = () => {
  return (
    <div className="bg-base-100 text-white p-6 md:p-12"  id='about'>
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left Side: Image */}
        <div className="mt-[100px] flex-shrink-0 mb-0 md:mb-0 md:mr-6">
          <img
            src={Yeji}
            alt="Profile"
            className="w-48 h-48 rounded-full object-cover"
          />
        </div>
        
        
        {/* Right Side: Text Content */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold md:mt-20 mt-6 mb-6 text-center md:text-start">About Me</h1>
          <p className="text-lg leading-relaxed mb-4">
            Hi, I'm Lance, a passionate developer with a love for creating intuitive and user-friendly applications.
            I specialize in [Your Specialization], and I'm constantly learning new technologies to improve my skill set.
          </p>
          <p className="text-lg leading-relaxed">
            My journey in the world of coding began [X years ago/at a certain time], and since then, I've worked on various projects that
            have challenged me to grow both as a developer and as a problem solver. When I'm not coding, you can find me [Your Hobbies or Interests].
          </p>
            <div className="mt-6 flex space-x-8 justify-center">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
                    <FaFacebook className="text-2xl" />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
                    <FaTwitter className="text-2xl" />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500">
                    <FaInstagram className="text-2xl" />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-700">
                    <FaLinkedin className="text-2xl" />
                </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
