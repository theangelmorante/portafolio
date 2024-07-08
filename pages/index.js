import { useRef } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
// import Link from "next/link";
import Cursor from "../components/Cursor";

// Local Data
import data from "../data/portfolio.json";
import Image from "next/image";
import ProjectResume from "../components/ProjectResume";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name}</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />
        <div className="laptop:mt-20 mt-10 relative">
          <div className="mt-5 flex flex-col laptop:flex-row">
            <div className="flex justify-center items-center">
              <Image
                src="/images/picofme.png"
                width={400}
                height={400}
                alt="profile picture"
                className="rounded-full laptop:h-[400px] laptop:w-[400px] tablet:h-[200px] tablet:w-[200px] mob:h-[250px] mob:w-[250px] ml-5 mb-3"
              />
            </div>
            <div className="ml-5">
              <h1
                ref={textOne}
                className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
              >
                {data.headerTaglineOne}
              </h1>
              <h1
                ref={textTwo}
                className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
              >
                {data.headerTaglineTwo}
              </h1>
              <h1
                ref={textThree}
                className="text-3xl tablet:text-6xl laptop:text-4xl laptopl:text-6xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
              >
                {data.headerTaglineThree}
              </h1>
              <h1
                ref={textFour}
                className="text-3xl tablet:text-6xl laptop:text-3xl laptopl:text-5xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
              >
                {data.headerTaglineFour}
              </h1>
            </div>
          </div>
          <Socials className="mt-2 laptop:mt-5" />
        </div>

        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
          <h1 className="tablet:m-10 text-2xl text-bold">Aptitudes.</h1>
          <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
            {data.services.map((service, index) => (
              <ServiceCard
                key={index}
                name={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
        <div
          className="mt-5 mb-10 laptop:mt-20 laptop:mb-20 p-2 laptop:p-0"
          ref={aboutRef}
        >
          <h1 className="tablet:m-10 text-2xl text-bold">About.</h1>
          <p className="tablet:m-10 mt-2 text-xl laptop:text-3xl w-full laptop:w-3/5">
            {data.aboutpara}
          </p>
        </div>
        {/* <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
          <h1 className="tablet:m-10 text-2xl text-bold">Experience.</h1>
          <div className="mt-5 tablet:m-10 grid grid-cols-1 gap-6 pl-5">
            {data.resume.experiences.map(
              ({ id, dates, type, position, bullets }) => (
                <ProjectResume
                  key={id}
                  dates={dates}
                  type={type}
                  position={position}
                  bullets={bullets}
                ></ProjectResume>
              )
            )}
          </div>
        </div> */}
        <Footer />
      </div>
    </div>
  );
}
