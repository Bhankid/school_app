interface TabContent {
  id: number;
  image: string;
  name: string;
  role?: string;
  desc?: string;
  specialization?: string;
  achievement?: string;
  features?: string;
}

export const tabContent: { [key: string]: TabContent[] } = {
  staff: [
    {
      id: 1,
      image: "https://source.unsplash.com/400x400/?professor",
      name: "Dr. Sarah Smith",
      role: "Principal",
      specialization: "Educational Leadership",
    },
    {
      id: 2,
      image: "https://source.unsplash.com/400x400/?teacher",
      name: "Prof. John Davis",
      role: "Vice Principal",
      specialization: "Mathematics",
    },
    {
      id: 3,
      image: "https://source.unsplash.com/400x400/?lecturer",
      name: "Dr. Emily Brown",
      role: "Head of Sciences",
      specialization: "Physics",
    },
    {
      id: 4,
      image: "https://source.unsplash.com/400x400/?instructor",
      name: "Prof. Michael Chen",
      role: "Head of Arts",
      specialization: "Fine Arts",
    },
  ],
  students: [
    {
      id: 1,
      image: "https://source.unsplash.com/400x400/?student-group",
      name: "Student Life",
      desc: "Vibrant campus community",
      achievement: "National Science Fair Winners",
    },
    {
      id: 2,
      image: "https://source.unsplash.com/400x400/?graduation",
      name: "Achievements",
      desc: "Academic excellence",
      achievement: "International Olympiad Champions",
    },
    {
      id: 3,
      image: "https://source.unsplash.com/400x400/?students",
      name: "Activities",
      desc: "Extracurricular programs",
      achievement: "Regional Sports Champions",
    },
    {
      id: 4,
      image: "https://source.unsplash.com/400x400/?student-project",
      name: "Projects",
      desc: "Innovation hub",
      achievement: "Tech Innovation Awards",
    },
  ],
  facilities: [
    {
      id: 1,
      image: "https://source.unsplash.com/400x400/?modern-library",
      name: "Digital Library",
      desc: "State-of-the-art resources",
      features: "AI-powered learning systems",
    },
    {
      id: 2,
      image: "https://source.unsplash.com/400x400/?science-lab",
      name: "Research Labs",
      desc: "Advanced equipment",
      features: "Virtual Reality Labs",
    },
    {
      id: 3,
      image: "https://source.unsplash.com/400x400/?sports-facility",
      name: "Sports Complex",
      desc: "Modern facilities",
      features: "Olympic-size pool",
    },
    {
      id: 4,
      image: "https://source.unsplash.com/400x400/?auditorium",
      name: "Smart Auditorium",
      desc: "Interactive space",
      features: "3D Projection Mapping",
    },
  ],
};
