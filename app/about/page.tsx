"use client";
import { Button } from "@heroui/button";
import link from "next/link";
import { useState } from "react";

import { title } from "@/components/primitives";

export default function AboutPage() {
  let facts: string[] = [
    "It's impossible to hum while holding your nose",
    "Africa is the only continent in all four hemispheres.",
    "Alaska is the only U.S. state whose name is typed using one row of the keyboard.",
    "Australia is wider than the moon",
    "singing can actually help synchronize the heartbeats of people singing together in a choir",
    "cows have best friends",
    "dolphins name each other",
    "Spring break's roots can be traced back to ancient Greek and Roman celebrations of spring",
  ];
  const [fact, setFact] = useState("");

  return (
    <div>
      <h1 className={title()}>About Me</h1>
      <br />
      <br />
      <p>FUN FACT GENERATOR:</p>
      <br />
      <Button
        className="bg-rose-300 text2xl"
        onPress={() => {
          setFact(facts[Math.floor(Math.random() * facts.length)]);
        }}
      >
        {" "}
        press for fact{" "}
      </Button>
      <p>{fact}</p>
      <br />
      <br />
      <h2>PICS OF ME</h2>
      <div className="flex text-1xl m-2 border-2 border-gray-700 justify-center">
        <p className="m-4 b border-2 border-gray-400">
          <img alt="me in an nyc shirt" src="/nyc.jpg" />
        </p>
        <p>visit to texas</p>
        <p className="m-4 border-2  border-gray-400">
          <img alt="me in an indian dress" src="/anarkali.jpg" />
        </p>
        <p>pretty anarkali</p>
        <p className="m-4 border-2  border-gray-400">
          <img alt="me w my sis" src="/sister.jpg" />
        </p>
        <p>sisters</p>
      </div>
      <br />
      <br />
      <h2>COOL PICS</h2>
      <div className="flex text-1xl m-2 border-2 border-gray-700 justify-center">
        <p className="m-3 b border-2 border-gray-400">
          <img alt="sunrise" src="/sunrise.jpg" />
        </p>
        <p>gorgeous sunrise</p>
        <p className="m-3 border-2  border-gray-400">
          <img alt="spring" src="/spring.jpg" />
        </p>
        <p>fav season</p>
        <p className="m-3 border-2  border-gray-400">
          <img alt="sunset" src="/sunset.jpg" />
        </p>
        <p>majestic sunset</p>
      </div>
      <br />
      <br />
      <h2>HOBBIES AND IMPORTANT THINGS</h2>
      <div className="flex text-1xl m-2 border-2 border-gray-700 justify-center">
        <p className="m-3 b border-2 border-gray-400">
          <img alt="reading" src="/read.jpg" />
        </p>
        <p>happy place</p>
        <p className="m-3 border-2  border-gray-400">
          <img alt="singing" src="/sing.jpg" />
        </p>
        <p>magical vibes</p>
        <p className="m-3 border-2  border-gray-400">
          <img alt="walking" src="/walk.jpg" />
        </p>
        <p>fresh air</p>
      </div>
      <br />
      <Button as={link} href="https://docs.google.com/document/u/0/">
        GOOGLE DOCS
      </Button>
      <p>use it to organize everything and have control</p>
      <br />
      <br />
      <Button as={link} href="https://open.spotify.com/">
        SPOTIFY
      </Button>
      <p>music that cure anything</p>
      <br />
      <br />
      <Button as={link} href="https://www.canva.com/">
        CANVA
      </Button>
      <p>so aesthetic and perfect to make presentations</p>
    </div>
  );
}
