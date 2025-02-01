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
      image: "/t1.jpeg",
      name: "Dr. Ama Owusu",
      role: "Headmistress",
      specialization: "Educational Leadership",
    },
    {
      id: 2,
      image: "/t2.jpeg",
      name: "Prof. Kofi Mensah",
      role: "Deputy Headmaster",
      specialization: "Mathematics",
    },
    {
      id: 3,
      image: "/t3.jpeg",
      name: "Dr. Akua Danso",
      role: "Head of Sciences",
      specialization: "Biology",
    },
    {
      id: 4,
      image: "/t4.jpeg",
      name: "Prof. Priscilla Boateng",
      role: "Head of Arts",
      specialization: "English Language",
    },
  ],
  students: [
    {
      id: 1,
      image: "/s1.jpeg",    
      name: "Student Life",
      desc: "Vibrant campus community",
      achievement: "National Science Fair Winners",
    },
    {
      id: 2,
      image: "/s4.jpeg",
      name: "Achievements",
      desc: "Academic excellence",
      achievement: "International Olympiad Champions",
    },
    {
      id: 3,
      image: "/s3.jpeg",
      name: "Activities",
      desc: "Extracurricular programs",
      achievement: "Regional Sports Champions",
    },
    {
      id: 4,
      image: "/s2.jpeg",
      name: "Projects",
      desc: "Innovation hub",
      achievement: "Tech Innovation Awards",
    },
  ],
  facilities: [
    {
      id: 1,
      image: "/f1.jpeg",
      name: "Digital Library",
      desc: "State-of-the-art resources",
      features: "AI-powered learning systems",
    },
    {
      id: 2,
      image: "/f2.jpeg",
      name: "Research Labs",
      desc: "Advanced equipment",
      features: "Virtual Reality Labs",
    },
    {
      id: 3,
      image: "/f3.jpeg",
      name: "Sports Complex",
      desc: "Modern facilities",
      features: "Olympic-size pool",
    },
    {
      id: 4,
      image: "/f4.jpeg",
      name: "Smart Auditorium",
      desc: "Interactive space",
      features: "3D Projection Mapping",
    },
  ],
};
