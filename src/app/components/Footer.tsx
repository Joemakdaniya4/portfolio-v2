import React from 'react';
import { Github, Linkedin, Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-900 py-12 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <a href="#" className="text-2xl font-bold tracking-tighter block mb-2 uppercase">
              Joe<span className="text-indigo-500">.</span>
            </a>
            <p className="text-gray-500 text-sm">
              Joe Makdaniya D | Web Developer & UI/UX Designer
            </p>
          </div>

          <div className="flex gap-6">
            <a href="https://www.linkedin.com/in/joe-makdaniya-9451182a0" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:Joemakdaniya@gmail.com" className="text-gray-500 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-900 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <p>&copy; {currentYear} Joe Makdaniya. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> in Madurai
          </p>
        </div>
      </div>
    </footer>
  );
};
