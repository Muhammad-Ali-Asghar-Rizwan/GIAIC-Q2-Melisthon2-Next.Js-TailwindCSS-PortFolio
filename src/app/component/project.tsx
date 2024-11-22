import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/component/ui/card";

import Link from "next/link";
import Image from "next/image";
import resume from "@/public/assets/project/resume.png";
import clock from "@/public/assets/project/clock.png";
import portfolio from "@/public/assets/project/protfolio.png";
import calculator from "@/public/assets/project/simpleCalculator.png";
import game from "@/public/assets/project/tictactoe.png";
import age from "@/public/assets/project/ageCalculator.png"
import Particle from "./particle";

const Project = () => {

  return (
    <div>
      <Card
        data-aos="zoom-in"
        className="h-[85vh]  overflow-y-auto  bg-stone-400"
      >
        <CardHeader>
          <CardTitle className="text-2xl font-semibold tracking-tight uppercase">
            Project
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
        
  
    <div className="flex flex-wrap -m-4 sticky z-[10000]">
      <div className="lg:w-1/3 sm:w-1/2 p-4">
      {/* resume */}
       <div className="flex relative">
          <Image
            src={resume}
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              create a cv

            </h2>
            <h1 className="title-font text-lg font-bold text-gray-900 mb">
              Resume Builder
            </h1>
            <p className="leading-relaxed">
            An advanced CV/Resume Builder tool that enables users to create and customize professional CVs/Resumes with ease.
            </p>
            <Link
                      href="https://resume-project-henna.vercel.app/"
                      target="_blank"
                      className="text-sm font-semibold tracking-tight hover:text-blue-500 hover:underline"
                    >
                      <p className="mt-1">View Project</p>
                    </Link>
           </div>
      </div>
      </div>
      {/* clock */}
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={clock}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
             Timing
            </h2>
            <h1 className="title-font text-lg font-bold text-gray-900 mb-3">
            Clock
            </h1>
            <p className="leading-relaxed">
            A simple and accurate digital clock displaying the current time, built using [technology used]
            </p>
            <Link
                      href="https://simple-digital-clock-lovat.vercel.app/"
                      target="_blank"
                      className="text-sm font-semibold tracking-tight hover:text-blue-500 hover:underline"
                    >
                      <p className="mt-1">View Project</p>
                    </Link>
          </div>
        </div>
      </div>
      {/* PORTFOLIO */}
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={portfolio}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-bold text-indigo-500 mb-1">
            PortFolio
            </h2>
            <h1 className="title-font text-lg font-bold text-gray-900 mb-3">
              PortFolio
            </h1>
            <p className="leading-relaxed">
            A showcase of my projects, skills, and experiences that highlight my professional journey
            </p>
            <Link
                      href="https://personal-port-folio.vercel.app/"
                      target="_blank"
                      className="text-sm font-semibold tracking-tight hover:text-blue-500 hover:underline"
                    >
                      <p className="mt-1">View Project</p>
                    </Link>
          </div>
        </div>
      </div>
      {/* CALCULATOR */}
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={calculator}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
          Calculator 
            </h2>
            <h1 className="title-font text-lg font-bold text-gray-900 mb-3">
            Simple Calculator 
            </h1>
            <p className="leading-relaxed">
            A basic and intuitive calculator application that performs arithmetic operations, allowing users to easily calculate numbers.
            </p>
            <Link
                      href="https://calculator-project-orpin.vercel.app/"
                      target="_blank"
                      className="text-sm font-semibold tracking-tight hover:text-blue-500 hover:underline"
                    >
                      <p className="mt-1">View Project</p>
                    </Link>
          </div>
        </div>
      </div>

      {/*      Tic Tac Toe Game       */}
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={game}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
             Game
            </h2>
            <h1 className="title-font text-lg font-bold text-gray-900 mb-3">
            Tic Tac Toe Game 
            </h1>
            <p className="leading-relaxed">
            A classic and engaging Tic Tac Toe game built with [technology used], allowing two players to compete against each other. The game features a simple and intuitive interface, ensuring a seamless user experience"
            </p>
            <Link
                      href="https://tic-tac-toe-hn19.vercel.app/"
                      target="_blank"
                      className="text-sm font-semibold tracking-tight hover:text-blue-500 hover:underline"
                    >
                      <p className="mt-1">View Project</p>
                    </Link>
          </div>
        </div>
      </div>
      {/* Age Calculator  */}
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={age}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
            Age Calculator 
            </h2>
            <h1 className="title-font text-lg font-bold text-gray-900 mb-3">
            Age Calculator  
            </h1>
            <p className="leading-relaxed">
            A simple and interactive Age Calculator application that calculates a user's age based on their birth date and current date. It features a user-friendly interface and accurate calculations.
            </p>
            <Link
                      href="https://age-calculator-lilac-kappa.vercel.app/"
                      target="_blank"
                      className="text-sm font-semibold tracking-tight hover:text-blue-500 hover:underline"
                    >
                      <p className="mt-1">View Project</p>
                    </Link>


                    


          </div>
        </div>
      </div>
    </div>
    <Particle/>



        </CardContent>
      </Card>
    </div>
  );
};

export default Project;
