import React from "react";
import NavigationLinks from "./navigationLinks";

const Navlinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/courts", label: "Sport Courts" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  return <NavigationLinks links={Navlinks} />;
}
