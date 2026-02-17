import React from 'react';
import { Code, Layout, Database, Terminal, Cpu, PenTool } from 'lucide-react';

const skills = [
  {
    category: "Web Development",
    icon: <Code className="w-6 h-6 text-indigo-400" />,
    items: ["HTML", "CSS", "JavaScript", "React"]
  },
  {
    category: "UI/UX Design",
    icon: <PenTool className="w-6 h-6 text-indigo-400" />,
    items: ["Figma", "Adobe XD", "User Research", "Prototyping"]
  },
  {
    category: "Programming",
    icon: <Terminal className="w-6 h-6 text-indigo-400" />,
    items: ["Python (Intermediate)", "Java (Intermediate)", "Swift (iOS)"]
  },
  {
    category: "AI & Tools",
    icon: <Cpu className="w-6 h-6 text-indigo-400" />,
    items: ["Prompt Engineering", "AI Tools", "Digital Marketing", "Git"]
  }
];

export const About = () => {
  return (
    <section id="about" className="py-24 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                I am a dynamic and growth-driven professional with a passion for innovation and excellence. 
                Recognized for turning challenges into opportunities through analytical thinking and creative problem-solving.
              </p>
              <p>
                Currently pursuing my B.Tech in Information Technology, I have cultivated a diverse skillset ranging from 
                Full Stack Web Development to UI/UX Design and AI applications.
              </p>
              <p>
                I am adept at collaborating across teams, managing time effectively, and adapting quickly to new environments. 
                Committed to continuous learning, I strive to deliver value with integrity, responsibility, and dedication.
              </p>
            </div>

            <div className="mt-8">
               <h3 className="text-xl font-semibold mb-4 text-white">Personal Interests</h3>
               <p className="text-gray-400">
                 Beyond coding, I enjoy <strong>Dancing</strong> and <strong>Cooking</strong>. 
                 My core strengths lie in Leadership, Team Management, and Business Planning. 
                 I am also deeply interested in exploring new AI tools and Marketing strategies.
               </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map((skill) => (
              <div key={skill.category} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-indigo-500/30 transition-colors">
                <div className="mb-4 bg-indigo-500/10 w-12 h-12 rounded-lg flex items-center justify-center">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3">{skill.category}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="text-sm text-gray-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
