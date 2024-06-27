import Typed from "typed.js";
import { useEffect, useRef } from "react";
import React, { useState } from "react";
export default function App() {
  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Web Developer", "Front End Developer", "Fullstack Developer"],
      typeSpeed: 100,
      backSpeed: 20,
      smartBackspace: false,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section
      id="home"
      className="intersect h-screen border-t border-white/20 bg-primary1"
    >
      <div className="align-end flex h-full w-full justify-center">
        <div className="mb-12 w-fit self-center [&>*]:mb-5 [&>*]:text-white">
          <p className="w-fit text-3xl font-normal">I'm</p>
          <h1 className="w-fit whitespace-nowrap text-2xl font-bold md:text-5xl">
            Lasse Weber Jørgensen
          </h1>
          <h2 className="text-4xl">
            <span ref={el}></span>
          </h2>
        </div>
      </div>
    </section>
  );
}
