import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, Smartphone, Monitor, Palette, Figma } from 'lucide-react';

const projects = [
  {
    title: "E-Commerce UI Design",
    description: "A comprehensive e-commerce platform design created in Figma. Features include product listings, detailed product views, shopping cart, and checkout flow with a focus on clean, user-friendly interfaces.",
    image: "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlLWNvbW1lcmNlJTIwd2Vic2l0ZSUyMGRlc2lnbiUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzEzMTU0MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Figma", "UI/UX", "E-commerce", "Design System"],
    icon: <Figma className="w-5 h-5" />,
    links: { 
      demo: "https://www.figma.com/design/xmA5GLrGnw31qNkz7zYVJI/e-comm-?m=auto&t=BT127X9gwalJVwH9-6", 
      code: "#",
      demoLabel: "View Design"
    }
  },
  {
    title: "Mobile App Concept",
    description: "Interactive mobile application prototype designed to enhance user engagement. Utilizes modern design principles, consistent typography, and intuitive navigation patterns.",
    image: "https://images.unsplash.com/photo-1762341119237-98df67c9c3c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjB1c2VyJTIwaW50ZXJmYWNlJTIwZGVzaWdufGVufDF8fHx8MTc3MTMxNTQzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Figma", "Prototyping", "Mobile Design", "Wireframing"],
    icon: <Palette className="w-5 h-5" />,
    links: { 
      demo: "https://www.figma.com/design/obiZ66aX8GMaWf2J5th2Qk/Project-2?node-id=0-1&t=6Z2pqFy0v3TVWBYP-1", 
      code: "#",
      demoLabel: "View Design"
    }
  },
  {
    title: "iOS App for iPad",
    description: "Developed a functional iPad application using Swift and iOS SDKs. Implemented core iOS design patterns and intuitive user interfaces as part of the Infosys Springboard certification.",
    image: "https://images.unsplash.com/photo-1762279389042-9439bfb6c155?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBiYWNrZ3JvdW5kJTIwZGFya3xlbnwxfHx8fDE3NzEyODA3NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Swift", "iOS", "Xcode", "Mobile Dev"],
    icon: <Smartphone className="w-5 h-5" />,
    links: { 
      demo: "#", 
      code: "#",
      demoLabel: "Live Demo"
    }
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-neutral-950 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-indigo-400 font-medium mb-2 block">Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
          </div>
          <a href="#" className="text-gray-400 hover:text-white flex items-center gap-2 group transition-colors">
            View all projects 
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group rounded-2xl overflow-hidden bg-white/5 border border-white/5 hover:border-indigo-500/50 transition-all hover:-translate-y-1"
            >
              <div className="aspect-video overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-md p-2 rounded-full text-indigo-400">
                   {project.icon}
                </div>
              </div>
              <div className="p-6">
                <div className="flex gap-2 flex-wrap mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 rounded-full bg-indigo-500/10 text-indigo-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <a 
                    href={project.links.demo} 
                    target={project.links.demo.startsWith('http') ? "_blank" : "_self"}
                    rel={project.links.demo.startsWith('http') ? "noopener noreferrer" : ""}
                    className="text-sm font-medium flex items-center gap-2 hover:text-indigo-400 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" /> {project.links.demoLabel}
                  </a>
                  {project.links.code !== "#" && (
                    <a href={project.links.code} className="text-sm font-medium flex items-center gap-2 hover:text-indigo-400 transition-colors">
                      <Github className="w-4 h-4" /> Source Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
