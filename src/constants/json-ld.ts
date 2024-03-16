export const jsonLdStore = {
  "@context": "https://schema.org",
  "@type": "Store",
  name: "4dearest",
  image: {
    "@type": "ImageObject",
    url: "https://res.cloudinary.com/dcv1op3hs/image/upload/v1710585471/logo_4dearest_-_version_1_-_background_hbbp5i.png",
    width: "1080",
    height: "1080",
  },
  telephone: "17417888",
  url: "https://4dearest.com/",
  address: {
    "@type": "PostalAddress",
    streetAddress: "46 Monterey Street, Monterey NSW 2217, Australia",
    addressLocality: "Monterey NSW 2217",
    postalCode: "93940",
    addressRegion: "Monterey NSW 2217",
    addressCountry: "Australia",
  },
  priceRange: "1 - 150",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  ],
};

export const jsonLdService = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Convenient shopping for various items and services, from gifts, decorations, and accessories to scented candles. Enjoy numerous discounts and free shipping on orders over $50.",
  serviceType: "Ecommerce",
  image: {
    "@type": "ImageObject",
    url: "https://res.cloudinary.com/dcv1op3hs/image/upload/v1710585471/logo_4dearest_-_version_1_-_background_hbbp5i.png",
    width: 1080,
    height: 1080,
  },
};

export const jsonLdWebsite = {
  "@context": "http://schema.org",
  "@type": "WebSite",
  "@id": "https://4dearest.com/#website",
  url: "https://4dearest.com/",
  name: "4dearest",
  description:
    "Convenient shopping for various items and services, from gifts, decorations, and accessories to scented candles. Enjoy numerous discounts and free shipping on orders over $50.",
  potentialAction: [
    {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://4dearest.com/product?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  ],
  inLanguage: "english",
};
