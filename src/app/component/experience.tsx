import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/component/ui/card";

const Experience = () => {
  // My Experience here
  const experience = [
    {
      skill: "Web Designer",
      field: "Frontend Developer",
      detail:
        "Frontend developer with experience of different projects in building responsive, user-friendly web applications using HTML, CSS, JavaScript, performance optimization, and cross-browser compatibility.",
    },
    {
      skill: "Technical Project Experience",
      field: "Frontend Developer",
      detail:
        "Developer and delivered numerous web projects using HTML, CSS, JavaScript, Next.js. Demonstrated expertise in creating responsive and interactive web applications that meet user needs and business objectives.",
    },
  ];

  return (
    <div>
      <Card data-aos="zoom-in" className="h-[85vh] overflow-y-auto bg-slate-200">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold tracking-tight uppercase">Experience</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="-my-8 divide-y-2 divide-gray-100">
            {experience.map((item, i) => (
              <div key={i} className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span className="font-semibold title-font text-gray-700">{item.field}</span>
                </div>
                <div className="md:flex-grow">
                  <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{item.skill}</h2>
                  <p className="leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Experience;




