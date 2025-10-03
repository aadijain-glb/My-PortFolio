import { motion } from "framer-motion";
import SectionTitle from "../shared/SectionTitle";

export default function About() {
  return (
    <section className="py-20 bg-black" id="about">
      <div className="container mx-auto px-4">
        <SectionTitle>About Me</SectionTitle>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 border border-gray-700 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <p className="text-lg text-white text-justify">
              I am currently pursuing my Computer Science degree specialised in
              Data Science at GL Bajaj Institute of Technology and Management,
              Greater Noida.
              <br />
              <br />
              As a C++ and Fullstack Developer in training, I enjoy solving
              complex problems with C++, building scalable backend systems with
              Spring Boot, designing responsive frontends with React, and
              integrating databases like MySQL and PostgreSQL. I focus on
              writing clean, efficient, and maintainable code.
              <br />
              <br />
              I am passionate about learning new technologies and applying them
              in real-world projects. Through my work, I aim to create
              meaningful, user-friendly applications.
              <br />
              <br />
              Let’s connect and build something amazing together!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
