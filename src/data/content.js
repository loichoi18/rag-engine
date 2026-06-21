// ============================================================
//  EDIT THIS FILE TO PERSONALIZE YOUR PORTFOLIO
//  Everything the site shows comes from here. No need to touch
//  the components unless you want to change layout/design.
// ============================================================

export const profile = {
  name: 'Lucas',
  role: 'AI / Machine Learning Student',
  tagline: 'I build intelligent systems, from RAG pipelines to fine-tuned models.',
  location: 'Vietnam',
  email: 'luongbadung1@gmail.com',
  resumeUrl: '', // e.g. '/resume.pdf' (put the file in /public)
  socials: {
    github: 'https://github.com/loichoi18',
    linkedin: 'https://linkedin.com/in/badunsyd/',
    twitter: '', // optional, leave '' to hide
  },
}

export const about = {
  // A short 2-3 sentence intro. Write in first person.
  paragraphs: [
    `I'm an AI/ML student focused on building things that actually work — not just notebooks. My main interests are large language models, retrieval-augmented generation, and turning research ideas into deployable systems.`,
    `Right now I'm building a RAG engine from scratch to understand the full stack: chunking, embeddings, vector search, and grounded generation. I learn fastest by shipping.`,
  ],
}

// Group your skills however you like. Add/remove groups freely.
export const skills = [
  { group: 'Languages', items: ['Python', 'JavaScript', 'SQL', 'C++'] },
  { group: 'ML / DL', items: ['PyTorch', 'TensorFlow', 'scikit-learn', 'Hugging Face'] },
  { group: 'LLM / GenAI', items: ['RAG', 'LangChain', 'Vector DBs', 'Prompt Engineering', 'Fine-tuning'] },
  { group: 'Tools & Infra', items: ['Git', 'Docker', 'FastAPI', 'Linux', 'AWS'] },
]

// Your projects. The first one with `featured: true` gets a bigger card.
export const projects = [
  {
    title: 'RAG Engine',
    featured: true,
    description:
      'A retrieval-augmented generation engine built from scratch: document chunking, embedding generation, vector similarity search, and grounded answer synthesis with citations.',
    tags: ['Python', 'Embeddings', 'Vector Search', 'LLM'],
    links: { demo: '', code: 'https://github.com/your-username/rag-engine' },
  },
  {
    title: 'Image Classifier',
    featured: false,
    description:
      'A CNN trained to classify images with data augmentation and transfer learning. Reached strong accuracy on a custom dataset.',
    tags: ['PyTorch', 'CNN', 'Transfer Learning'],
    links: { demo: '', code: '' },
  },
  {
    title: 'Sentiment Analysis API',
    featured: false,
    description:
      'A fine-tuned transformer served behind a FastAPI endpoint that returns sentiment scores in real time.',
    tags: ['Transformers', 'FastAPI', 'NLP'],
    links: { demo: '', code: '' },
  },
]

// Education + experience timeline (most recent first).
export const timeline = [
  {
    when: '2023 — Present',
    title: 'B.Sc. in Artificial Intelligence',
    place: 'Your University',
    detail: 'Coursework in machine learning, deep learning, NLP, and data structures.',
  },
  {
    when: '2025',
    title: 'ML Research / Project Work',
    place: 'Self-directed',
    detail: 'Building and open-sourcing LLM and RAG projects.',
  },
]
