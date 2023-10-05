import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ScreenContainer from '@/components/ScreenContainer';
import JourneyContainer from '@/components/JourneyContainer';

export default function Home() {
  return (
    <main>
      <ScreenContainer>
        <Header />
        <Hero />
      </ScreenContainer>
      <JourneyContainer />
    </main>
  );
}
