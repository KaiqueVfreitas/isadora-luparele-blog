
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import SocialLinks from '@/components/SocialLinks';
import InfoProducts from '@/components/InfoProducts';
import BlogSection from '@/components/BlogSection';
import StartHereSection from '@/components/StartHereSection';
import Footer from '@/components/Footer';
import NavigationArrows from '@/components/NavigationArrows';
import AdminPanel from '@/components/AdminPanel';

const Index = () => {
  return (
    <div className="min-h-screen bg-soft-green smooth-scroll">
      <AdminPanel />
      <Header />
      <main className="relative">
        <HeroSection />
        <div data-section="social">
          <SocialLinks />
        </div>
        <InfoProducts />
        <BlogSection />
        <StartHereSection />
      </main>
      <Footer />
      <NavigationArrows />
    </div>
  );
};

export default Index;
