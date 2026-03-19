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
    section: "Formations",
    links: [
      { name: "Licence Sciences Infirmières", url: "/formations" },
      { name: "Licence Sciences Obstétricales", url: "/formations" },
      { name: "Assistant(e) Infirmier(ère)", url: "/formations" },
    ],
  },
  {
    section: "L'école",
    links: [
      { name: "Accueil", url: "/" },
      { name: "Galerie", url: "/galerie" },
      { name: "Contact", url: "/contact" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};