import React from 'react';
import { GraduationCap, Award, MapPin, CheckCircle } from 'lucide-react';

export const Education = () => {
  return (
    <section id="education" className="py-24 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-8 h-8 text-indigo-500" />
              <h2 className="text-3xl font-bold">Education</h2>
            </div>
            
            <div className="space-y-8">
              <div className="border-l-2 border-gray-800 pl-6 relative">
                 <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-neutral-900 border-2 border-indigo-500" />
                 <h3 className="text-xl font-bold">B.Tech (Information Technology)</h3>
                 <p className="text-indigo-400">NPR College of Engineering and Technology</p>
                 <p className="text-gray-500 text-sm mt-1">2023 – 2026 • Dindigul</p>
              </div>

              <div className="border-l-2 border-gray-800 pl-6 relative">
                 <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-neutral-900 border-2 border-gray-600" />
                 <h3 className="text-xl font-bold">Higher Secondary</h3>
                 <p className="text-gray-300">CEOA Matric Higher Secondary School</p>
                 <p className="text-gray-500 text-sm mt-1">2021 – 2022 • Madurai</p>
              </div>

              <div className="border-l-2 border-gray-800 pl-6 relative">
                 <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-neutral-900 border-2 border-gray-600" />
                 <h3 className="text-xl font-bold">SSLC</h3>
                 <p className="text-gray-300">CEOA Matric Higher Secondary School</p>
                 <p className="text-gray-500 text-sm mt-1">2019 – 2020 • Madurai</p>
              </div>
            </div>

            <div className="mt-12">
               <div className="flex items-center gap-3 mb-6">
                  <MapPin className="w-6 h-6 text-indigo-500" />
                  <h3 className="text-2xl font-bold">Industrial Visits</h3>
               </div>
               <ul className="space-y-4 text-gray-400">
                  <li className="bg-white/5 p-4 rounded-lg">
                    <strong className="text-white block">ISRO (Indian Space Research Organisation)</strong>
                    <span className="text-sm">Bengaluru | May 2024</span>
                    <p className="text-sm mt-2">Gained insights into satellite communication, internal mechanisms, and data analysis.</p>
                  </li>
                  <li className="bg-white/5 p-4 rounded-lg">
                    <strong className="text-white block">Spectrum Software Solutions</strong>
                    <span className="text-sm">Kochi | November 2024</span>
                    <p className="text-sm mt-2">Observed professional software development lifecycles and industry best practices.</p>
                  </li>
               </ul>
            </div>
          </div>

          {/* Certifications & Achievements Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-8 h-8 text-indigo-500" />
              <h2 className="text-3xl font-bold">Certifications & Achievements</h2>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-800 pb-2">Certifications</h3>
                <div className="grid gap-4">
                  {[
                    { name: "Digital Marketing", org: "Google", desc: "Foundational course in digital marketing strategies." },
                    { name: "UI/UX Introduction", org: "Infosys Springboard", desc: "Foundational skills in user interface and experience design." },
                    { name: "Beginning Swift", org: "Infosys Springboard", desc: "Foundational skills in iOS app development." },
                    { name: "iOS App Development", org: "Infosys Springboard", desc: "Hands-on experience building iPad applications." },
                  ].map((cert, i) => (
                    <div key={i} className="flex gap-4 items-start">
                       <CheckCircle className="w-5 h-5 text-indigo-500 shrink-0 mt-1" />
                       <div>
                          <h4 className="font-medium text-white">{cert.name}</h4>
                          <p className="text-indigo-400 text-sm">{cert.org}</p>
                          <p className="text-gray-500 text-xs">{cert.desc}</p>
                       </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-800 pb-2">Recognition</h3>
                <ul className="space-y-4">
                  <li className="bg-indigo-500/10 border border-indigo-500/20 p-4 rounded-lg">
                    <h4 className="font-bold text-indigo-300">Smart India Hackathon 2023 (Internal)</h4>
                    <p className="text-gray-400 text-sm mt-1">
                      Presented innovative solutions as part of Team INFO TRACK, demonstrating teamwork and problem-solving skills at NPR College.
                    </p>
                  </li>
                  <li className="bg-white/5 border border-white/5 p-4 rounded-lg">
                     <h4 className="font-bold text-white">Coders Clash & DRESTEIN’24</h4>
                     <p className="text-gray-400 text-sm mt-1">
                       Actively participated in national level technical fests demonstrating programming abilities.
                     </p>
                  </li>
                   <li className="bg-white/5 border border-white/5 p-4 rounded-lg">
                     <h4 className="font-bold text-white">Industrial Automation Workshop</h4>
                     <p className="text-gray-400 text-sm mt-1">
                       Participated in PLC and Robots workshop at Saveetha Engineering College (Nov 2024).
                     </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
