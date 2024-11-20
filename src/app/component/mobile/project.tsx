import Link from "next/link";
import Image from "next/image";
import resume from "@/public/assets/project/resume.png";
import clock from "@/public/assets/project/clock.png";
import portfolio from "@/public/assets/project/protfolio.png";
// Removed unused imports for calculator, game, and age

const MobileProject = () => {
  return (
    <div className="w-full p-5 mt-20">
      <h2 className="scroll-m-20 border-b border-gray-600 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Project
      </h2>

      {/* Resume */}
      <div className="lg:w-1/3 sm:w-1/2 p-4 mt-8">
        <div className="flex relative">
          <Image
            src={resume}
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              Create a CV
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

      {/* Clock */}
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
              A simple and accurate digital clock displaying the current time, built using [technology used].
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

      {/* Portfolio */}
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={portfolio}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-bold text-indigo-500 mb-1">
              Portfolio
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Portfolio
            </h1>
            <p className="leading-relaxed">
              A showcase of my projects, skills, and experiences that highlight my professional journey.
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

      {/* Other projects can be added similarly */}
    </div>
  );
};

export default MobileProject;
