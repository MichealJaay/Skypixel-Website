import React, { useEffect, useState } from 'react';
import Ticker from './components/Ticker';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhySection from './components/WhySection';
import Portfolio from './components/Portfolio';
import VideoLightboxModal from './components/VideoLightboxModal';
import Capabilities from './components/Capabilities';
import Compliance from './components/Compliance';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {
  SITE,
  tickerItems,
  navLinks,
  teamMembers,
  services,
  whyFeatures,
  comparisonRows,
  portfolioItems,
  capabilities,
  waypoints,
  complianceCards,
  contactDetails,
  footerSocials,
} from './assets/siteData';

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);

  useEffect(() => {
    document.body.classList.toggle('nav-open', mobileOpen);
    return () => document.body.classList.remove('nav-open');
  }, [mobileOpen]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
          }
        });
      },
      { threshold: 0.12 },
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
        setActiveVideo(null);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <>
      <Ticker items={tickerItems} />
      <Navbar
        logo={SITE.logo}
        links={navLinks}
        open={mobileOpen}
        onToggle={() => setMobileOpen((value) => !value)}
        onClose={() => setMobileOpen(false)}
        cta={{ href: SITE.downloadProfile, label: 'Download Profile' }}
      />
      <main>
        <Hero video={SITE.heroVideo} poster={SITE.heroPoster} />
        <About
          members={teamMembers}
          downloadProfile={SITE.downloadProfile}
        />
        <Services items={services} />
        <WhySection features={whyFeatures} comparisonRows={comparisonRows} />
        <Portfolio items={portfolioItems} onOpenVideo={setActiveVideo} />
        <VideoLightboxModal open={Boolean(activeVideo)} src={activeVideo} onClose={() => setActiveVideo(null)} />
        <Capabilities items={capabilities} waypoints={waypoints} />
        <Compliance cards={complianceCards} />
        <Contact details={contactDetails} />
      </main>
      <Footer logo={SITE.logo} socials={footerSocials} />
    </>
  );
}
