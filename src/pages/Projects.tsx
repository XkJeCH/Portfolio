import React from "react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    name: "Wifi-Attack",
    description: "ออกแบบและพัฒนา Fake Login and Attack from Wi-Fi ซึ่งใช้ NodeMCU ESP8266 ในการปล่อย Wi-Fi จำลองที่ปลอมหน้า Captive Portal เพื่อใช้ในการโจมตีผู้ใช้งาน.",
    company: "XkJeCH",
    githubLink: "https://github.com/XkJeCH/Wifi-Attack", // ลิงค์ไปยัง GitHub
    // liveLink: "https://www.microsoft.com", // ลิงค์ไปยังเว็บไซต์หรือหน้าตัวอย่าง
  },
  {
    name: "Remember-Card ",
    description: "ออกแบบมาเพื่อช่วยฝึกทักษะความจดจำและการจับคู่การ์ดในเวลาสั้น ๆ อีกทั้งยังเพิ่มความสนุกและท้าทายในการแข่งขันกันของผู้เล่น พร้อมทั้งเรียนรู้การวางกลยุทธ์ในการเล่นเกม",
    company: "XkJeCH",
    githubLink: "https://github.com/XkJeCH/Remember-Card",
    // liveLink: "https://creativecommons.org",
  },
  {
    name: "Wireless Presentation and File Transfer",
    description: "ระบบที่ช่วยให้การส่งไฟล์และการนำเสนอข้อมูลเป็นเรื่องง่าย ด้วยเทคโนโลยี Cloud Computing และ IoT ผู้ใช้สามารถอัปโหลดไฟล์ไปยัง Cloud Database และเข้าถึงไฟล์จากทุกที่โดยไม่ต้องใช้สายเชื่อมต่อ อีกทั้งยังสามารถควบคุมหน้าจอพรีเซนเทชันผ่านมือถือ เพิ่มความสะดวกและประสิทธิภาพในการใช้งาน",
    company: "XkJeCH",
    githubLink: "https:/github.com/XkJeCH/WIRELESS-PRESENTATION-AND-FILETRANSFFER",
    // liveLink: "https://creativecommons.org",
  },
  {
    name: "Pocketmoney",
    description: "แอปพลิเคชันนี้มีฟังก์ชันการทำงานที่คล้ายคลึงกับการจัดการบัญชีธนาคารและการทำธุรกรรมทางการเงินต่างๆ เช่น การฝากเงิน โอนเงิน ถอนเงิน และการเช็คยอดเงิน",
    company: "XkJeCH",
    githubLink: "https://github.com/XkJeCH/Pocketmoney",
    // liveLink: "https://creativecommons.org",
  },
];

const Projects = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 ">
      {projects.map((project, index) => (
        <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200 dark:bg-gray-800 ">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-gray-100 rounded-full flex justify-center items-center text-xl text-blue-500">
              <FaGithub />
            </div>
            <h3 className="ml-4 text-xl font-semibold text-gray-800 dark:text-white">{project.name}</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-blue-100">{project.description}</p>
          <div className="mt-4">
            <span className="text-gray-500 text-xs">By {project.company}</span>
          </div>
          <div className="flex items-center mt-4 space-x-4">
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline flex items-center">
              <FaGithub className="mr-2" />
              GitHub
            </a>
            {/* <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline flex items-center">
              <FaExternalLinkAlt className="mr-2" />
              Live Demo
            </a> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
