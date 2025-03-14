import { Container } from "@/components/shared/main/Container"
import { SectionTitle } from "@/components/shared/main/SectionTitle"
import { useEffect } from "react"
import { FaNetworkWired, FaShieldAlt, FaCloud, FaInternetExplorer, FaGithub, FaLinkedin, FaMailBulk,  FaMedium, FaFileAlt } from 'react-icons/fa';

export default function Profile() {

  useEffect(() => {
    document.title = "Profile | WindReact"
  }, [])

  return (
    <Container>
      {/* Profile Section */}
      <div className="py-10 bg-gray-100 dark:bg-gray-900">
  <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto px-6">
    {/* Left Side - About Me Text */}
    <div className="lg:w-1/2 bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 lg:p-12 text-center lg:text-left">
      {/* Header */}
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
        สวัสดีครับ 👋
      </h2>

      {/* Description */}
      <p
  className="text-base lg:text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
  style={{ textIndent: '2em' }}
>
  ผมชื่อ <span className="font-semibold text-indigo-500 dark:text-indigo-400">ชนินทร์ บุตรรอด</span> 
  เป็นคนที่ชอบเรียนรู้สิ่งใหม่ ๆ และมีความกระตือรือร้นในการทำงาน
  มีความสนใจในด้าน <span className="font-semibold  text-indigo-500 dark:text-indigo-400">ระบบเครือข่าย</span>, 
  <span className="font-semibold text-indigo-500 dark:text-indigo-400">คลาวด์คอมพิวติ้ง</span> และ   
  <span className="font-semibold  text-indigo-500 dark:text-indigo-400"> ความมั่นคงปลอดภัยทางไซเบอร์</span>
  <br />
  <span style={{ textIndent: '2em', display: 'inline-block' }}>
    หวังว่าจะได้แลกเปลี่ยนความรู้และประสบการณ์ดี ๆ กับทุกคน ยินดีที่ได้รู้จักครับ!
  </span>
</p>


      {/* Call to Action */}
      <div className="mt-8 flex justify-center lg:justify-start">
      <a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center py-3 px-6 text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow-md transform hover:scale-105 transition duration-300"
>
  <FaFileAlt className="text-xl mr-3 text-gray-200" />
  ดูเรซูเม่
</a>
      </div>
    </div>

    {/* Right Side - Profile Image */}
    <div className="lg:w-1/2 flex justify-center">
      <div className="relative rounded-full overflow-hidden w-[200px] h-[200px] lg:w-[280px] lg:h-[280px] shadow-xl transform transition-all hover:scale-110 duration-300">
        <img
          src="/images/me1.jpg"
          alt="Profile Image"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  </div>
</div>


<div className="py-10 bg-gray-100 dark:bg-gray-900 pt-0">
  <SectionTitle title="About Me" />
  <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto px-6">
    {/* Left Side - About Me Text */}
    <div className="lg:w-1/2 bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 lg:p-12 text-center lg:text-left">
      {/* Introduction */}
      <p className="text-base lg:text-lg text-gray-600 dark:text-gray-400 leading-relaxed" style={{ textIndent: '2em' }}>
        <span className="font-semibold text-indigo-600 dark:text-indigo-400">ปัจจุบัน</span> 
        กำลังศึกษาอยู่ชั้นปีที่ 3 สาขา <span className="font-semibold">เทคโนโลยีสารสนเทศ</span> แทร็ก 
        <span className="font-semibold">ระบบเครือข่าย</span>, 
        <span className="font-semibold">ความมั่นคงเทคโนโลยีสารสนเทศ</span>, และ 
        <span className="font-semibold">อินเทอร์เน็ตของสรรพสิ่ง</span> <br/>
        วิทยาลัยการคอมพิวเตอร์ มหาวิทยาลัยขอนแก่น.
      </p>

      {/* Skills and Interests */}
      <p className="mt-4 text-base lg:text-lg text-gray-600 dark:text-gray-400 leading-relaxed" style={{ textIndent: '2em' }}>
        ผมมีความถนัดเกี่ยวกับ <span className="font-semibold text-indigo-600 dark:text-indigo-400">ระบบเครือข่าย</span>, 
        <span className="font-semibold text-indigo-600 dark:text-indigo-400">คลาวด์คอมพิวติ้ง</span>, และ 
        <span className="font-semibold text-indigo-600 dark:text-indigo-400">ความมั่นคงปลอดภัยทางไซเบอร์</span>. 
        ชื่นชอบศึกษาเทคโนโลยีใหม่ ๆ ที่ท้าทายความสามารถ รวมถึงการพัฒนาตนเองอยู่เสมอ.
      </p>

      {/* Future Goals */}
      <p className="mt-4 text-base lg:text-lg text-gray-600 dark:text-gray-400 leading-relaxed" style={{ textIndent: '2em' }}>
        นอกจากนี้ ผมยังสนใจศึกษาเทคโนโลยีใหม่ ๆ เช่น 
        <span className="font-semibold text-indigo-600 dark:text-indigo-400">AI</span> และ 
        <span className="font-semibold text-indigo-600 dark:text-indigo-400">Machine Learning</span> 
        เพื่อเพิ่มความสามารถในการวิเคราะห์ข้อมูลและแก้ปัญหาที่ซับซ้อนในอนาคต.
      </p>
    </div>





    {/* Right Side - Services (Network, Cybersecurity, etc.) */}
    <div className="lg:w-1/2 grid grid-cols-2 gap-6">
      <div className="bg-blue-500 dark:bg-blue-700 text-white rounded-xl p-6 flex flex-col items-center shadow-lg hover:scale-105 transition-transform duration-300">
        <FaNetworkWired className="text-4xl mb-4" />
        <h3 className="text-medium font-semibold">ระบบเครือข่าย</h3>
      </div>
      <div className="bg-red-500 dark:bg-red-700 text-white rounded-xl p-6 flex flex-col items-center shadow-lg hover:scale-105 transition-transform duration-300">
        <FaShieldAlt className="text-4xl mb-4" />
        <h3 className="text-medium font-semibold">ความมั่นคงปลอดภัยทางไซเบอร์</h3>
      </div>
      <div className="bg-yellow-500 dark:bg-yellow-700 text-white rounded-xl p-6 flex flex-col items-center shadow-lg hover:scale-105 transition-transform duration-300">
        <FaCloud className="text-4xl mb-4" />
        <h3 className="text-medium font-semibold">คลาวด์คอมพิวติ้ง</h3>
      </div>
      <div className="bg-purple-500 dark:bg-purple-700 text-white rounded-xl p-6 flex flex-col items-center shadow-lg hover:scale-105 transition-transform duration-300">
        <FaInternetExplorer className="text-4xl mb-4" />
        <h3 className="text-medium font-semibold">อินเทอร์เน็ตของสรรพสิ่ง</h3>
      </div>
    </div>
  </div>
</div>





{/* Personal Details Section */}
<div className="py-8 bg-gray-100 dark:bg-gray-900 pt-0">
  <SectionTitle title="Personal Details" />
  <div className="flex flex-col items-center justify-center">
    <div className="w-full lg:w-2/3 bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8">
      <ul className="space-y-4 text-lg text-gray-600 dark:text-gray-400">
        <li className="flex items-center">
          <span className="font-bold text-gray-800 dark:text-gray-200 w-40">ชื่อจริง:</span>
          <span>นาย ชนินทร์ บุตรรอด</span>
        </li>
        <li className="flex items-center">
          <span className="font-bold text-gray-800 dark:text-gray-200 w-40">ชื่อเล่น:</span>
          <span>ก๋วยเจ๋ง</span>
        </li>
        <li className="flex items-center">
          <span className="font-bold text-gray-800 dark:text-gray-200 w-40">อายุ</span>
          <span>22</span>
        </li>
        <li className="flex items-center">
          <span className="font-bold text-gray-800 dark:text-gray-200 w-40">ชั้นปีที่:</span>
          <span>3</span>
        </li>
        <li className="flex items-center">
          <span className="font-bold text-gray-800 dark:text-gray-200 w-40">สาขา:</span>
          <span>เทคโนโลยีสารสนเทศ</span>
        </li>
        <li className="flex items-center">
          <span className="font-bold text-gray-800 dark:text-gray-200 w-40">วิทยาลัย:</span>
          <span>วิทยาลัยการคอมพิวเตอร์</span>
        </li>
        <li className="flex items-center">
          <span className="font-bold text-gray-800 dark:text-gray-200 w-40">มหาวิทยาลัย:</span>
          <span>ขอนแก่น</span>
        </li>
        <li className="flex items-center">
          <span className="font-bold text-gray-800 dark:text-gray-200 w-40">ที่อยู่:</span>
          <span>27/5 ม.11 ต.หมากแข้ง อ.เมืองอุดรธานี จังหวัดอุดรธานี</span>
        </li>
        <li className="flex items-center">
          <span className="font-bold text-gray-800 dark:text-gray-200 w-40">รหัสไปรษณีย์:</span>
          <span>41000</span>
        </li>
        <li className="flex items-center">
          <span className="font-bold text-gray-800 dark:text-gray-200 w-40">เบอร์โทรศัพท์:</span>
          <a href="tel:0828538980" className="text-indigo-600 hover:underline">0828538980</a>
        </li>
        <li className="flex items-center">
          <span className="font-bold text-gray-800 dark:text-gray-200 w-40">อีเมลล์:</span>
          <a href="mailto:chanin.bu@kkumail.com" className="text-indigo-600 hover:underline">chanin.bu@kkumail.com</a>
        </li>
      </ul>
    </div>
  </div>
</div>



{/* Education Section */}
<div className="py-8 bg-gray-100 dark:bg-gray-900 pt-0">
  <SectionTitle title="Education" />
  <div className="space-y-6 max-w-3xl mx-auto">
    {/* Education List */}
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg">
      <div className="p-6 flex items-center gap-4">
        <i className="fas fa-graduation-cap text-2xl text-indigo-600 dark:text-indigo-400"></i>
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">ปริญญาตรี</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            มหาวิทยาลัยขอนแก่น 2022 - ปัจจุบัน
          </p>
        </div>
      </div>
    </div>

    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg">
      <div className="p-6 flex items-center gap-4">
        <i className="fas fa-school text-2xl text-green-600 dark:text-green-400"></i>
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">มัธยมปลาย</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            โรงเรียนอุดรพิทยานุกูล 2019 - 2021
          </p>
        </div>
      </div>
    </div>

    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg">
      <div className="p-6 flex items-center gap-4">
        <i className="fas fa-pencil-alt text-2xl text-yellow-600 dark:text-yellow-400"></i>
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">มัธยมต้น</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            โรงเรียนอุดรพิทยานุกูล 2015 - 2018
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

{/* Contact Section */}
<div className="py-8 bg-gray-100 dark:bg-gray-900 pt-0">
  <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-8 text-center">
    Contacts
  </h2>
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
    {/* GitHub Card */}
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-300">
      <a href="https://github.com/XkJeCH" target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-5xl text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400" />
        <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">GitHub</p>
      </a>
    </div>

    {/* Email Card */}
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-300">
      <a href="mailto:chanin.bu@kkumail.com" target="_blank" rel="noopener noreferrer">
        <FaMailBulk className="text-5xl text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400" />
        <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">Email</p>
      </a>
    </div>

    {/* LinkedIn Card */}
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-300">
      <a href="https://www.linkedin.com/in/yourlinkedinprofile" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-5xl text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400" />
        <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">LinkedIn</p>
      </a>
    </div>

    {/* Medium Card */}
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-300">
      <a href="https://medium.com/@yourmediumprofile" target="_blank" rel="noopener noreferrer">
        <FaMedium className="text-5xl text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400" />
        <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">Medium</p>
      </a>
    </div>

    {/* <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 w-64">
      <a href="https://twitter.com/xckjcb88" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="text-4xl text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 mx-auto" />
        <p className="text-gray-600 dark:text-gray-400 text-center mt-2">Line</p>
      </a>
    </div> */}
  </div>
</div>


    </Container>
  )
}
