import React from "react";
import me from "../img/pratik.jpg";

function Home() {
  return (
    <section className="text-gray-700 body-font">
      <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img className="object-cover object-center rounded" alt="hero" src={me}/>
        </div>
        <div
          className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Hello I'm Pratik Sah</h1>
          <p className="mb-8 leading-relaxed">A proud Indian Full-Stack Web developer who loves coding and a die-hard
            fan of Chelsea FC
            <span role="img" aria-label="">
              ⚽.
            </span>
            <br/> I am a Computer Science Engineer, and you can also connect with me on LinkedIn.</p>
          <div className="flex justify-center">
            <button
              className="inline-flex mb-3 mr-2 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              <a
                href="https://www.linkedin.com/in/pratiksah/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hire Me!
              </a>
            </button>
            <button
              className="inline-flex mb-3 text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">
              <a
                href="https://learnsyntax.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                My Blog
              </a>
            </button>
          </div>
          <div className="flex justify-center">
            <a href="https://www.linkedin.com/in/pratiksah/" className="social-link" target="_blank"
               rel="noopener noreferrer">
              <i className="fab fa-linkedin fa-2x"/>
            </a>
            <a href="https://github.com/ThePratikSah" className="social-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github-square fa-2x"/>
            </a>
            <a href="https://dribbble.com/pratiksah" className="social-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-dribbble-square fa-2x"/>
            </a>
            <a href="https://www.instagram.com/the_pratik_sah/" className="social-link" target="_blank"
               rel="noopener noreferrer">
              <i className="fab fa-instagram-square fa-2x"/>
            </a>
            <a href="https://twitter.com/the_pratik_sah" className="social-link" target="_blank"
               rel="noopener noreferrer">
              <i className="fab fa-twitter-square fa-2x"/>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
