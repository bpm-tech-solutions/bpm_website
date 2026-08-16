import CommandLineHero from '../components/CommandLineHero';
import BrandPortfolio from '../components/BrandPortfolio';
import TechStack from '../components/TechStack';
import FundingSection from '../components/FundingSection';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <main id="app-main-content">
      <CommandLineHero />
      <BrandPortfolio />
      <TechStack />
      <FundingSection />
      <ContactForm />
    </main>
  );
}
