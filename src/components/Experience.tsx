import React from 'react';

const experiences = [
  {
    title: 'ブラック企業へ就職予定',
    role: 'M&Aコンサルタント',
    company: '株式会社日本M&Aセンター',
    description: '売りたい会社と買いたい会社の仲介業',
  },
  {
    title: '長期インターン',
    role: 'toC営業',
    company: '株式会社エースリー',
    description: '携帯乗り換え促販部隊',
  },
];

export default function Experience() {
  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-bold">Experience</h2>
      
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-sm border border-zinc-200 hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-semibold">{exp.title}</h3>
            <p className="text-zinc-600 mt-2">{exp.company}</p>
            <p className="text-zinc-500 mt-1">{exp.role}</p>
            <p className="text-zinc-600 mt-4">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}