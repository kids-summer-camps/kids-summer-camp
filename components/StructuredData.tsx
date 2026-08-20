export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Kid Explorer Clubs",
    "alternateName": "KEC",
    "url": "https://kidexplorerclubs.com",
    "logo": "https://kidexplorerclubs.com/icon-512.png",
    "description": "Where the Future Starts. A year-round launch system for young minds. After-school, summer camps, and seasonal programs across Chicago.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chicago",
      "addressRegion": "IL",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://facebook.com/kidexplorerclubs",
      "https://twitter.com/kidexplorerclubs",
      "https://instagram.com/kidexplorerclubs",
      "https://linkedin.com/company/kidexplorerclubs"
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
      "name": "Kid Explorer Clubs"
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
        "item": "https://kidexplorerclubs.com"
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
