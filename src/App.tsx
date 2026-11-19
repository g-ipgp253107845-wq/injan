import { useState } from 'react';
import { ConceptsSection } from './components/ConceptsSection';
import { GoldenRulesPoster } from './components/GoldenRulesPoster';
import { HeroSection } from './components/HeroSection';
import { InteractiveQuiz } from './components/InteractiveQuiz';
import { Navbar } from './components/Navbar';
import { ReferencesAndFooter } from './components/ReferencesAndFooter';
import { SixGuidesSection } from './components/SixGuidesSection';
import { ThreatsSection } from './components/ThreatsSection';

export default function App() {
  const [highlightedConcept, setHighlightedConcept] = useState<'netiket' | 'keselamatan' | null>(
    null,
  );

  const handleSelectConcept = (conceptId: 'netiket' | 'keselamatan') => {
    setHighlightedConcept(conceptId);
    const target = document.getElementById(`konsep-${conceptId}`) ?? document.getElementById('pengenalan');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F8FF] text-[#0B1D48]">
      <Navbar />
      <main>
        <HeroSection onSelectConcept={handleSelectConcept} />
        <ConceptsSection
          highlightedConcept={highlightedConcept}
          onHighlightConcept={setHighlightedConcept}
        />
        <SixGuidesSection />
        <ThreatsSection />
        <GoldenRulesPoster />
        <InteractiveQuiz />
      </main>
      <ReferencesAndFooter />
    </div>
  );
}
