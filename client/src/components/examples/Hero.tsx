import Hero from '../Hero';

export default function HeroExample() {
  return <Hero onViewProducts={() => console.log('View products clicked')} />;
}
