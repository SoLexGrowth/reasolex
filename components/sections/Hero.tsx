import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/shared/Section";
import Link from "next/link";

type HeroProps = {
  name: string;
  tagline: string;
  location: string;
  introduction: string;
};

export function Hero({ name, tagline, location, introduction }: HeroProps) {
  return (
    <Section id="home" className="pt-24 md:pt-32">
      <div className="max-w-3xl text-center mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm text-muted-foreground mb-4">
          <MapPin className="h-4 w-4" />
          {location}
        </div>
        <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter mb-4">
          {name}
        </h1>
        <p className="font-headline text-xl md:text-2xl text-primary mb-8">
          {tagline}
        </p>
        <p className="max-w-2xl mx-auto text-lg text-foreground/80 mb-10">
          {introduction}
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="#contact">Get in Touch</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#projects">View My Work</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
