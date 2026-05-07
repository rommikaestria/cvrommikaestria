import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "SQL", "NoSQL", "PHP", "Javascript"]
    },
    {
      title: "Frameworks",
      skills: ["FastAPI", "Flutter", "Streamlit", "Laravel"]
    },
    {
      title: "Tools & Ecosystem",
      skills: ["VSCode", "Excel / Google Sheet", "MongoDB", "Gemini AI Studio", "Google Antigravity", "Big Data Integration", "Cloud Computing"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-dark mb-2">Keahlian</h2>
          <div className="w-20 h-1 bg-navy rounded"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="p-6 bg-light rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-semibold text-dark mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="px-4 py-2 bg-white text-gray-700 text-sm font-medium rounded-lg border border-gray-200 shadow-sm hover:border-navy hover:text-navy transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
