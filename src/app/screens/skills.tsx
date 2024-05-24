import React from 'react';

const Skills: React.FC = () => {
  const skills = [
    'Typescript',
    'HTML',
    'CSS',
    'Javascript',
    'Vite',
    'GitHub',
    'Docker',
    'Docker Compose',
    'Python',
    'Tailwind',
    'Gitlab',
    'Azure DevOps',
  ];

  const technologies = ['React', 'Next.js', 'Express.js', 'MongoDB', 'MySQL'];

  return (
    <div className="container mx-auto mt-8">
      <div className="flex flex-col">
        <h2 className="flex flex-col items-center text-2xl font-bold mb-4">Habilidades</h2>
        <div className="bg-gray-200 rounded-lg shadow-md p-4"style={{background:'#8F5F3F'}}>
          <h3 className="text-lg font-bold mb-4">Habilidades técnicas</h3>
          <div className="grid grid-cols-3 gap-4">
            {skills.map((skill) => (
              <div key={skill} className="bg-white rounded-md p-2 shadow-inner text-center" style={{background:'#C7A77D'}}>
                {skill}
              </div>
            ))}
          </div>
          <h3 className="text-lg font-bold mt-4 mb-4">Tecnologías utilizadas</h3>
          <div className="grid grid-cols-3 gap-4">
            {technologies.map((technology) => (
              <div key={technology} className="bg-gray-100 rounded-md p-2 shadow-inner text-center" style={{background: '#C7A77D'}}>
                {technology}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;