'use client';

import HeroElement from '../../components/HeroElement';
import NavBarElement from '../../components/NavBarElement';
import AboutElement from '../../components/AboutElement';
import FeaturesElement from '../../components/FeaturesElement';
import TechStackElement from '../../components/TechStackElement';
import ContactElement from '../../components/ContactElement';
import FooterElement from '../../components/FooterElement';

export default function Home() {
  return (
    <main>
      <NavBarElement />
      <HeroElement />
      <AboutElement />
      <FeaturesElement />
      <TechStackElement />
      <ContactElement />
      <FooterElement />
    </main>
  );
}
