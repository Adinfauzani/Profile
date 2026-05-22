import { CTASection } from '@/components/sections/CTASection';
import { FeaturedBlogs } from '@/components/sections/FeaturedBlogs';
import { FeaturedProjectsSection } from '@/components/sections/FeaturedProjectsSection';
import { FloatingStacks } from '@/components/sections/FloatingStacks';
import { HeroSection } from '@/components/sections/HeroSection';
import { InteractiveBlogs } from '@/components/sections/InteractiveBlogs';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProjectsSection />
      <InteractiveBlogs />
      <FeaturedBlogs />
      <FloatingStacks />
      <CTASection />
    </>
  );
}
