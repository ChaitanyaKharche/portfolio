'use client';

import styles from './page-v2.module.css';

export default function Portfolio() {
  const skills = {
    languages: ['Python', 'JavaScript', 'Java', 'SQL', 'Kotlin'],
    frameworks: ['React', 'Node.js', 'Django', 'Spring Boot', 'Flutter', 'Next.js'],
    mlAi: ['LangChain', 'Agentic AI', 'RAG', 'LLMs', 'Vector DBs (Pinecone, FAISS)'],
    cloud: ['AWS (EC2, Lambda, S3)', 'Docker', 'Azure DevOps', 'Git'],
    databases: ['PostgreSQL', 'MongoDB', 'MySQL']
  };

  const projects = [
    {
      name: 'LegalEaze',
      tech: 'BART-Large-CNN, LoRA, Llama-3.3-70B, H200 GPU',
      desc: 'NLP legal text simplification achieving 7th-grade readability (6.9 FKGL). Trained on 500K+ samples from 59K documents.',
      link: 'https://github.com/yourusername/legaleaze'
    },
    {
      name: 'CurriculAI',
      tech: 'Llama-3.1-70B, RAG, NetworkX, H200 GPU',
      desc: 'Agentic RAG system for personalized 32-course degree plans. Uses BAAI/bge embeddings to semantically analyze 200+ courses.',
      link: 'https://github.com/yourusername/curriculai'
    },
    {
      name: 'ProfitBook',
      tech: 'LLMs, FastAPI, 4-bit Quantization',
      desc: 'AI trading system with 40% backtested win rate. Real-time sentiment & financial analysis in <60s via microservices.',
      link: 'https://github.com/yourusername/profitbook'
    },
    {
      name: 'GreenSat',
      tech: 'Flutter, ML, Firebase',
      desc: 'Precision farming app with ML disease detection. 5K+ downloads, full production deployment with REST APIs & CI/CD.',
      link: 'https://github.com/yourusername/greensat'
    }
  ];

  const experience = [
    { 
      role: 'Software Engineer Co-op', 
      company: 'FounderWay.ai', 
      period: '09/2024 - 12/2024',
      desc: 'Built Azure OpenAI RAG system (50% engagement boost), React/Next.js frontend, Llama matching algorithm (40% accuracy gain)'
    },
    { 
      role: 'Software AI Developer Intern', 
      company: 'Bredcrums AI', 
      period: '06/2023 - 08/2023',
      desc: 'Gen-AI platform with LangChain + GPT-4, Pinecone embeddings, AWS Lambda microservices (30% cost reduction)'
    },
    { 
      role: 'Software Engineer II', 
      company: 'SDK Infotech', 
      period: '08/2021 - 08/2022',
      desc: 'Optimized REST APIs (14% throughput gain), Docker/AWS deployments (20% resource efficiency), 98% test coverage'
    },
    { 
      role: 'Software Engineer I', 
      company: 'SDK Infotech', 
      period: '09/2020 - 08/2021',
      desc: 'Django payroll app, MongoDB query optimization (48.2s → 19s), AWS EC2 infrastructure'
    },
    { 
      role: 'Lead Developer', 
      company: 'CUBYNE', 
      period: '07/2020 - 05/2022',
      desc: 'Co-founded dev team, shipped GreenSat (5K+ downloads) + 5 production platforms using Flutter/Next.js/AWS'
    }
  ];

  const certifications = [
    'AWS Certified Solutions Architect (Nov 2025)',
    'AWS Certified Cloud Practitioner (Apr 2025)'
  ];

  return (
    <div className={styles.container}>
      {/* Header Section */}
      <header className={styles.header}>
        <div className={styles.nameBlock}>
          <h1>Chaitanya Kharche</h1>
          <p className={styles.subtitle}>Full-Stack Engineer | AI/ML | 3 YOE in GenAI & RAG Pipelines</p>
        </div>
        <nav className={styles.nav}>
          <a href="mailto:ckharche226@gmail.com">Email</a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank">LinkedIn</a>
          <a href="https://github.com/yourusername" target="_blank">GitHub</a>
          <a href="/resume.pdf" target="_blank">Resume ↓</a>
        </nav>
      </header>

      {/* Main Grid */}
      <main className={styles.grid}>
        {/* Left Column: About + Skills */}
        <section className={styles.about}>
          <div className={styles.sectionHeader}>
            <span className={styles.prompt}>$</span> whoami
          </div>
          <p>
            MS CS @ Northeastern (May 2025) • 3 years building ML/AI systems, GenAI pipelines & scalable backends • 
            Shipped LLM-powered products at FounderWay.ai & Bredcrums AI • Co-founded CUBYNE (5K+ downloads) • 
            AWS Certified Solutions Architect • Available immediately for full-time AI Engineer roles (F1-OPT)
          </p>
          
          <div className={styles.sectionHeader}>
            <span className={styles.prompt}>$</span> cat skills.json
          </div>
          <div className={styles.skillsGrid}>
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className={styles.skillCategory}>
                <h4>{category.replace(/([A-Z])/g, '_$1').toLowerCase()}</h4>
                <ul>
                  {items.map(skill => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className={styles.sectionHeader}>
            <span className={styles.prompt}>$</span> ls certifications/
          </div>
          <div className={styles.skillsGrid}>
            {certifications.map((cert, idx) => (
              <p key={idx} style={{ fontSize: '1rem', color: '#cecece', margin: '0.5rem 0' }}>{cert}</p>
            ))}
          </div>
        </section>

        {/* Middle Column: Experience + Education */}
        <section className={styles.experience}>
          <div className={styles.sectionHeader}>
            <span className={styles.prompt}>$</span> cat experience.log
          </div>
          {experience.map((exp, idx) => (
            <div key={idx} className={styles.expItem}>
              <div className={styles.expHeader}>
                <strong>{exp.role}</strong>
                <span className={styles.period}>{exp.period}</span>
              </div>
              <p style={{ color: '#00ff88', fontSize: '0.875rem' }}>{exp.company}</p>
              <p className={styles.detail}>{exp.desc}</p>
            </div>
          ))}

          <div className={styles.sectionHeader} style={{ marginTop: '2rem' }}>
            <span className={styles.prompt}>$</span> education --verbose
          </div>
          <div className={styles.expItem}>
            <div className={styles.expHeader}>
              <strong>MS Computer Science</strong>
              <span className={styles.period}>09/2022 - 05/2025</span>
            </div>
            <p style={{ color: '#00ff88' }}>Northeastern University</p>
            <p className={styles.detail}>Focus: AI/ML, Algorithms, Mobile Dev, DBMS, OOD</p>
          </div>
          <div className={styles.expItem}>
            <div className={styles.expHeader}>
              <strong>BE Civil Engineering</strong>
              <span className={styles.period}>Completed</span>
            </div>
            <p style={{ color: '#00ff88' }}>Savitribai Phule Pune University</p>
          </div>
        </section>

        {/* Right Column: Projects */}
        <section className={styles.projects}>
          <div className={styles.sectionHeader}>
            <span className={styles.prompt}>$</span> ls ~/projects/
          </div>
          {projects.map((project, idx) => (
            <a 
              href={project.link} 
              key={idx} 
              className={styles.projectCard}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>{project.name}</h3>
              <p className={styles.tech}>{project.tech}</p>
              <p className={styles.desc}>{project.desc}</p>
              <span className={styles.arrow}>→</span>
            </a>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.status}>
          <span className={styles.indicator}></span>
          Available for full-time AI/ML roles • 857-313-0545
        </div>
        <div className={styles.timestamp}>
          Boston, MA • Last updated: Nov 2024
        </div>
      </footer>
    </div>
  );
}