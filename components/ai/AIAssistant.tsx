"use client";

import { useState } from "react";
import { Sparkles, LoaderCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import type { PortfolioData } from "@/lib/types";
import type { SuggestProfileContentImprovementsOutput } from "@/ai/flows/suggest-profile-content-improvements";
import { suggestProfileContentImprovements } from "@/ai/flows/suggest-profile-content-improvements";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Accordion } from "@/components/ui/accordion";
import { SuggestionSection } from "./SuggestionSection";

type AIAssistantProps = {
  portfolioData: PortfolioData;
};

export function AIAssistant({ portfolioData }: AIAssistantProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] =
    useState<SuggestProfileContentImprovementsOutput | null>(null);
  const { toast } = useToast();

  const handleOpenAssistant = async () => {
    setIsOpen(true);
    if (suggestions) return;

    setIsLoading(true);
    try {
      const input = {
        tagline: portfolioData.tagline,
        bio: portfolioData.introduction,
        projectDescriptions: portfolioData.projects.map((p) => p.description),
        valueStatements: portfolioData.values.map((v) => v.description),
      };
      const result = await suggestProfileContentImprovements(input);
      setSuggestions(result);
    } catch (error) {
      console.error("AI Assistant Error:", error);
      toast({
        variant: "destructive",
        title: "Error Fetching Suggestions",
        description:
          "Could not fetch AI suggestions at this time. Please try again later.",
      });
      setIsOpen(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={handleOpenAssistant}
          size="icon"
          className="h-14 w-14 rounded-full shadow-lg bg-primary hover:bg-primary/90 text-primary-foreground"
          aria-label="Open AI Assistant"
        >
          <Sparkles className="h-6 w-6" />
        </Button>
      </div>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent className="w-full sm:max-w-2xl overflow-y-auto">
          <SheetHeader>
            <SheetTitle>AI Content Assistant</SheetTitle>
            <SheetDescription>
              Enhance your profile with AI-powered suggestions and tools.
            </SheetDescription>
          </SheetHeader>
          <div className="py-4">
            {isLoading && (
              <div className="flex items-center justify-center gap-2 text-muted-foreground mt-8">
                <LoaderCircle className="h-5 w-5 animate-spin" />
                <span>Analyzing your content...</span>
              </div>
            )}
            {suggestions && (
              <Accordion type="multiple" className="w-full">
                <SuggestionSection
                  title="Tagline"
                  suggestions={suggestions.taglineSuggestions}
                  originalContent={portfolioData.tagline}
                />
                <SuggestionSection
                  title="Introduction / Bio"
                  suggestions={suggestions.bioSuggestions}
                  originalContent={portfolioData.introduction}
                />
                {portfolioData.projects.map((project, index) => (
                  <SuggestionSection
                    key={index}
                    title={`Project: ${project.title}`}
                    suggestions={
                      suggestions.projectDescriptionSuggestions?.[
                        project.description
                      ]
                    }
                    originalContent={project.description}
                  />
                ))}
                {portfolioData.values.map((value, index) => (
                    <SuggestionSection
                      key={index}
                      title={`Value: ${value.title}`}
                      suggestions={suggestions.valueStatementSuggestions?.[value.description]}
                      originalContent={value.description}
                    />
                ))}
              </Accordion>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
