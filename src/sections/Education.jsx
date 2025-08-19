import React from "react";

export default function Education() {
  const education = [
    {
      degree: "Bachelor of Engineering in Computer Science",
      school: "GTU University, India",
      year: "2020 - 2024",
      desc: "Graduated with a strong foundation in software development, data structures, and computer systems.",
      grade:"CGPA: 8.12/10"
    },
    {
        degree: "Higher Secondary Certificate (HSC)",
        school:"Science Stream – Gujarat Secondary & Higher Secondary Education Board",
        year:"2018 - 2020",
        desc:"Focused on Mathematics, Physics, and Computer Science, building strong analytical and problem-solving foundations.",
        grade:"Percentage: 70%"
    }
  ];

  return (
    <section className="py-12 bg-white dark:bg-neutral-900">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-neutral-800 dark:text-neutral-100 mb-10">
          Education
        </h2>

        <div className="space-y-8">
          {education.map((item, index) => (
            <div
              key={index}
              className="relative border-l-4 border-yellow-500 pl-6"
            >
              <span className="absolute -left-3 top-2 w-5 h-5 rounded-full bg-yellow-500"></span>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100">
                {item.degree}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                {item.school} • {item.year}
              </p>
              <p className="mt-2 text-neutral-700 dark:text-neutral-300">
                {item.desc}
              </p>
              <p className="mt-2 text-neutral-600 dark:text-neutral-400"><i>{item.grade}</i></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
