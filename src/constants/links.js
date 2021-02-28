import React from "react"
import { GrFacebook, GrInstagram } from 'react-icons/gr'

const navigationLinks = [
  {
    page: "Home",
    path: "/",
    links: [],
  },
  {
    page: "About",
    path: "/about/",
    links: [
      { page: "Nested 1", path: "/nested-1/", },
      { page: "Nested 2", path: "/nested-2/", },
    ],
  },
  {
    page: "Contact",
    path: "/contact/",
    links: [],
  },
];

const socialLinks = [
  {
    icon: <GrFacebook />,
    id: 1,
    label: "Go to our Facebook Page",
    name: 'facebook',
    url: "https://facebook.com/yourfacebookpage",
  },
  {
    icon: <GrInstagram />,
    id: 2,
    label: "Go to our Instagram Page",
    name: 'instagram',
    url: "https://instagram.com/yourinsahandle",
  },
]

export { navigationLinks, socialLinks}
