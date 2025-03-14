import { Link } from "react-router";
import { Container } from "@/components/shared/main/Container";
import { FaTwitter, FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';

export default function Footer() {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Profile", href: "/profile" },
  ];
  const legal = [
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
  ];

  return (
    <div className="relative bg-gray-200 dark:bg-gray-800">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div>
              <Link to="/" className="flex items-center space-x-2 text-2xl font-medium text-gray-800 dark:text-gray-200">
                <img
                  src="/images/lofinal.png"
                  alt=""
                  className="w-8"
                />
                <span>Chanin Portfolio</span>
              </Link>
            </div>

            <div className="max-w-md mt-4 text-gray-600 dark:text-gray-400">
              React and Tailwind CSS enable the creation of a high-performance, responsive portfolio website that's easy to customize. React handles state management and component development, while Tailwind ensures a clean, responsive design across devices.
            </div>
          </div>

          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {navigation.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  className="w-full px-4 py-2 text-gray-600 dark:text-gray-400 rounded-md hover:text-indigo-500 dark:hover:text-indigo-400 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {legal.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  className="w-full px-4 py-2 text-gray-600 dark:text-gray-400 rounded-md hover:text-indigo-500 dark:hover:text-indigo-400 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="">
            <div>Follow us</div>
            <div className="flex mt-5 space-x-5 text-gray-500 dark:text-gray-400">
              <a
                href="https://twitter.com/xckjcb88"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Twitter</span>
                <FaTwitter size={24} />
              </a>
              <a
                href="https://facebook.com/jeng.kub.2024"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Facebook</span>
                <FaFacebookF size={24} />
              </a>
              <a
                href="https://instagram.com/xkjcb"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Instagram</span>
                <FaInstagram size={24} />
              </a>
              <a
                href="https://tiktok.com/@yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">TikTok</span>
                <FaTiktok size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
          Copyright &copy; {new Date().getFullYear()}. Made with by{" "}
          <a
            href="https://github.com/XkJeCH"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
             XkJeCH.♥
          </a>
        </div>
      </Container>
    </div>
  );
}
