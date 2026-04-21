import { getHeroSlides } from "@/sanity/lib/fetch";
import { urlFor } from "@/sanity/lib/image";
import { mockHeroSlides } from "@/lib/mock-data";
import { HeroCarouselClient, type HeroSlideProps } from "./HeroCarouselClient";

export async function HeroCarousel() {
  const sanitySlides = await getHeroSlides();

  const slides: HeroSlideProps[] =
    sanitySlides.length > 0
      ? sanitySlides.map((slide) => ({
          title: slide.title,
          subtitle: slide.subtitle,
          imageUrl: urlFor(slide.image).width(1920).height(900).url(),
          ctaText: slide.ctaText,
          ctaLink: slide.ctaLink,
        }))
      : mockHeroSlides.map((slide) => ({
          title: slide.title,
          subtitle: slide.subtitle,
          imageUrl: slide.image as string,
          ctaText: slide.ctaText,
          ctaLink: slide.ctaLink,
        }));

  return <HeroCarouselClient slides={slides} />;
}
