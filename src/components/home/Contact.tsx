import { Container } from "@/components/shared/main/Container";
import { MdEmail } from "react-icons/md"; 

export default function Contact() {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-screen-xl gap-5 mx-auto text-white bg-indigo-600 px-7 py-7 mb-10 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
          Get in Touch
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            หากมีคำถามหรือต้องการติดต่อ สามารถติดต่อได้ที่
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <a
            href="mailto:chanin.bu@kkumail.com"  
            className="inline-flex items-center py-3 mx-auto text-lg font-medium text-indigo-600 bg-white rounded-full px-7 lg:px-10 lg:py-5 border-2 border-indigo-600 hover:bg-indigo-50 hover:text-indigo-700"
          >
            <MdEmail className="w-5 h-5 text-indigo-600 mr-3" />  
            <span>chanin.bu@kkumail.com</span>
          </a>
        </div>
      </div>
    </Container>
  );
}
