import { benefitOne } from "@/assets/data";
import { Benefits } from "@/components/home/Benefits";
// import Contact from "@/components/home/Contact";
import Hero from "@/components/home/Hero";
import Project from "@/components/home/Projects";
import Skills from "@/components/home/Skills";

import { SectionTitle } from "@/components/shared/main/SectionTitle";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Home | Portfollio";
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto">
      <Hero />

      <SectionTitle
        preTitle="Portfolio"
        title="Design with React  & Tailwind CSS "
        align="center"
      >
        เว็บไซต์พอร์ตโฟลิโอที่มีความทันสมัยและมีความสวยงามออกแบบมาเพื่อแสดงผลงาน
        ถูกสร้างขึ้นด้วย React 19.0 และตกแต่งด้วย Tailwind CSS 4.0
      </SectionTitle>

      <Benefits imgPos="left" data={benefitOne} />

      <SectionTitle 
      preTitle="Skills"
      title="ทักษะและความเชี่ยวชาญของฉัน">
        ในส่วนนี้จะเป็นการแสดงทักษะหลักที่ช่วยให้ฉันสามารถพัฒนาโครงการต่าง ๆ{" "}
        <br />
        และก้าวไปข้างหน้าในสายอาชีพ
      </SectionTitle>

      <Skills />

      <SectionTitle 
      preTitle="Projects" 
      title="ผลงานที่ได้พัฒนาขึ้นระหว่างเรียน">
         ในส่วนนี้แสดงถึงโปรเจคที่ฉันได้ทำการพัฒนาและมีส่วนร่วมในกระบวนการต่างๆ{" "}
         <br />ที่ใช้ความรู้ ความสามารถและทักษะที่ใช้ในการสร้างสรรค์งานออกมา
      </SectionTitle>

      <Project />


      {/* <Contact /> */}
    </div>
  );
}
