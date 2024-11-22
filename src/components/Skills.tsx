import React from 'react';
import {
  Code2,
  Database,
  Terminal,
  Wrench
} from 'lucide-react';

const skillCategories = [
  {
    title: 'フロントエンド',
    icon: <Code2 className="w-6 h-6" />,
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
  },
  {
    title: 'バックエンド',
    icon: <Database className="w-6 h-6" />,
    skills: ['Node.js', 'Express', 'Python', 'SQL', 'MongoDB'],
  },
  {
    title: 'ツール',
    icon: <Terminal className="w-6 h-6" />,
    skills: ['Git', 'Docker', 'Terraform'],
  },
  {
    title: 'その他',
    icon: <Wrench className="w-6 h-6" />,
    skills: ['AWS', 'CI/CD', 'テスト自動化'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="space-y-8">
      <h2 className="text-3xl font-bold">Skills</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-sm border border-zinc-200"
          >
            <div className="flex items-center gap-3 mb-4">
              {category.icon}
              <h3 className="text-xl font-semibold">{category.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-3 py-1 bg-zinc-100 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}