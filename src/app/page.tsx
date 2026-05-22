import { BlogList } from '@/components/sections/BlogList';
import { FeaturedPostsSection } from '@/components/sections/FeaturedPostsSection';
import { FeaturedProjectsSection } from '@/components/sections/FeaturedProjectsSection';
import { HeroSection } from '@/components/sections/HeroSection';
import { NewsletterSection } from '@/components/sections/NewsletterSection';
import { RetrospectiveSection } from '@/components/sections/RetrospectiveSection';
import { TechStack } from '@/components/sections/TechStack';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedPostsSection />
      <RetrospectiveSection />
      <FeaturedProjectsSection />
      <TestimonialsSection />
      <TechStack />
      <BlogList />
      <NewsletterSection />
    </>
  );
}
