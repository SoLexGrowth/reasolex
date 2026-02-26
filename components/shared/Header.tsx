import Link from "next/link";
import { Github, Linkedin, Menu, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { portfolioData } from "@/lib/data";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Values", href: "#values" },
  { name: "Contact", href: "#contact" },
];

const SocialLink = ({ href, icon: Icon }: { href: string, icon: React.ElementType }) => (
  <Button variant="ghost" size="icon" asChild>
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Icon className="h-5 w-5" />
    </a>
  </Button>
);

export function Header() {
  const { socials } = portfolioData.contact;
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="#" className="mr-6 flex items-center space-x-2">
            <span className="font-bold sm:inline-block font-headline text-lg">
              {portfolioData.name}
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <Link href="#" className="flex items-center">
                <span className="font-bold font-headline text-lg">{portfolioData.name}</span>
              </Link>
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-foreground/80"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-2">
            <SocialLink href={socials.github} icon={Github} />
            <SocialLink href={socials.linkedin} icon={Linkedin} />
            <SocialLink href={socials.twitter} icon={Twitter} />
        </div>
      </div>
    </header>
  );
}
