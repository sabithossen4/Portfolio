import React from 'react';

const skills = [
	"JavaScript",
	"React",
	"MongoDB",
	"Express",
	"Firebase",
	"HTML5",
	"CSS3",
	"Tailwind",
	"Bootstrap",
	"Git",	
	"Node.js",		
	"Figma",		
];

const Skills = () => {
  return (
    <section id="skills" className="relative z-10 py-10 lg:py-20 px-6">
				<div className="max-w-7xl mx-auto">
					<h2 className="text-4xl md:text-5xl font-bold text-center mb-8 lg:mb-10 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
						Skills & Technologies
					</h2>
					<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
						{skills.map((skill, index) => (
							<div
								key={skill}
								className="p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:bg-white/10 text-center group"
								style={{ animationDelay: `${index * 0.1}s` }}
							>
								<span className="font-semibold text-sm group-hover:text-cyan-400 transition-colors duration-300">
									{skill}
								</span>
							</div>
						))}
					</div>
				</div>
			</section>
  );
};

export default Skills;