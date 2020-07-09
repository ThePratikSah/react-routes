import React from "react";
import pratik from "../img/pratik.jpg";

function Home() {
  return (
    <>
      <main>
        <section class="presentation">
          <div class="cover">
            <img src={pratik} alt="Developer" class="cover-img" width="300px" />
          </div>
          <div class="introduction">
            <div class="intro-text">
              <h1>Hello I'm Pratik Sah</h1>
              <p>
                A proud Indian Full-Stack Web developer who loves coding and a
                die-hard fan of Chelsea FC
                <span role="img" aria-label="">
                  ⚽
                </span>
                .
                <br /> I am a Computer Science Engineer, and you can connect
                with me on LinkedIn.
              </p>
            </div>
            <div class="cta">
              <button class="cta-add">
                <a
                  href="https://dribbble.com/pratiksah"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View My Work
                </a>
              </button>
            </div>
            <br />
            <div class="social-links">
              <a
                href="https://www.linkedin.com/in/pratiksah/"
                class="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-linkedin fa-2x"></i>
              </a>
              <a
                href="https://github.com/ThePratikSah"
                class="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-github-square fa-2x"></i>
              </a>
              <a
                href="https://dribbble.com/pratiksah"
                class="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-dribbble-square fa-2x"></i>
              </a>
              <a
                href="https://www.instagram.com/the_pratik_sah/"
                class="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-instagram-square fa-2x"></i>
              </a>
              <a
                href="https://twitter.com/the_pratik_sah"
                class="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-twitter-square fa-2x"></i>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
