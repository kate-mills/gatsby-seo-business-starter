import React from "react"
import { FaFacebookF, FaInstagram } from "react-icons/fa"

const navigationLinks = [
  {
    page: "Home",
    path: "/",
    id: 1,
  },
  {
    page: "About",
    path: "/about/",
    id: 2,
  },
  {
    page: "Contact",
    path: "/contact/",
    id: 3,
  },
];

const socialLinks = [
  {
    icon: <FaFacebookF />,
    label: "Go to Ally Digital Solutions Facebook Page",
    url: "https://facebook.com/allydigitalsolutions",
  },
  {
    icon: <FaInstagram />,
    label: "Go to Ally Digital Solutions Instagram Page",
    url: "https://instagram.com/allydigitalsolutions",
  },
]

export { navigationLinks, socialLinks}
