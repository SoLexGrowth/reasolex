import { Section } from "@/components/shared/Section";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import type { Value } from "@/lib/types";

type ValueStatementsProps = {
  values: Value[];
};

export function ValueStatements({ values }: ValueStatementsProps) {
  return (
    <Section id="values" className="bg-muted/40">
      <div className="text-center mb-12">
        <h2 className="font-headline text-4xl font-bold">My Core Values</h2>
        <p className="text-lg text-muted-foreground mt-2">
          The principles that guide my work and interactions.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map((value) => (
          <Card key={value.title} className="text-center bg-background">
            <CardHeader>
              <CardTitle className="font-headline text-xl">{value.title}</CardTitle>
              <CardDescription className="mt-2">{value.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </Section>
  );
}
