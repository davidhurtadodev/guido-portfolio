import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ScreenContainer from '@/components/ScreenContainer';
import JourneyContainer from '@/components/JourneyContainer';
import ProjectsContainer from '@/components/ProjectsContainer';

export default function Home() {
  return (
    <main className="">
      <ScreenContainer>
        <Header />
        <Hero />
      </ScreenContainer>
      <JourneyContainer />
      <ProjectsContainer />
    </main>
  );
}
