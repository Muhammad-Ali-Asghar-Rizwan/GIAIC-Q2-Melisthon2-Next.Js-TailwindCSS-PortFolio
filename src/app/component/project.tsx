import Link from "next/link";
import Image from "next/image";
import resume from "@/public/assets/project/resume.png";
import clock from "@/public/assets/project/clock.png";
import portfolio from "@/public/assets/project/protfolio.png";
import calculator from "@/public/assets/project/simpleCalculator.png";
import game from "@/public/assets/project/tictactoe.png";
import age from "@/public/assets/project/ageCalculator.png";

const MobileProject = () => {
  const projects = [
    {
      id: 1,
      title: "Resume Builder",
      description:
        "An advanced CV/Resume Builder tool that enables users to create and customize professional CVs/Resumes with ease.",
      image: resume,
      link: "https://resume-project-henna.vercel.app/",
      category: "Create a CV",
    },
    {
      id: 2,
      title: "Clock",
      description:
        "A simple and accurate digital clock displaying the current time, built using modern web technologies.",
      image: clock,
      link: "https://simple-digital-clock-lovat.vercel.app/",
      category: "Timing",
    },
    {
      id: 3,
      title: "Portfolio",
      description:
        "A showcase of my projects, skills, and experiences that highlight my professional journey.",
      image: portfolio,
      link: "https://personal-port-folio.vercel.app/",
      category: "Portfolio",
    },
    {
      id: 4,
      title: "Simple Calculator",
      description:
        "A basic and intuitive calculator application that performs arithmetic operations, allowing users to easily calculate numbers.",
      image: calculator,
      link: "https://calculator-project-orpin.vercel.app/",
      category: "Calculator",
    },
    {
      id: 5,
      title: "Tic Tac Toe Game",
      description:
        "A classic and engaging Tic Tac Toe game built for two players. It features a simple and intuitive interface, ensuring a seamless user experience.",
      image: game,
      link: "https://tic-tac-toe-hn19.vercel.app/",
      category: "Game",
    },
    {
      id: 6,
      title: "Age Calculator",
      description:
        "A simple and interactive Age Calculator application that calculates a user's age based on their birth date and the current date. It features a user-friendly interface and accurate calculations.",
      image: age,
      link: "https://age-calculator-lilac-kappa.vercel.app/",
      category: "Age Calculator",
    },
  ];

  return (
    <div className="w-full p-5 mt-20">
      <h2 className="scroll-m-20 border-b border-gray-600 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Projects
      </h2>
      <div className="flex flex-wrap -mx-4 mt-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="lg:w-1/3 sm:w-1/2 p-4"
          >
            <div className="flex relative">
              <Image
                src={project.image}
                alt={`${project.title} Image`}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  {project.category}
                </h2>
                <h1 className="title-font text-lg font-bold text-gray-900 mb-3">
                  {project.title}
                </h1>
                <p className="leading-relaxed">{project.description}</p>
                <Link
                  href={project.link}
                  target="_blank"
                  className="text-sm font-semibold tracking-tight hover:text-blue-500 hover:underline mt-2 block"
                >
                  View Project
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileProject;
