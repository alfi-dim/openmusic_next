'use client';

import HeroElement from '../../components/HeroElement';
import NavBarElement from '../../components/NavBarElement';
import AboutElement from '../../components/AboutElement';
import FeatureElement from '../../components/FeatureElement';
import TechStackElement from '../../components/TechStackElement';
import ContactElement from '../../components/ContactElement';
import FooterElement from '../../components/FooterElement';

export default function Home() {
  return (
    <main>
      <NavBarElement />
      <HeroElement />
      <AboutElement />
      <FeatureElement />
      <TechStackElement />
      <ContactElement />
      <FooterElement />
    </main>
  );
}
