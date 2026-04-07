import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { useLanguage } from "@/lib/i18n";
import { CaseStudyTemplate } from "@/components/layout/CaseStudyTemplate";

const CaseStudyPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();

  if (!slug || !t.case_study_pages[slug]) {
    return <Navigate to="/404" replace />;
  }

  const content = t.case_study_pages[slug];

  // Logic for related cases (simplistic: others in the same pillar or just others)
  const allCases = Object.entries(t.case_study_pages).map(([k, v]) => ({
    title: v.title,
    slug: k,
    pillar: v.pillar
  }));
  
  const relatedCases = allCases
    .filter(c => c.slug !== slug)
    .slice(0, 3);

  return (
    <CaseStudyTemplate
      title={content.title}
      subtitle={content.subtitle}
      pillar={content.pillar}
      challenge={content.challenge}
      action={content.action}
      outcomes={content.outcomes}
      impactMetrics={content.impactMetrics}
      relatedCases={relatedCases}
    />
  );
};

export default CaseStudyPage;
