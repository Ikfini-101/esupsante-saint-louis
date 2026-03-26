// Navigation configuration for ESUP SANTÉ - v1.0.1
// An array of links for navigation bar
const navBarLinks = [
  { name: "Accueil", url: "/" },
  { name: "Formations", url: "/formations" },
  { name: "Galerie", url: "/galerie" },
  { name: "Contact", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Enseignement",
    links: [
      { name: "Nos Formations", url: "/formations" },
      { name: "Admissions", url: "/contact" },
      { name: "Galerie", url: "/galerie" },
    ],
  },
  {
    section: "L'École",
    links: [
      { name: "À Propos", url: "#" },
      { name: "Contact", url: "/contact" },
      { name: "Facebook", url: "https://www.facebook.com/ESUPSANTE/" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/ESUPSANTE/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};