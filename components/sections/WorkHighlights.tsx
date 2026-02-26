import { Section } from "@/components/shared/Section";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import type { Accomplishment } from "@/lib/types";
import { Star } from "lucide-react";

type WorkHighlightsProps = {
  skills: string[];
  accomplishments: Accomplishment[];
};

export function WorkHighlights({ skills, accomplishments }: WorkHighlightsProps) {
  return (
    <Section id="about" className="bg-muted/40">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="font-headline text-3xl font-bold mb-6">Core Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-base px-4 py-2">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
        <div>
          <h2 className="font-headline text-3xl font-bold mb-6">Key Accomplishments</h2>
          <div className="space-y-4">
            {accomplishments.map((accomplishment) => (
              <Card key={accomplishment.title} className="bg-background">
                <CardHeader>
                  <CardTitle className="flex items-start gap-3">
                    <Star className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
                    <span>{accomplishment.title}</span>
                  </CardTitle>
                  <CardDescription className="pl-8">{accomplishment.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
