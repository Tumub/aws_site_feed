import React, { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description: string;
  jsonLd?: object | object[];
}

export const SEO: React.FC<SEOProps> = ({ title, description, jsonLd }) => {
  useEffect(() => {
    // Update Title
    if (title) {
      document.title = `${title} | TorqueFoundry Advisory`;
    }

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Update OpenGraph Description
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', description);

    // Handle JSON-LD
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"].dynamic-seo');
    existingScripts.forEach(script => script.remove());

    if (jsonLd) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.className = 'dynamic-seo';
      script.text = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
  }, [title, description, jsonLd]);

  return null;
};
