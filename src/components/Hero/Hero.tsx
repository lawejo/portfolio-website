import Typed from "typed.js";
import { useEffect, useRef } from "react";
import React, { useState } from "react";
export default function App() {
  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Webdeveloper", "Front End Developer"],
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
    <section className="h-screen bg-primary1 ">
      <div className="w-full h-full flex justify-center align-end">
        <div className="self-center mb-12 [&>*]:text-white [&>*]:mb-5">
          <p className="text-3xl font-normal">I'm</p>
          <h1 className="text-5xl whitespace-nowrap font-bold">
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
