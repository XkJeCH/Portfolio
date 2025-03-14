import { DevicePhoneMobileIcon, CameraIcon, PaintBrushIcon } from "@heroicons/react/24/solid"

import projectOneImg from "/images/hero3.webp"


const benefitOne = {
  title: "My Portfolio Project",
  desc: "นี่คือโปรเจคที่สร้างเพื่อใช้เป็นเว็บสะสมผลงาน โดยใช้ React และ Tailwind CSS ",
  image: projectOneImg,
  
  bullets: [
    {
      title: "Web Development",
      desc: "พัฒนาเว็บไซต์ด้วย React 19.0 ที่ให้ประสิทธิภาพสูงและตกแต่ง CSS  โดยใช้ Tailwind CSS 4.0 ในการตกแต่งเพื่อให้เว็บไซต์ดูสวยงามและตอบสนองได้เร็ว",
      icon: DevicePhoneMobileIcon,
    },
    {
      title: "Responsive Design",
      desc: "ดีไซน์ที่รองรับทุกอุปกรณ์ พร้อมปรับให้เหมาะสมกับหน้าจอทุกรูปแบบ เพื่อให้ได้รับประสบการณ์การใช้งานที่ดีที่สุดทั้งบนเว็บและมือถือ",
      icon: CameraIcon,
    },
    {
      title: "UI/UX Design",
      desc: "ออกแบบประสบการณ์ผู้ใช้ที่เรียบง่ายและสะดวกสบาย ทำให้ผู้ใช้สามารถเข้าถึงข้อมูลได้อย่างรวดเร็ว",
      icon: PaintBrushIcon,
    },
  ],
};

// const benefitTwo = {
//   title: "โปรเจคแรกของฉัน",
//   desc: "เว็บไซต์นี้ออกแบบมาเพื่อให้ได้รับประสบการณ์การใช้งานที่ดีที่สุดทั้งบนเว็บและมือถือ.",
//   image: projectTwoImg,
//   bullets: [
//     {
//       title: "Mobile  Design",
//       desc: "โปรเจคนี้้สามารถใช้งานได้ทั้งบนเว็บและมือถือ.",
//       icon: DevicePhoneMobileIcon,
//     },
//     {
//       title: "API Integration",
//       desc: "เชื่อมต่อกับ API เพื่อดึงข้อมูลมาใช้งานภายในแอปพลิเคชัน.",
//       icon: DocumentTextIcon,
//     },
//     {
//       title: "Tailwind CSS for Styling",
//       desc: "ใช้ Tailwind CSS ในการตกแต่งเพื่อให้เว็บไซต์ดูสวยงามและตอบสนองได้เร็ว.",
//       icon: PaintBrushIcon,
//     },
//   ],
// };

export { benefitOne };
