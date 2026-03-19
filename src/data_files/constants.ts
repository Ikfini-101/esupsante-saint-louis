import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "ESUP SANTÉ",
  tagline: "École Supérieure de Formation Professionnelle en Santé",
  description: "ESUP SANTÉ forme les professionnels de santé de demain. Licences en Sciences Infirmières et Obstétricales, Assistants Infirmiers Diplômés d'État — à Saint-Louis, Sénégal.",
  description_short: "École de formation professionnelle en santé à Saint-Louis, Sénégal.",
  url: "https://esupsante-saint-louis.pages.dev",
  author: "ESUP SANTÉ",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "fr-FR",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "fr_FR",
  type: "website",
  url: SITE.url,
  title: `${SITE.title} — Formation en Santé à Saint-Louis`,
  description: "Devenez un professionnel de la santé avec ESUP SANTÉ. Formations en sciences infirmières, obstétrique et santé publique à Saint-Louis, Sénégal. Inscriptions ouvertes.",
  image: ogImageSrc,
};

export const partnersData: any[] = [];