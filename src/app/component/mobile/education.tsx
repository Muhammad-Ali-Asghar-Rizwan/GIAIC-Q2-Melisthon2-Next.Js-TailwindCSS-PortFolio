import React from 'react';

const MobileEducation = () => {
  // My Education here
  const education = [
    {
      schoolName: "Memon Education Board ",
      date: "12 Jun 2024",
      field: "Commerce",
      detail: "Matriculation from [MEB], [2024] with [Percentage/69%].",
    },
    {
      schoolName: "GOVT. COLLEGE OF COMMERCE AND ECONOMICS NO 2 in COMMERCE.",
      date: "12 Sep 2024",
      field: "Commerce",
      detail: "Govt. College of Commerce and Economics No. 2, [2024] - [2026], Commerce Stream.",
    },
  ];

  return (
    <div className="w-full p-5 mt-[15rem]">
      <h2 className="scroll-m-20 border-b border-gray-600 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Education
      </h2>
      <div className="divide-y-2 divide-blue-500">
        {education.map((item, i) => (
          <div key={i} className="py-5 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-slate-800">
                {item.field}
              </span>
              <span className="mt-1 text-gray-500 text-sm">{item.date}</span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-slate-600 title-font mb-2">
                {item.schoolName}
              </h2>
              <p className="leading-relaxed">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileEducation;
