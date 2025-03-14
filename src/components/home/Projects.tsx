import { Container } from "@/components/shared/main/Container";
import { Link } from "react-router"; // ใช้ Link จาก react-router-dom
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; // ใช้ไอคอนจาก react-icons

interface ProjectProps {
  title: string;
  description: string;
  orgName: string;
  githubLink: string;
}

export default function Project() {
  return (
    <Container>
      <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
        {/* Card for each project */}
        <ProjectCard
          title="Wifi-Attack"
          description="พัฒนา Wi-Fi จำลองพร้อมหน้า Captive Portal เพื่อการทดสอบด้านความปลอดภัย."
          orgName="XkJeCH"
          githubLink="https://github.com/XkJeCH/Wifi-Attack"
        />
        <ProjectCard
          title="Remember-Card"
          description="เกมจับคู่การ์ดเพื่อฝึกความจำ พร้อมโหมดการแข่งขันที่สนุกสนาน."
          orgName="XkJeCH"
          githubLink="https://github.com/XkJeCH/Remember-Card"
        />
        <ProjectCard
          title="Wireless Presentation and File Transfer"
          description="ระบบส่งไฟล์และนำเสนอข้อมูลแบบไร้สายผ่าน Cloud ช่วยให้เข้าถึงและควบคุมการพรีเซนต์จากมือถือได้ง่าย สะดวก และรวดเร็ว"
          orgName="XkJeCH"
          githubLink="https://github.com/XkJeCH/WIRELESS-PRESENTATION-AND-FILETRANSFFER"
        />
      </div>

      {/* View All Button */}
      <div className="mt-10 flex justify-center">
        <Link to="/projects">
        <button className="flex items-center text-blue-700 hover:text-blue-900 text-lg border border-blue-700 rounded-md p-2 hover:bg-blue-200">
            <span>View All</span>
            <FaExternalLinkAlt className="ml-2 w-4 h-4" />
          </button>
        </Link>
      </div>
    </Container>
  );
}

// Project Card Component
function ProjectCard({ title, description, orgName, githubLink }: ProjectProps) {
  return (
    <div className="flex flex-col bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-6 py-8 rounded-xl shadow-lg hover:shadow-2xl">
    {/* Title and Organization */}
    <div className="flex items-center space-x-4">
      <div>
        <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">{title}</div>
        <div className="text-sm text-gray-700 dark:text-gray-300">{orgName}</div>
      </div>
    </div>
  
    {/* Description */}
    <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">{description}</p>
  
    {/* GitHub Link */}
    <div className="mt-4 flex justify-start">
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        <button className="text-blue-700 hover:text-blue-900 flex items-center">
          <FaGithub className="mr-2" />
          GitHub
        </button>
      </a>
    </div>
  </div>
  
  );
}
