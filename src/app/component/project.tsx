// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
// } from "@/app/component/ui/card";
// import Link from "next/link";
// import Image from "next/image";
// import resume from "@/public/assets/project/resume.png";
// import clock from "@/public/assets/project/clock.png";
// import portfolio from "@/public/assets/project/protfolio.png";
// import calculator from "@/public/assets/project/simpleCalculator.png";
// import game from "@/public/assets/project/tictactoe.png";
// import age from "@/public/assets/project/ageCalculator.png";

// const Project = () => {
//   return (
//     <div>
//       <Card
//         data-aos="zoom-in"
//         className="h-[85vh] overflow-y-auto bg-slate-200"
//       >
//         <CardHeader>
//           <CardTitle className="text-2xl font-semibold tracking-tight uppercase">
//             Project
//           </CardTitle>
//         </CardHeader>
//         <CardContent className="space-y-2">
//           <div className="flex flex-wrap -m-4">
//             {[
//               {
//                 src: resume,
//                 alt: "Resume",
//                 title: "Resume Builder",
//                 description:
//                   "An advanced CV/Resume Builder tool that enables users to create and customize professional CVs/Resumes with ease.",
//                 link: "https://resume-project-henna.vercel.app/",
//               },
//               {
//                 src: clock,
//                 alt: "Clock",
//                 title: "Clock",
//                 description:
//                   "A simple and accurate digital clock displaying the current time, built using React and JavaScript.",
//                 link: "https://simple-digital-clock-lovat.vercel.app/",
//               },
//               {
//                 src: portfolio,
//                 alt: "Portfolio",
//                 title: "Portfolio",
//                 description:
//                   "A showcase of my projects, skills, and experiences that highlight my professional journey.",
//                 link: "https://personal-port-folio.vercel.app/",
//               },
//               {
//                 src: calculator,
//                 alt: "Calculator",
//                 title: "Simple Calculator",
//                 description:
//                   "A basic and intuitive calculator application that performs arithmetic operations, allowing users to easily calculate numbers.",
//                 link: "https://calculator-project-orpin.vercel.app/",
//               },
//               {
//                 src: game,
//                 alt: "Tic Tac Toe",
//                 title: "Tic Tac Toe Game",
//                 description:
//                   "A classic and engaging Tic Tac Toe game allowing two players to compete against each other.",
//                 link: "https://tic-tac-toe-hn19.vercel.app/",
//               },
//               {
//                 src: age,
//                 alt: "Age Calculator",
//                 title: "Age Calculator",
//                 description:
//                   "An interactive Age Calculator application that calculates a user's age based on their birth date and current date.",
//                 link: "https://age-calculator-lilac-kappa.vercel.app/",
//               },
//             ].map(({ src, alt, title, description, link }, index) => (
//               <div key={index} className="lg:w-1/3 sm:w-1/2 p-4">
//                 <div className="flex relative">
//                   <Image
//                     src={src}
//                     alt={alt}
//                     className="absolute inset-0 w-full h-full object-cover object-center"
//                   />
//                   <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
//                     <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
//                       {title}
//                     </h2>
//                     <p className="leading-relaxed">{description}</p>
//                     <Link
//                       href={link}
//                       target="_blank"
//                       className="text-sm font-semibold tracking-tight hover:text-blue-500 hover:underline"
//                     >
//                       <p className="mt-1">View Project</p>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default Project;
