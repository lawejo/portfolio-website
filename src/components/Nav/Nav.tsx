import React, { useState } from "react";

export default function Nav() {
  const [active, setactive] = useState(0);

  return (
    <>
      <nav className="bg-primary1 grid w-full h-20 px-12">
        <a
          className="ml-4 flex items-center text-offwhite text-2xl font-normal max-w-fit font-bodyfont col-start-1 max-h-ful"
          href="index.html"
        >
          LWJ
        </a>
        <div
          id="end_of_nav"
          className="flex flex-row-reverse items-center col-start-2"
        >
          <div id="nav_links">
            <ul className="flex justify-between items-center [&>li]:pl-3 [&>*]:text-primary2">
              <li>
                <a href="index">HOME</a>
              </li>
              <li>
                <a href="experience">PROJECTS</a>
              </li>
              <li>
                <a href="about">ABOUT</a>
              </li>
              <li>
                <a href="contact">CONTACT</a>
              </li>
              <li>
                <a href="resume">RESUME</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
