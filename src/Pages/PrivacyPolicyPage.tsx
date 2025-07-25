// src/pages/PrivacyPolicy.tsx
import React, { useEffect, useRef, useState } from "react";
import { Layout, Menu, theme } from "antd";
import type { MenuProps } from "antd";
import Logo from "../assets/main logo-01.png";
import { Link } from "react-router-dom";
import "../components/PrivacyPolicy/privacyPolicy.css";

const { Header, Content, Sider } = Layout;

// Header menu: keep “Privacy Policy” tab intact
const items1: MenuProps["items"] = [
  { key: "privacy", label: "Privacy Policy" },
];

// Sidebar sections
const sections: { id: string; label: string }[] = [
  { id: "introduction", label: "Introduction" },
  { id: "information-we-collect", label: "Information We Collect" },
  { id: "how-we-use-your-information", label: "How We Use Your Information" },
  { id: "data-sharing-disclosure", label: "Data Sharing & Disclosure" },
  { id: "data-retention", label: "Data Retention" },
  { id: "security", label: "Security" },
  { id: "childrens-privacy", label: "Children’s Privacy" },
  { id: "changes-to-this-policy", label: "Changes to This Policy" },
  { id: "contact-us", label: "Contact Us" },
];

const items2: MenuProps["items"] = sections.map((sec) => ({
  key: sec.id,
  label: sec.label,
}));

const PrivacyPolicy: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [activeKey, setActiveKey] = useState<string>(sections[0].id);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const headingEls = sections
      .map((sec) => document.getElementById(sec.id))
      .filter(Boolean) as HTMLElement[];

    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveKey(entry.target.id);
        });
      },
      { root: null, rootMargin: "-64px 0px -60% 0px", threshold: 0.1 }
    );

    headingEls.forEach((el) => observer.current?.observe(el));
    return () => headingEls.forEach((el) => observer.current?.unobserve(el));
  }, []);

  const handleMenuClick: MenuProps["onClick"] = ({ key }) => {
    const target = document.getElementById(key);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const year = new Date().getFullYear();

  return (
    <Layout style={{ height: "100vh" }}>
      <Header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: colorBgContainer,
          display: "flex",
          alignItems: "center",
          padding: "0 24px",
          flexWrap: "wrap",
          minHeight: 64,
        }}
      >
        <div className="flex items-center">
          <Link
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className="flex items-center"
          >
            <img
              src={Logo}
              alt="Ultimate Truth and Dare Logo"
              className="h-8 sm:h-10 w-auto"
              loading="lazy"
            />
            <h1 className="ml-4 text-xl sm:text-xl font-semibold text-[#4A5BFD]">
              Ultimate Truth and Dare
            </h1>
          </Link>
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={["privacy"]}
            items={items1}
            className="pl-4 font-medium font-montserrat text-sm hidden md:block lg:block"
            overflowedIndicator={null}
          />
        </div>
      </Header>

      <Layout style={{ marginTop: 64 }}>
        <Sider
          width={240}
          breakpoint="lg"
          collapsedWidth={0}
          style={{
            background: colorBgContainer,
            position: "sticky",
            top: 64,
            height: "calc(100vh - 64px)",
            overflowY: "auto",
          }}
          className="hidden lg:block"
        >
          <Menu
            mode="inline"
            selectedKeys={[activeKey]}
            onClick={handleMenuClick}
            style={{ height: "100%", borderRight: 0 }}
            className="sidebar-menu font-montserrat"
            items={items2}
          />
        </Sider>

        <Layout>
          <Content
            style={{
              padding: "24px",
              margin: 0,
              background: colorBgContainer,
              height: "calc(100vh - 64px)",
              overflowY: "auto",
            }}
          >
            <div className="max-w-3xl mx-auto font-montserrat text-gray-800 space-y-12 py-8">
              {/* Introduction */}
              <section id="introduction" className="scroll-mt-8">
                <h1 className="text-3xl font-bold mb-2">
                  Privacy Policy for Ultimate Truth and Dare
                </h1>
                <p className="text-gray-600 mb-6">Last updated: July 2025</p>
                <p className="leading-relaxed mb-6">
                  Ultimate Truth and Dare (“we,” “us,” “our”) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Android app, available on Google Play (“App”). By installing or using the App, you agree to this policy.
                </p>
              </section>

              {/* Information We Collect */}
              <section id="information-we-collect" className="scroll-mt-8">
                <h2 className="text-2xl font-bold mb-2">Information We Collect</h2>
                <ul className="list-disc pl-5 leading-relaxed mb-6">
                  <li>
                    <strong>Custom Questions & Categories:</strong> Stored locally on your device using JSON/SharedPreferences. Never transmitted, shared, or backed up to any cloud or third-party server.
                  </li>
                  <li>
                    <strong>Game Settings & Preferences:</strong> Table style, bottle style, player names, sound settings. Saved only on the device to restore your last setup.
                  </li>
                  <li>
                    <strong>Device & Usage Data (Optional):</strong> To diagnose crashes or improve performance, we may collect anonymous crash logs via Google Play services. No personally identifiable information is included.
                  </li>
                </ul>
              </section>

              {/* How We Use Your Information */}
              <section id="how-we-use-your-information" className="scroll-mt-8">
                <h2 className="text-2xl font-bold mb-2">How We Use Your Information</h2>
                <ul className="list-disc pl-5 leading-relaxed mb-6">
                  <li>To enable offline-first gameplay with your custom questions.</li>
                  <li>To load and display your saved categories, truths, dares, and UI preferences.</li>
                  <li>To play sounds or animations based on your chosen settings.</li>
                  <li>To anonymously help us fix bugs and improve the App (if you opt into crash reporting).</li>
                </ul>
              </section>

              {/* Data Sharing & Disclosure */}
              <section id="data-sharing-disclosure" className="scroll-mt-8">
                <h2 className="text-2xl font-bold mb-2">Data Sharing & Disclosure</h2>
                <p className="leading-relaxed mb-6">
                  We do not sell, rent, or share your custom questions or preferences with any third party. We do not transfer your personal data outside your device. Crash reports collected by Google Play are aggregated and anonymized.
                </p>
              </section>

              {/* Data Retention */}
              <section id="data-retention" className="scroll-mt-8">
                <h2 className="text-2xl font-bold mb-2">Data Retention</h2>
                <p className="leading-relaxed mb-6">
                  All custom data and preferences remain on your device until you uninstall the App or clear its data. You may delete any category or question at any time within the App.
                </p>
              </section>

              {/* Security */}
              <section id="security" className="scroll-mt-8">
                <h2 className="text-2xl font-bold mb-2">Security</h2>
                <p className="leading-relaxed mb-6">
                  Your local data is stored in the App’s private directory and is not accessible by other apps. We employ standard Android best practices to protect your data at rest.
                </p>
              </section>

              {/* Children’s Privacy */}
              <section id="childrens-privacy" className="scroll-mt-8">
                <h2 className="text-2xl font-bold mb-2">Children’s Privacy</h2>
                <p className="leading-relaxed mb-6">
                  Our App is not directed to children under 13. We do not knowingly collect any personal information from children.
                </p>
              </section>

              {/* Changes to This Policy */}
              <section id="changes-to-this-policy" className="scroll-mt-8">
                <h2 className="text-2xl font-bold mb-2">Changes to This Policy</h2>
                <p className="leading-relaxed mb-6">
                  We may update this policy to reflect changes in our practices or legal requirements. The “Last updated” date above will change whenever we post a new version. Continued use after updates signifies acceptance.
                </p>
              </section>

              {/* Contact Us */}
              <section id="contact-us" className="scroll-mt-8">
                <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
                <ul className="list-disc pl-5 leading-relaxed">
                  <li>connect2rcubedigitalstudio@gmail.com</li>
                </ul>
              </section>

              {/* Bottom copyright */}
              <div className="mt-16 border-t border-gray-300 pt-6">
                <p className="text-center text-gray-600 text-sm font-medium">
                  © {year} R Cube Digital Studios. All rights reserved.
                </p>
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default PrivacyPolicy;
