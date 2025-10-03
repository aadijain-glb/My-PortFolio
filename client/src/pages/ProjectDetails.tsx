import { useParams } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

const projects = {
  doorway: {
    title: "DOORWAY - Full Stack Job Portal",
    description:
      "A personal project to connect job seekers and employers through a robust, feature-rich job portal, built with modern web technologies for seamless functionality and user-centric design.",
    features: [
      "Developed a dynamic frontend using React JS, Tailwind CSS, and Shadcn UI for a responsive, user-friendly interface",
      "Powered by Supabase for real-time database management and serverless APIs",
      "Integrated Clerk for secure authentication with social login and role-based access control",
      "Key features: Job posting, resume uploads, application tracking, and real-time notifications",
      "Designed for scalability and performance with lazy loading and mobile-first responsiveness",
    ],
    technologies: [
      "React JS",
      "Tailwind CSS",
      "Supabase",
      "Clerk",
      "Shadcn UI",
    ],
    image: "https://placehold.co/1200x600/333/white?text=Doorway+Project",
    github: "https://github.com/aadijain-glb",
    demo: "#",
  },
  bchat: {
    title: "BChat - Full Stack Chatting App",
    description:
      "A personal project for seamless real-time messaging with a secure and intuitive experience.",
    features: [
      "Developed a dynamic frontend using React.js and Daisy UI",
      "Powered by Node.js and Express.js for backend handling and real-time communication",
      "Integrated Socket.io for instant messaging and MongoDB for encrypted data storage",
      "Designed for scalability and smooth performance",
    ],
    technologies: [
      "React.js",
      "DaisyUI",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
    ],
    image: "https://placehold.co/1200x600/333/white?text=BChat",
    github: "https://github.com/aadijain-glb",
    demo: "#",
  },
  shopin: {
    title: "ShopIn - Shopping Website",
    description:
      "Full-stack shopping website built using Spring Boot and React, with user and admin portals for seamless e-commerce experience.",
    features: [
      "User registration and login",
      "Customer portal to browse products",
      "Admin dashboard to add, edit, and delete products",
      "Email notifications for user registration, new product, and product updates",
      "Product rating display",
      "Responsive design",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "Hibernate",
      "React",
      "Tailwind CSS",
      "MySQL",
    ],
    image: "https://placehold.co/1200x600/333/white?text=ShopIn",
    github: "https://github.com/aadijain-glb",
    demo: "#",
  },
  proposalai: {
    title: "ProposalAI - AI Business Proposal Generator",
    description:
      "A powerful AI-driven business proposal generator that helps professionals create compelling proposals quickly and efficiently.",
    features: [
      "AI-Powered Generation using Google's Gemini AI",
      "Intelligent Content Creation with multiple tone options (professional, casual, persuasive)",
      "Pre-built & Customizable Templates",
      "Role-based Access & Multi-role Support",
      "PDF and DOCX Export",
      "Secure Authentication and Session Management",
      "AI Chat Assistant for business guidance and industry insights",
    ],
    technologies: [
      "React",
      "Express",
      "TypeScript",
      "PostgreSQL",
      "Google Gemini AI API",
    ],
    image: "https://placehold.co/1200x600/333/white?text=ProposalAI",
    github: "https://github.com/aadijain-glb",
    demo: "#",
  },
  fixedahead: {
    title: "FixedAhead - Pothole Detection Website",
    description:
      "A web application for pothole detection that visualizes potholes on uploaded road images using bounding boxes and YOLOv11s model.",
    features: [
      "YOLOv11s model trained with mAP@0.5 of 80.77% for robust pothole detection",
      "Empty-Image Supervision (EIS) to reduce false positives",
      "Test-Time Augmentation (TTA) improves robustness",
      "High-resolution training (832x832) for small/partially obscured potholes",
      "Data-centric augmentations (color shift, rotation, mosaic, mixup) for better generalization",
      "Frontend with React and TypeScript, Backend with FastAPI",
      "Model implemented in Python, trained on Google Colab",
    ],
    technologies: [
      "Python",
      "YOLOv11",
      "Google Colab",
      "React",
      "TypeScript",
      "FastAPI",
    ],
    image: "https://placehold.co/1200x600/333/white?text=FixedAhead",
    github: "https://github.com/aadijain-glb",
    demo: "#",
  },
};

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects[id as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card>
          <CardContent className="p-6">
            <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
            <Link href="/#projects">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen py-20"
    >
      <div className="container mx-auto px-4">
        <Link href="/#projects">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </Link>

        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          className="space-y-8"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-[400px] object-cover rounded-lg shadow-lg"
          />

          <div className="space-y-6">
            <h1 className="text-4xl font-bold">{project.title}</h1>

            <p className="text-lg text-muted-foreground">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Key Features</h2>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="flex gap-4">
              <Button
                size="lg"
                onClick={() => window.open(project.github, "_blank")}
                className="gap-2"
              >
                <Github className="h-5 w-5" />
                View Source Code
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.open(project.demo, "_blank")}
                className="gap-2"
              >
                <ExternalLink className="h-5 w-5" />
                Live Demo
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
