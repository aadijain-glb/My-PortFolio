import { useRoute, useLocation } from "wouter";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ArrowLeft } from "lucide-react";

const projectsData: Record<string, any> = {
  bchat: {
    title: "Multiple Window Syncronizer",
    description: `
A personal project for seamless real-time window syncing with a secure and intuitive experience.

Key Features:
- One-on-one messaging
- Secure authentication
- Encrypted storage

Details:
- Developed a dynamic frontend using React.js and DaisyUI
- Powered by Node.js and Express.js for backend handling and real-time communication
- Integrated Socket.io for instant messaging and MongoDB for encrypted data storage
- Designed for scalability and smooth performance
    `,
    technologies: [
      "React.js",
      "DaisyUI",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
    ],
    githubUrl: "https://github.com/aadijain-glb",
    liveUrl: null,
  },
  doorway: {
    title: "Real Time GPS tracker",
    description: `
A project used to track the real time location with seamless experience of the user.

Key Features:
- Job posting and resume uploads
- Application tracking
- Real-time notifications

Details:
- Developed a responsive frontend using React.js, Tailwind CSS, and Shadcn UI
- Powered by Supabase for real-time database management and serverless APIs
- Integrated Clerk for authentication with social login and role-based access control
- Designed for scalability with lazy loading and mobile-first responsiveness
    `,
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Supabase",
      "Clerk",
      "Shadcn UI",
    ],
    githubUrl: "https://github.com/aadijain-glb",
    liveUrl: null,
  },
  shopin: {
    title: "ShopIn - Shopping Website",
    description: `
Full-stack shopping website built using Spring Boot and React.

Key Features:
- User registration and login
- Customer portal to browse products
- Admin dashboard to add, edit, and delete products
- Email notifications to customers
- Product rating display
- Responsive design
    `,
    technologies: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "Hibernate",
      "React",
      "Tailwind CSS",
      "MySQL",
    ],
    githubUrl: "https://github.com/aadijain-glb",
    liveUrl: null,
  },
  proposalai: {
    title: "ProposalAI - AI Business Proposal Generator",
    description: `
A powerful AI-driven business proposal generator that helps professionals create compelling proposals in minutes.

Key Features:
- AI-Powered Generation using Google's Gemini AI
- Intelligent Content Creation
- Multiple Tone Options: Professional, casual, persuasive
- Pre-built & Customizable Templates
- Role-based Access & Multi-role Support
- PDF and DOCX Export
- Secure Authentication and Session Management
- AI Chat Assistant for business guidance and industry insights
    `,
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
  fixedahead: {
    title: "FixedAhead - Pothole Detection Website",
    description: `
A web application for pothole detection that visualizes potholes on uploaded road images using bounding boxes.

Key Features:
- YOLOv11s model trained to detect potholes with mAP@0.5 of 80.77%
- Empty-Image Supervision (EIS) reduces false positives
- Test-Time Augmentation (TTA) improves robustness
- High-resolution training (832x832) for small/partially obscured potholes
- Data-centric augmentations (color shift, rotation, mosaic, mixup) for better generalization

Details:
- Frontend developed with React and TypeScript
- Backend with FastAPI
- Model implemented in Python using YOLOv11
- Google Colab used for model training
    `,
    technologies: [
      "Python",
      "YOLOv11",
      "Google Colab",
      "React",
      "TypeScript",
      "FastAPI",
    ],
    githubUrl: "https://github.com/aadijain-glb",
    liveUrl: null,
  },
};

export default function ProjectDetail() {
  const [match, params] = useRoute<{ id: string }>("/project/:id");
  const [, setLocation] = useLocation();
  const id = params?.id;

  if (!id || !projectsData[id])
    return <p className="text-center py-20">Project not found!</p>;

  const project = projectsData[id];

  return (
    <section className="py-20 bg-black min-h-screen">
      <div className="container mx-auto px-4 ">
        {/* Back Button */}
        <Button
          variant="outline"
          size="sm"
          className="mb-6 flex items-center gap-2 border-none bg-black"
          onClick={() => setLocation("/#projects")}
        >
          <ArrowLeft size={16} /> Back to Projects
        </Button>

        <Card className="shadow-lg bg-blue-50">
          <CardHeader>
            <CardTitle className="text-3xl font-bold mb-2">
              {project.title}
            </CardTitle>
            <CardDescription className="whitespace-pre-wrap text-sm text-white">
              {project.description}
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech: string) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="text-xs bg-white"
                >
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="flex gap-3">
              {project.githubUrl && (
                <Button
                  variant="outline"
                  onClick={() => window.open(project.githubUrl, "_blank")}
                  className="text-white bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 transition-colors duration-300"
                >
                  <Github size={16} className="mr-2" /> Code
                </Button>
              )}
              {project.liveUrl && (
                <Button
                  className="bg-blue-800 hover:bg-blue-700 text-white"
                  onClick={() => window.open(project.liveUrl, "_blank")}
                >
                  <ExternalLink size={16} className="mr-2" /> Live Demo
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
