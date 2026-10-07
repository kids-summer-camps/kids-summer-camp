export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Kid Explorer Camps",
    "alternateName": "KEC",
    "url": "https://kids-summer-camps.netlify.app",
    "logo": "https://kids-summer-camps.netlify.app/icon-512.png",
    "description": "Where the Future Starts in the Summer. STEM innovation, creative arts, sports, and outdoor exploration for kids ages 3-14.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chicago",
      "addressRegion": "IL",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://facebook.com/kidexplorercamps",
      "https://twitter.com/kidexplorercamps",
      "https://instagram.com/kidexplorercamps",
      "https://linkedin.com/company/kidexplorercamps"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "areaServed": "US",
      "availableLanguage": "en"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Summer Camp",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Kid Explorer Camps"
    },
    "areaServed": {
      "@type": "City",
      "name": "Chicago"
    },
    "audience": {
      "@type": "PeopleAudience",
      "suggestedMinAge": 3,
      "suggestedMaxAge": 14
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "USD"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://kids-summer-camps.netlify.app"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}
