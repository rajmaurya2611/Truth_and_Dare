// src/components/Footer.tsx
import { Link } from "react-router-dom";
import {
  LinkedinFilled,
  InstagramOutlined,
  LinkOutlined,
  MailOutlined,
} from "@ant-design/icons";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#435268] text-white">
      <div className="max-w-screen-xl mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-semibold mb-2">Engineers At AKTU</h2>
          <p className="text-gray-300 text-sm">
            Connecting the brightest minds across campus.
          </p>
        </div>

        {/* Important Links */}
        <div className="flex flex-col items-center">
          <h4 className="text-lg font-semibold mb-4">Important Links</h4>
          <ul role="list" className="space-y-2 text-sm">
            <li className="flex items-center">
              <LinkOutlined className="mr-2 text-base" />
              <Link
                to="/privacypolicy"
                className="hover:text-gray-200 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div className="flex flex-col items-center md:items-end space-y-4">
          <div className="flex space-x-4 text-2xl">
            <a
              href="https://www.linkedin.com/in/engineers-at-aktu-aa861a2b9"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-400 transition-transform transform hover:scale-110"
            >
              <LinkedinFilled />
            </a>
            <a
              href="https://www.instagram.com/engineers_at_aktu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-pink-400 transition-transform transform hover:scale-110"
            >
              <InstagramOutlined />
            </a>
          </div>
          <a
            href="mailto:engineersataktu@gmail.com"
            className="flex items-center space-x-2 hover:text-blue-400 transition-colors duration-200 text-sm"
          >
            <MailOutlined />
            <span>engineersataktu@gmail.com</span>
          </a>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-500 text-center text-gray-400 text-sm py-4">
        © {year} Engineers At AKTU. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
