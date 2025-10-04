import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { useLocation } from "wouter";
import SectionTitle from "../shared/SectionTitle";

export default function Projects() {
  const [, setLocation] = useLocation();
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: "Multiple Window Syncronizer",
      title: "Multiple Window Syncronizer",
      description:
        "Real-time synchronization of multiple browser windows or tabs, ensuring seamless state updates and smooth interactions across all windows.",
      technologies: [
        "React.js",
        "Three.js",
        "Node.js",
        "Express.js",
        "Socket.io",
      ],
      githubUrl: "https://github.com/aadijain-glb/Multiple-window-syncronizer",
      liveUrl: null,
    },

    {
      id: "GPS Tracker",
      title: "Real-Time GPS Tracker",
      description:
        "A full-stack real-time GPS tracking application using Express.js and Socket.io. Tracks device locations live and updates the frontend map in real time.",
      technologies: [
        "React.js",
        "Tailwind CSS",
        "Express.js",
        "Socket.io",
        "Node.js",
      ],
      githubUrl: "https://github.com/aadijain-glb/GPS-REAL-TIME-TRACKER",
      liveUrl: null,
    },
    {
      id: "shopin",
      title: "ShopIn - Shopping Website",
      description:
        "Full-stack shopping website built using Spring Boot and React with customer/admin portals.",
      technologies: [
        "Java",
        "Spring Boot",
        "REST APIs",
        "Hibernate",
        "React",
        "Tailwind CSS",
        "MySQL",
      ],
      githubUrl: "https://github.com/aadijain-glb/Shopin-backend-main",
      liveUrl: null,
    },
    {
      id: "proposalai",
      title: "ProposalAI - AI Business Proposal Generator",
      description:
        "AI-driven business proposal generator with multiple templates, tones, and export options.",
      technologies: [
        "React",
        "Express",
        "Typescript",
        "PostgreSQL",
        "Google Gemini AI API",
      ],
      githubUrl: "https://github.com/aadijain-glb",
      liveUrl: null,
    },
    {
      id: "fixedahead",
      title: "FixedAhead - Pothole Detection Website",
      description:
        "Detect potholes on road images with YOLOv11, visualized in a web app with React & FastAPI.",
      technologies: [
        "Python",
        "YOLOv11",
        "Google Colab",
        "React",
        "TypeScript",
        "FastAPI",
      ],
      githubUrl: "https://github.com/aadijain-glb/fixedAhead-main",
      liveUrl: null,
    },
  ];

  return (
    <section ref={ref} id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4  py-0 text-white">
        <SectionTitle>Featured Projects</SectionTitle>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <Card
              key={project.id}
              onClick={() => setLocation(`/project/${project.id}`)}
              className={`group bg-gradient-to-br from-gray-900 via-black to-gray-800 
    text-white border border-gray-700 px-8 py-8 text-xl 
    hover:from-gray-800 hover:via-gray-900 hover:to-gray-700 
    transition-colors
    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center">
                    <Github size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {project.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4 p-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs bg-gradient-to-br from-gray-900 via-black to-gray-800"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.githubUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.githubUrl, "_blank");
                      }}
                      className="flex-1 text-white bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 transition-colors duration-300"
                    >
                      <Github size={16} className="mr-2" /> Code
                    </Button>
                  )}
                  {project?.liveUrl && (
                    <Button
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (project.liveUrl) {
                          window.open(project.liveUrl, "_blank");
                        }
                      }}
                      className="flex-1 flex items-center justify-center bg-blue-800 hover:bg-blue-700 text-black px-4 py-2 rounded"
                    >
                      <ExternalLink size={16} className="mr-2" /> Live Demo
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
