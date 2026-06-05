const STUDENT_NAME = 'OneInfo Academy Student';
const STUDENT_AVATAR = 'https://ui-avatars.com/api/?name=OneInfo+Student&background=f39200&color=fff';

export const placementStories = [
  {
    id: 'security-analyst-4lpa-june-2026',
    name: STUDENT_NAME,
    role: 'Security Analyst',
    company: 'Hiring Partner',
    location: 'India',
    package: '4 LPA',
    courseSlug: 'cyber-security-course-coimbatore',
    technology: 'Cyber Security · VAPT & Security Tools',
    type: 'placement',
    date: 'June 2026',
    image: STUDENT_AVATAR,
    proofImage: '/placements/security-analyst-4lpa-june-2026.png',
    quote:
      "I'm very happy to share that I have been selected for the role of Security Analyst with a package of 4 LPA, and I'll be joining on 5th June. The real-time skills, practical knowledge, and exposure to security tools from your training helped me a lot during the interview — they gave me the confidence to handle the technical rounds and clear the interview.",
  },
  {
    id: 'injazat-devops-uae',
    name: STUDENT_NAME,
    role: 'DevOps Engineer',
    company: 'Injazat',
    location: 'UAE',
    package: 'AED 20,000 / month',
    courseSlug: 'devops-course-coimbatore',
    technology: 'Cloud & DevOps Engineering',
    type: 'placement',
    date: '2025',
    image: STUDENT_AVATAR,
    proofImage: '/placements/injazat-devops-uae.png',
    quote:
      "I'm truly grateful for everything you've taught me. Your mentorship played a big role in helping me reach this stage. I got placed as a DevOps Engineer at Injazat in the UAE with AED 20,000 per month. Thank you for your guidance and support throughout my journey.",
  },
  {
    id: 'bavanya-smarttech',
    name: STUDENT_NAME,
    role: 'Placed at Smart Tech',
    company: 'Smart Tech',
    location: 'WFH (Work From Home)',
    package: '4 LPA',
    courseSlug: 'devops-course-coimbatore',
    technology: 'Cloud & DevOps · Docker, K8s, Jenkins',
    type: 'placement',
    date: 'May 2026',
    image: STUDENT_AVATAR,
    proofImage: '/placements/bavanya-smarttech.png',
    quote:
      "I've completed my Cloud and DevOps course here, and it was honestly a fantastic experience! The trainers explained complex concepts with real-time examples. I got hands-on with Docker, Kubernetes, Jenkins, Terraform, and CI/CD pipelines. I've been placed at Smart Tech with a 4 LPA package — WFH. Thank you so much for all your support!",
  },
  {
    id: 'vaishaali-fortumars',
    name: STUDENT_NAME,
    role: 'Placed at FORTUMARS',
    company: 'FORTUMARS',
    location: 'TIDEL Park, Coimbatore',
    courseSlug: 'ai-course-coimbatore',
    technology: 'AI & Internship Project',
    type: 'placement',
    date: 'July 2025',
    image: STUDENT_AVATAR,
    proofImage: '/placements/vaishaali-fortumars.png',
    quote:
      'Got placed sir — only because of your project sir. It is a foreign company opening their office in Coimbatore at TIDEL Park. In the interview I explained the project we built during the internship.',
  },
  {
    id: 'junior-ai-thoughtmakes',
    name: STUDENT_NAME,
    role: 'Junior AI Developer',
    company: 'Thought Makes AI',
    location: 'Coimbatore',
    courseSlug: 'ai-course-coimbatore',
    technology: 'Generative AI & LLM',
    type: 'placement',
    date: 'May 2025',
    image: STUDENT_AVATAR,
    proofImage: '/placements/junior-ai-placed.png',
    quote:
      'Job kedachuruchu — thank you brother for helping me get this job. Really appreciate your support and guidance throughout. Glad everything worked out well.',
  },
  {
    id: 'shortlisted-may-2025',
    name: STUDENT_NAME,
    role: 'Shortlisted for IT Role',
    company: 'Hiring Partner',
    location: 'Coimbatore',
    courseSlug: 'full-stack-development-course-coimbatore',
    technology: 'Full Stack Development',
    type: 'shortlisted',
    date: 'May 2025',
    image: STUDENT_AVATAR,
    proofImage: '/placements/shortlisted-may-2025.png',
    quote:
      'Your shortlisted da — team will contact soon. Thank you anna for the placement support and interview preparation.',
  },
];

export const googleReviews = [
  {
    id: 'jaya-j',
    name: STUDENT_NAME,
    role: 'Full Stack Python Development',
    courseSlug: 'python-training-in-coimbatore',
    type: 'review',
    image: STUDENT_AVATAR,
    quote:
      'OneInfo Academy is one of the best IT training institutes for Full Stack Python Development. The trainers are knowledgeable, and the friendly staff create a supportive learning environment. Highly recommended for anyone looking to build a strong career in software development.',
  },
  {
    id: 'riya-thanishka',
    name: STUDENT_NAME,
    role: 'AWS & Cloud Solutions',
    courseSlug: 'aws-training-coimbatore',
    type: 'review',
    image: STUDENT_AVATAR,
    quote:
      'I have completed my AWS Project course here, and it was a great learning experience. The trainers explained concepts clearly with real-time examples, which helped me understand the practical aspects. Highly recommended for anyone looking for quality cloud training!',
  },
  {
    id: 'vasantha-kohila',
    name: STUDENT_NAME,
    role: 'Cloud & DevOps Engineering',
    courseSlug: 'devops-course-coimbatore',
    type: 'review',
    image: STUDENT_AVATAR,
    quote:
      'I successfully completed the Cloud and DevOps course, and I am extremely satisfied with the overall learning experience. The course was well-structured and covered important technologies such as AWS, Docker, Kubernetes, and CI/CD pipelines.',
  },
  {
    id: 'chandra-chinnadurai',
    name: STUDENT_NAME,
    role: 'Cyber Security Specialist',
    courseSlug: 'cyber-security-course-coimbatore',
    type: 'review',
    image: STUDENT_AVATAR,
    quote:
      "I have enjoyed the 'Cyber Security' course. The instructor was incredibly knowledgeable and kept the energy high, making complex topics like Ethical hacking and VAPT easy to understand.",
  },
  {
    id: 'navi',
    name: STUDENT_NAME,
    role: 'Data Analytics Student',
    courseSlug: 'data-science-course-coimbatore',
    type: 'review',
    image: STUDENT_AVATAR,
    quote:
      "I recently learned the Data Analytics course in this institute. It's really awesome, the staff are very friendly, and it's worth comparing to other institutes!!",
  },
];

/** Combined list — real placements first, then Google reviews */
export const testimonials = [...placementStories, ...googleReviews];

export const placementStats = [
  { label: 'Students Mentored', value: 500, suffix: '+' },
  { label: 'Skill Domains', value: 12, suffix: '' },
  { label: 'Job Readiness', value: 100, suffix: '%' },
  { label: 'Avg Salary Hike', value: 40, suffix: '%' },
];

export const placementFeatures = [
  {
    title: 'Resume & ATS Optimization',
    description: 'Craft a tech-focused resume that passes through tracking systems and gets noticed by recruiters.',
    icon: '📄',
  },
  {
    title: 'LinkedIn Branding',
    description: 'Optimize your LinkedIn profile to attract recruiters and build a professional network in your domain.',
    icon: '👤',
  },
  {
    title: 'Technical Mock Interviews',
    description: 'Realistic interview sessions with our expert panel to prepare you for high-pressure technical rounds.',
    icon: '👨‍💻',
  },
  {
    title: 'Soft Skills & Etiquette',
    description: 'Learn how to communicate effectively, handle negotiations, and present your projects confidently.',
    icon: '🗣️',
  },
  {
    title: 'Job Search Strategy',
    description: 'Navigate the modern job market, find hidden opportunities, and apply strategically to dream companies.',
    icon: '🎯',
  },
  {
    title: 'Life-time Career Support',
    description: 'Access our alumni community and get ongoing career advice even after landing your first role.',
    icon: '♾️',
  },
];
