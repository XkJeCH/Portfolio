import { Container } from "@/components/shared/main/Container";
import { FaReact, FaNodeJs, FaExternalLinkAlt, FaJava, FaJsSquare, FaPython } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { Link } from "react-router";

interface SkillProps {
  Icon: React.ElementType;
  name: string;
  description: string;
  rating: number;
}

export default function Skills() {
  return (
    <Container>
      <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
        {/* Skill Cards */}
        <SkillCard
          Icon={FaJava}
          name="Java"
          description="ภาษาที่หลากหลาย ใช้ในแอปพลิเคชันระดับองค์กร"
          rating={4}
        />
        <SkillCard
          Icon={FaJsSquare}
          name="JavaScript"
          description="ภาษาสคริปต์ยอดนิยมสำหรับเว็บและเซิร์ฟเวอร์"
          rating={5}
        />
        <SkillCard
          Icon={SiTypescript}
          name="TypeScript"
          description="ซูเปอร์เซ็ตของ JavaScript ที่ปลอดภัยยิ่งขึ้น"
          rating={5}
        />
        <SkillCard
          Icon={FaPython}
          name="Python"
          description="ภาษาอ่านง่าย ใช้ได้ตั้งแต่เว็บไซต์ถึง AI"
          rating={4}
        />
        <SkillCard
          Icon={FaReact}
          name="ReactJS"
          description="ไลบรารีสำหรับสร้าง UI ที่เร็วและมีประสิทธิภาพ"
          rating={5}
        />
        <SkillCard
          Icon={FaNodeJs}
          name="Node.js"
          description="รันไทม์ JavaScript สำหรับเซิร์ฟเวอร์ที่ขยายได้"
          rating={5}
        />
      </div>

      {/* View All Button */}
      <div className="mt-10 flex justify-center">
        <Link to="/skills">
          <button className="flex items-center text-blue-500 hover:text-blue-700 text-lg border border-blue-500 rounded-md p-2 hover:bg-blue-100">
            <span>View All</span>
            <FaExternalLinkAlt className="ml-2 w-4 h-4" />
          </button>
        </Link>
      </div>
    </Container>
  );
}

function SkillCard({ Icon, name, description, rating }: SkillProps) {
  const stars = Array(rating).fill("★").join("");
  return (
    <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 px-8 py-12 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      {/* Icon */}
      <Icon className="text-5xl text-blue-500 mb-4" />
      
      {/* Name */}
      <div className="text-lg font-semibold text-gray-800 dark:text-gray-200">{name}</div>
      
      {/* Description */}
      <div className="text-sm text-gray-600 dark:text-gray-400 text-center mt-2">{description}</div>
      
      {/* Rating */}
      <div className="mt-4 text-yellow-500">{stars}</div>
    </div>
  );
}
