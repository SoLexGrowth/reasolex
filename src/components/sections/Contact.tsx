import { Section } from "@/components/shared/Section";
import { Button } from "@/components/ui/button";
import type { ContactInfo } from "@/lib/types";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

type ContactProps = {
  contact: ContactInfo;
};

const SocialLink = ({ href, icon: Icon, label }: { href: string; icon: React.ElementType, label: string; }) => (
    <Button variant="outline" className="w-full justify-start gap-4" asChild>
      <a href={href.startsWith('mailto:') ? href : `https://${href}`} target="_blank" rel="noopener noreferrer">
        <Icon className="h-5 w-5 text-muted-foreground" />
        <span>{label}</span>
      </a>
    </Button>
);

export function Contact({ contact }: ContactProps) {
  return (
    <Section id="contact">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="font-headline text-4xl font-bold">Get In Touch</h2>
        <p className="text-lg text-muted-foreground mt-2 mb-8">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision.
        </p>
        <div className="flex flex-col gap-4 max-w-sm mx-auto">
            <SocialLink href={`mailto:${contact.email}`} icon={Mail} label={contact.email} />
            <SocialLink href={contact.socials.linkedin} icon={Linkedin} label="LinkedIn" />
            <SocialLink href={contact.socials.github} icon={Github} label="GitHub" />
            <SocialLink href={contact.socials.twitter} icon={Twitter} label="Twitter / X" />
        </div>
      </div>
    </Section>
  );
}
