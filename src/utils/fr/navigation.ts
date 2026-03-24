
const navBarLinks = [
  { name: "Accueil", url: "/fr" },
  { name: "Formations", url: "/fr/formations" },
  { name: "Galerie", url: "/fr/galerie" },
  { name: "Contact", url: "/fr/contact" },
];

const footerLinks = [
  {
    section: "Éducation",
    links: [
      { name: "Nos Formations", url: "/fr/formations" },
      { name: "Admissions", url: "/fr/contact" },
      { name: "Galerie", url: "/fr/galerie" },
    ],
  },
  {
    section: "L'École",
    links: [
      { name: "À propos", url: "#" },
      { name: "Contact", url: "/fr/contact" },
      { name: "Facebook", url: "https://www.facebook.com/ESUPSANTE/" },
    ],
  },
];

const socialLinks = {
  facebook: "https://www.facebook.com/ESUPSANTE/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};