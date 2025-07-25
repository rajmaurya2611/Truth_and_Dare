// src/components/Footer.tsx
import { Link } from "react-router-dom";
import { LinkOutlined } from "@ant-design/icons";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#435268] text-white">
      <div className="max-w-screen-xl mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Brand */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-semibold mb-2">Ultimate Truth and Dare</h2>
          <p className="text-gray-300 text-sm">
            Infinite Questions · Endless Laughter
          </p>
        </div>

        {/* Social & Contact */}
        <div className="flex flex-col items-center md:items-end ">
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
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-500 text-center text-gray-400 text-sm py-4">
        © {year} Ultimate Truth and Dare. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
