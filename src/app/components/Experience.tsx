import React from 'react';
import { Briefcase, Calendar, Building2 } from 'lucide-react';

const experiences = [
  {
    company: "Pumo Technovation India Pvt Ltd",
    role: "UI/UX Design Intern",
    location: "Chennai",
    period: "2025",
    description: "Skilled in creating clean, user-friendly, and interactive interfaces using tools like Figma and Adobe XD. Collaborated with teams to refine user journeys and enhance visual design."
  },
  {
    company: "Hitasoft Technology Solutions",
    role: "Web Development Intern",
    location: "Madurai",
    period: "2024",
    description: "Gained hands-on experience in building responsive and user-friendly web pages using HTML, CSS, and JavaScript. Applied foundational and intermediate concepts of front-end and back-end web development."
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-neutral-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Internships & Experience</h2>
          
          <div className="relative border-l border-gray-800 ml-4 md:ml-0 space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 md:pl-12 group">
                {/* Timeline dot */}
                <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-indigo-500 ring-4 ring-neutral-900 group-hover:ring-indigo-500/30 transition-all" />
                
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="flex items-center text-sm text-gray-500 mt-1 md:mt-0">
                    <Calendar className="w-4 h-4 mr-1" />
                    {exp.period}
                  </div>
                </div>
                
                <div className="flex items-center text-indigo-400 font-medium mb-4">
                  <Building2 className="w-4 h-4 mr-2" />
                  {exp.company} <span className="text-gray-500 ml-2 text-sm font-normal">• {exp.location}</span>
                </div>
                
                <p className="text-gray-400 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
