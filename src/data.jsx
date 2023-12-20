import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWallet,
  FaBox,
  FaTree,
} from "react-icons/fa";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#contact us", text: "contact us" },
];
export const socialLinks = [
  {
    id: 1,
    url: "https://www.facebook.com",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: "https://www.instagram.com",
    icon: <FaInstagram />,
  },
  {
    id: 4,
    url: "https://www.linkedin.com",
    icon: <FaLinkedin />,
  },
];

export const services = [
  {
    id: 1,
    icon: <FaWallet />,
    title: "saving money",
    text: "we specialize in providing a comprehensive range of high-quality raw materials at a very competative pricing",
  },
  {
    id: 2,
    icon: <FaTree />,
    title: "Eco-Friendly",
    text: "Our commitment to sustainability extends to offering eco-friendly packaging materials that reduce environmental impact.",
  },
  {
    id: 3,
    icon: <FaBox />,
    title: "Custom Packaging Solutions",
    text: "Tailored packaging designs and solutions to suit your specific product requirements, making your brand stand out.",
  },
];
export const quickLinks = [
  {
    id: 1,
    url: "#about",
    text: "About us",
  },
  {
    id: 2,
    url: "#products",
    text: "Products",
  },
  {
    id: 3,
    url: "#pay",
    text: "Pay",
  },
  {
    id: 4,
    url: "#contact us",
    text: "Contact us",
  },
];

export const footerContact = [
  {
    id: 1,
    text: "+91-7044303625",
    icon: <FaPhone />,
  },
  {
    id: 2,
    text: <a href="mailto:sales.packmat@gmail.com">sales.packmat@gmail.com</a>,
    icon: <FaEnvelope />,
  },
  {
    id: 3,
    text: "I2-296/A, New Bidya Sagar Park Road, Molar gate, kolkata, West Bengal - 700142",
    icon: <FaMapMarkerAlt />,
  },
];

export const heroImg = [
  "/src/assets/Boxes.jpeg",
  "/src/assets/plasticSheet.jpg",
];
