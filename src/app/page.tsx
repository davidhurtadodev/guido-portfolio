import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ScreenContainer from '@/components/ScreenContainer';
import JourneyContainer from '@/components/JourneyContainer';
import ProjectsContainer from '@/components/ProjectsContainer';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main id="main" className="bg-primary relative">
      <ScreenContainer>
        <Header className="bg-transparent static" />
        <Hero />
      </ScreenContainer>
      <div className="w-full relative">
        <Header className="bg-transparent sticky bg-[#21201C] shadow-[0px_3px_4px_0px_rgba(0,0,0,0.25)]  top-0" />
        <JourneyContainer />
        <ProjectsContainer />
        <Footer />
      </div>
    </main>
  );
}
