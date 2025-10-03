import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import type { IconType } from "react-icons";

interface SkillCardProps {
  name: string;
  Icon: IconType;
  color: string;
}

export default function SkillCard({ name, Icon, color }: SkillCardProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        show: { opacity: 1, scale: 1 }
      }}
    >
      <Card className="group hover:shadow-lg transition-shadow">
        <CardContent className="p-4 text-center">
          <Icon 
            className="w-12 h-12 mx-auto mb-2 transition-transform group-hover:scale-110"
            style={{ color }}
          />
          <p className="font-medium">{name}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
