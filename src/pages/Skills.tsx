import {
  FaReact,
  FaNode,
  FaDatabase,
  FaJava,
  FaPhp,
  FaPython,
  FaJsSquare,
  FaBootstrap,
  FaAws,
  FaGithub,
  FaLinux,
} from "react-icons/fa";
import {
  SiKotlin,
  SiMongodb,
  SiTypescript,
  SiExpress,
  SiFirebase,
  SiTailwindcss,
  SiVite,
  SiPostman,
} from "react-icons/si";
import { DiJqueryLogo } from "react-icons/di";
import { TbBrandLaravel } from "react-icons/tb";
import { MdOutlineTerrain } from "react-icons/md";
import { IoLogoDocker } from "react-icons/io5";
import { FiFigma } from "react-icons/fi";
import { VscCode } from "react-icons/vsc";
import { SiApache } from "react-icons/si"; 
import { Icon } from "@iconify/react"; 


const skillsByCategory = {
  "Programming Languages": [
    { name: "Kotlin", icon: <SiKotlin />, rating: 4, description: "ภาษาโปรแกรมมิ่งที่ใช้สำหรับพัฒนาแอปพลิเคชันบน Android" },
    { name: "C", icon: <Icon icon="simple-icons:c" />, rating: 3, description: "ภาษาโปรแกรมมิ่งที่ใช้สำหรับพัฒนาซอฟต์แวร์ระบบและแอปพลิเคชันระดับล่าง" },
    { name: "C++", icon: <Icon icon="simple-icons:cplusplus" />, rating: 4, description: "ภาษาโปรแกรมมิ่งที่ใช้สำหรับพัฒนาซอฟต์แวร์ระบบและแอปพลิเคชันที่ต้องการประสิทธิภาพสูง" },
    { name: "Java", icon: <FaJava />, rating: 4, description: "ภาษาโปรแกรมมิ่งที่ใช้สำหรับพัฒนาแอปพลิเคชันบน Android และระบบอื่นๆ" },
    { name: "JavaScript", icon: <FaJsSquare />, rating: 5, description: "ภาษาโปรแกรมมิ่งที่ใช้สำหรับพัฒนาเว็บไซต์แบบไดนามิกและแอปพลิเคชันฝั่งไคลเอ็นต์" },
    { name: "TypeScript", icon: <SiTypescript />, rating: 5, description: "ภาษาโปรแกรมมิ่งที่ขยายความสามารถของ JavaScript ด้วยการตรวจสอบประเภทตัวแปร" },
    { name: "PHP", icon: <FaPhp />, rating: 4, description: "ภาษาโปรแกรมมิ่งที่ใช้สำหรับพัฒนาเว็บไซต์และแอปพลิเคชันฝั่งเซิร์ฟเวอร์" },
    { name: "Python", icon: <FaPython />, rating: 4, description: "ภาษาโปรแกรมมิ่งที่ใช้สำหรับพัฒนาแอปพลิเคชันและระบบอัตโนมัติ" },
  ],
  Databases: [
    { name: "Oracle", icon: <FaDatabase />, rating: 4, description: "ฐานข้อมูลเชิงสัมพันธ์ที่ใช้สำหรับจัดเก็บและจัดการข้อมูลขนาดใหญ่" },
    { name: "MongoDB", icon: <SiMongodb />, rating: 3, description: "ฐานข้อมูลแบบ NoSQL ที่ใช้สำหรับจัดเก็บข้อมูลที่มีโครงสร้างไม่แน่นอน" },
    { name: "MySQL", icon: <FaDatabase />, rating: 4, description: "ฐานข้อมูลเชิงสัมพันธ์ที่ใช้สำหรับจัดเก็บและจัดการข้อมูลบนเว็บไซต์" },
    { name: "Firebase", icon: <SiFirebase />, rating: 4, description: "ฐานข้อมูลแบบ NoSQL ที่ใช้สำหรับพัฒนาแอปพลิเคชันแบบเรียลไทม์" },
  ],
  FrameworksAndLibraries: [
    { name: "ReactJS", icon: <FaReact />, rating: 5, description: "เฟรมเวิร์กสำหรับพัฒนาเว็บไซต์แบบไดนามิกและแอปพลิเคชันฝั่งไคลเอ็นต์" },
    { name: "JQuery", icon: <DiJqueryLogo />, rating: 3, description: "ไลบรารี JavaScript สำหรับจัดการและปรับแต่งหน้าเว็บ" },
    { name: "Laravel", icon: <TbBrandLaravel />, rating: 4, description: "เฟรมเวิร์ก PHP สำหรับพัฒนาเว็บไซต์และแอปพลิเคชันฝั่งเซิร์ฟเวอร์" },
    { name: "TailwindCSS", icon: <SiTailwindcss />, rating: 5, description: "เฟรมเวิร์ก CSS สำหรับออกแบบและปรับแต่งหน้าเว็บ" },
    { name: "Bootstrap", icon: <FaBootstrap />, rating: 4, description: "เฟรมเวิร์ก CSS สำหรับออกแบบและปรับแต่งหน้าเว็บ" },
    { name: "ViteJS", icon: <SiVite />, rating: 5, description: "เครื่องมือสำหรับสร้างและพัฒนาเว็บไซต์แบบไดนามิก" },
    { name: "NodeJS", icon: <FaNode />, rating: 5, description: "แพลตฟอร์มสำหรับพัฒนาแอปพลิเคชันฝั่งเซิร์ฟเวอร์" },
    { name: "ExpressJS", icon: <SiExpress />, rating: 4, description: "เฟรมเวิร์กสำหรับพัฒนาแอปพลิเคชันฝั่งเซิร์ฟเวอร์บน NodeJS" },
    { name: "Bun", icon: <FaNode />, rating: 5, description: "แพลตฟอร์มสำหรับพัฒนาแอปพลิเคชันฝั่งเซิร์ฟเวอร์" },
    { name: "Material UI", icon: <MdOutlineTerrain />, rating: 4, description: "ไลบรารีสำหรับออกแบบและปรับแต่งหน้าเว็บ" },
    { name: "Socket.io", icon: <IoLogoDocker />, rating: 4, description: "ไลบรารีสำหรับพัฒนาแอปพลิเคชันแบบเรียลไทม์" },
  ],
  Tools: [
    { name: "AWS", icon: <FaAws />, rating: 5, description: "แพลตฟอร์มคลาวด์สำหรับจัดเก็บและจัดการข้อมูล" },
    { name: "Figma", icon: <FiFigma />, rating: 5, description: "เครื่องมือสำหรับออกแบบและปรับแต่งหน้าเว็บ" },
    { name: "VS Code", icon: <VscCode />, rating: 5, description: "โปรแกรมแก้ไขโค้ดสำหรับพัฒนาแอปพลิเคชัน" },
    { name: "Android Studio", icon: <Icon icon="simple-icons:androidstudio" />, rating: 4, description: "โปรแกรมแก้ไขโค้ดสำหรับพัฒนาแอปพลิเคชันบน Android" },
    { name: "Postman", icon: <SiPostman />, rating: 5, description: "เครื่องมือสำหรับทดสอบ API" },
    { name: "Github", icon: <FaGithub />, rating: 5, description: "แพลตฟอร์มสำหรับจัดการโค้ดและทำงานร่วมกับทีม" },
    { name: "XAMPP", icon: <SiApache />, rating: 5, description: "เครื่องมือสำหรับจัดการและปรับแต่งเซิร์ฟเวอร์" },
    { name: "Canva", icon: <Icon icon="simple-icons:canva" />, rating: 4, description: "เครื่องมือสำหรับออกแบบกราฟฟิกและหน้าเว็บ" },
    { name: "Linux", icon: <FaLinux />, rating: 5, description: "ระบบปฏิบัติการแบบเปิดสำหรับใช้งานบนเซิร์ฟเวอร์และคอมพิวเตอร์" },
  ]
};

const renderStars = (rating: number) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(<span key={i}>{i <= rating ? "★" : "☆"}</span>);
  }
  return stars;
};

const SkillsList = () => {
  return (
    <div className="p-6">
      {/* Loop through categories */}
      {Object.entries(skillsByCategory).map(([category, skills], index) => (
        <div key={index} className="mb-10">
          {/* Section Title */}
          <h2 className="text-2xl font-bold text-orange-600 mb-4 dark:text-gray-200">{category}</h2>
          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Render each skill */}
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-md p-6 transition duration-300 hover:bg-blue-500 hover:text-white dark:bg-gray-800 dark:hover:bg-blue-600 dark:hover:text-gray-100"
              >
                {/* Skill Icon and Name */}
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex justify-center items-center text-blue-500 text-xl">
                    {skill.icon}
                  </div>
                  <h3 className="ml-4 text-lg font-semibold">{skill.name}</h3>
                </div>
                {/* Skill Description */}
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{skill.description}</p>
                {/* Rating */}
                <div className="mt-2 text-yellow-500">{renderStars(skill.rating)}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsList;
