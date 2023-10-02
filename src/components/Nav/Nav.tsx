import React, { useState } from "react";
import { useEffect } from "react";

export default function Nav() {
  const [active, setactive] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);


  useEffect(() => {
    const handleScroll = (event) => {
      const winScroll = document.documentElement.scrollTop;
      const winHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
        document.querySelector('.scrollIndicator')?.classList.remove('hidden')
        setScrollLeft((winScroll / winHeight) * 100);

    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

  // #TODO: Add active state
  // #TODO: Add sticky feature
  return (
    <>
      <nav className="bg-primary1 w-full h-20  z-40  sticky top-0 ">
        <div className="bg-primary1 grid w-full px-12 h-full">
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
        </div>
        <div className="scrollIndicator h-0.5 self-end -ml-12 bg-white/20 col-span-2 hidden">
          <div
            className="bg-accent1 h-full"
            style={{ width: `${scrollLeft}%` }}
          ></div>
        </div>
      </nav>
    </>
  );
}
